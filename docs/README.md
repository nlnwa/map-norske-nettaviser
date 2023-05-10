# Register of «Norske nettaviser (2005-)» #
*v.2022.11.07*<br><br>
This document describes the process of making a structured data set with Norwegian news web sites, published after 2005-.
The data set is produced by Jon Carlstedt Tønnessen, Research librarian in the National Library of Norway's (NB) Web Archive and DH-lab.

## Table of Content ##
1. [Description](#description)
2. [Scope and sources](#scope-and-sources)
3. [Data extracion and cleaning](#data-extraction-and-cleaning)
4. [Output format](#output-format)
5. [Licence](#licence)
6. [Bibliography](#bibliography)<br>
    a. [Python Libraries and Toolkits](#python-libraries-and-toolkits)<br>
    b. [Sources](#sources)<br>
    c. [Research Literature](#research-literature)<br>


## Description ##
This data set is a register of Norwegian web news sites, sometimes refered to as 'online newspapers', published after 2005-.
It offers relevant historical information, such as name of the publication, historical URLs, scope/distribution (national or local), geographical location and subject matter. The objective is to provide data about historical news sites, and facilitate academic research on this kind of material.


## Scope and sources ##
The term 'nettavis' (web news/online newspaper) is understood in a wide sense: A web site publishing news. This includes a spectrum of publications, from established media houses with professional editors and journalists, to smaller publications ran by semiprofessionals and amateurs. In addition, such publications must be regarded as relevant for public conversation or discourse in a context outside itself, such as a local community or a field of political discussion. More strict criterias, such as only including members of the Norwegian Press Association, would exclude several actors outside established media groups, even if they are highly significant in the web-based news sphere. This certaintly applies for so-called 'alternative media', niche publications and local news sites with semi-professional staff.

At the moment, there can not be found any authoritative register of Norwegian online newspapers. Even less, there exists any overview of historical and decommissioned news sites.

Data has been derived from archived versions of six different web sites that between 2005-21 offered lists of Norwegian web news: *Startsiden.no*, *Mylder.no*, *Norske-aviser.com*, *Store Norske Leksikon*, *Wikipedia* and *Forsidene.no*. The html code of these pages was saved from archived versions, found in Internet Archive. To cover historical changes, versions from 2006, 2011, 2016 and 2021 was included. 


## Data extraction and cleaning ##
Extracting data from html has been performed with the python library BeautifulSoup (v.4.9.0, see https://www.crummy.com/software/BeautifulSoup/bs4/doc/) and the lxml toolkit (https://lxml.de/parsing.html). 

Name of the publication and URLs has been parced from hyperlinks, identifying **anchor text** as name of publication and **href attribute value** as URL.

The Internet Archive's replay engine, Wayback Machine (IAWB), rewrites URLs to enable link functionality within the archive. To reconstruct URLs to their original form, the URLs were cleaned programmatically for references to IAWB's internal ecosystem, using the Regex library in python (v.2022.9.13, see https://pypi.org/project/regex/).


## Classification and categorisation ##
Publishing place equals the location of the editorial board or main editor. For most publications, this has been annotated manually based on information from the news sites in May 2022 (often found in the site's footer).

Information about county has been parced from categorisation found in *Norske-aviser.com* and *Store Norske Leksikon*. Name of counties matches with the Norwegian county structure as it will be from 2024.01.01. For national newspapers, information have been added manually, based on the editorial board's location. It should be highlighted that information about county refers to the location of the editorial board, and not necessarily to the scope of the publication.

To produce geographical coordinates, place names where normalised and parced to decimal separated geo coordinates, using the Dutch press agency Algemeen Nederlands Persbureau's geocoding service (https://geocode.localfocus.nl/). 6% of the normalised places names was uncertain or not identifiable, and coordinates for these places has been added manually, based on data from Norgeskart.no.

Every publication have been classified by its geographic scope and distribution, determined to be either 'national' or 'local' (the latter includes so-called 'regional' sites). Publications found to focus on certain subject matters have also been classified as 'niche', and sites publishing sami content or in the sami language as 'sami'.

Where former publication names, start or end dates of a publication have been available, this have been annotated in 'formerName', 'year_start', 'year_end' and 'comment'.


## Output format ##

Data are provided on the JSON format, containing the following keys:

* entityName: name of publication, parced from anchor text
* formerName: former name, if relevant and found
* url: current or last known URL, parced from href attribute value and cleaned with Regex
* url2: alternative or former URL
* url3: alternative or former URL
* url4: alternative or former URL
* urlLoke: URL to list of indexed versions in the Norwegian Web Archive 
* scope: classification by either geographic scope of content and distribution (national/local), as niche publication or sami
* subjectMatter: subject matter for niche publications (webonly, kristen, finans, lettlest, venstreside, kultur, landbruk, barn-unge, sentrum, arbeidsliv, it, samisk, medisin, forbruk, alt-media, innvandring, media, kyst, fiske, forskning, politikk, teknologi, student, kommunal, fisk, internasjonal, fotball, engelsk)
* publishPlace: name of city or township where editorial board is located
* geoCoordinates: latitude and longitude, provide as decimal-separated coordinates
* county: classified as they be from 01.01.2024 
* year_start: if start date of web publication have been found
* year_end: if end date of web publication have been found
* comment: comment, usually information about merges with other publications


## Licence ##

The data set is provided under the Norwegian Licence for Open Governmental Data (NLOD) 2.0 (https://data.norge.no/nlod/en/2.0) This grants you the right to copy, use and distribute information, provided you acknowledge the contributors and comply with the terms and conditions stipulated in this licence. By using information made available under this licence, you accept the terms and conditions set forth in this licence. 


## Bibliography ##

### Python Libraries and Toolkits ###
BeautifulSoup, v.4.9.0. https://www.crummy.com/software/BeautifulSoup/bs4/doc/
lxml. https://lxml.de/parsing.html
Regex. Version 2022.9.13. https://pypi.org/project/regex/

### Sources ###
«Administrative grenser». Geodata Online. Archived 20.04.2022 i Internet Archive Wayback Machine (IAWM), https://web.archive.org/web/20220420111417/https://dokumentasjon.geodataonline.no/docs/Temakart/Administrative%20grenser/<br>
«Alle landets nettaviser». *Norske-aviser.com*. Archived 11.01.2006 by IAWM, https://web.archive.org/web/20060117072542/http://www.Norske-aviser.com/<br>
«Alle landets nettaviser». *Norske-aviser.com*. Archived 29.08.2011 by IAWM, https://web.archive.org/web/20110829174144/http://www.Norske-aviser.com/<br>
«Aviser fylkesvis». *Norske-aviser.com*. Archived 04.03.2022 by IAWM, https://web.archive.org/web/20220304140146/https://www.Norske-aviser.com/geo/<br>
«Forsidene». *Forsidene.no*. Archived 30.03.2022 by IAWM, https://web.archive.org/web/20220330075719/https://www.Forsidene.no/  <br>
«Kilder». *Mylder.no*. Archived 09.07.2007 by IAWM, http://web.archive.org/web/20070820111631/http://www.Mylder.no/index.php?vis_kilder=3<br>
«Liste over norske aviser». *Wikipedia*. Archived 07.04.2022 by IAWM, https://web.archive.org/web/20220407145425/https://no.Wikipedia.org/wiki/Liste_over_norske_aviser<br>
«Liste over medlemmer». Landslaget for lokalaviser, 20.04.2022.  <br>
«Medlemsliste». Mediebedriftenes landsforbund, 20.04.2022.<br>
Solheim og Syvertsen (2022): «Norske aviser», *Store Norske Leksikon*. Archived 08.04.2022 by IAWM, https://web.archive.org/web/20220408104833/http://snl.no/.taxonomy/2940<br>
«Trafikktall», *Medietall.no*. Archived 20.04.2022 by IAWM, https://web.archive.org/web/20220420114315/https://Medietall.no/?liste=trafikktall<br>

### Research Literature ###
Buneman, Peter (1997). «Semistructured data». *Proceedings of the sixteenth ACM SIGACT-SIGMOD-SIGART symposium on Principles of database systems*: 117-121.<br>
Darmont, Jérôme et al. (2020). «Data lakes for digital humanities». I Proceedings of the 2nd International Conference on Digital Tools & Uses Congress: 1-4.<br>
Drucker, Johanna (2021). *The Digital Humanities Coursebook: An Introduction to Digital Methods for Research and Scholarship*. Routledge<br>
Engebretsen, Martin (2007): *Digitale diskurser. Nettavisen som kommunikativ flerbruksarena*. Høyskoleforlaget.<br>
Lindholm, Magne (2008): «Hva er en nettavis?». In R. Ottosen og AH Krumsvik (red.) *Journalistikk i en digital hverdag*. Høyskoleforlaget: 44-56. <br>
Tønnessen, Jon Carlstedt (2021): *Et nettverk av metaforer. Oslonett-aktørenes oversetting av kunnskap om internett og verdensveven fra forskning til fredagsunderholdning (1991-95)*. Masteroppgave, Universitetet i Oslo. http://urn.nb.no/URN:NBN:no-91416 <br>