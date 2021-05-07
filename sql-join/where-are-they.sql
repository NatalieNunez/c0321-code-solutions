select "a"."line1",
       "cities"."name" as "city",
       "a"."district",
       "countries"."name" as "country"
  from "addresses" as "a"
  join "cities" using ("cityId")
  join "countries" using ("countryId");
