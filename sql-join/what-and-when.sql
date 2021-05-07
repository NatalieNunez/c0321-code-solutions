select "films"."releaseYear",
       "categories"."name" as "genre"
    from "films"
    join "filmCategory" using ("filmId")
    join "categories" using ("categoryId")
    where "films"."title" = 'Boogie Amelie';
