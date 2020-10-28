# functional-programming
 
## Research Question:

How do costs, accesability and special parking days (like sundays) change from a company owned parking spot to a township owned parking spot?

### Assumptions:

I'm pretty sure that company owned parking spots are going to be more expensive than township owned one's. I also thing that company owned parking stopt are less accessible for peaple with dissabilities and that township parkingspots are trying to be more accessible to everyone. I think special parking days are the same for both.

## Datasets and Variables:

### Dataset: 

Open Data Parkeren: GEBIEDSBEHEERDER (https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIEDSBEHEERDER/2uc2-nnv3)

Variables: 

* AreaManagerId
* AreaManagerDesc

### Dataset: 

Open Data Parkeren: TARIEFBEREKENING (https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y)

Variables:

* AreaManagerId
* FareCalculationDesc (Calculating prices is unclear for now.)

### Dataset:

Aangesloten NPR Gemeenten Gehandicaptenparkeerkaart (https://opendata.rdw.nl/Parkeren/Aangesloten-NPR-Gemeenten-Gehandicaptenparkeerkaar/hn7m-6795)

Variables:

* Geo Locations (Don't know how to connect this dataset with the others.)

### Dataset: 

Open Data Parkeren: SPECIALE DAG (https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq)

Variables:

* AreaManagerId
* NameSpecialDay (This doesn't say anythis about how much the prices change.)
* DateSpecialDay
