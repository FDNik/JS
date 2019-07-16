const films = [
  {
    title: 'The Green Mile',
    creationYear: 1999,
    country: ['USA'],
    budget: '$60 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Paul Edgecomb',
      },
      {
        name: 'David Morse',
        age: 65,
        role: 'Brutus Howell',
      },
      {
        name: 'Michael Clarke Duncan',
        age: 54,
        role: 'John Coffey',
      },
    ],
    director: {
      name: 'Frank Darabont',
      age: 60,
      oscarsCount: 0,
    }
  },
  {
    title: 'Inception',
    creationYear: 2010,
    country: ['USA'],
    budget: '$160 000 000',
    actors: [
      {
        name: 'Leonardo DiCaprio',
        age: 44,
        role: 'Cobb',
      },
      {
        name: 'Joseph Gordon-Levitt',
        age: 38,
        role: 'Arthur',
      },
      {
        name: 'Ellen Page',
        age: 32,
        role: 'Ariadne',
      },
      {
        name: 'Tom Hardy',
        age: 41,
        role: 'Eames',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Forrest Gump',
    creationYear: 1994,
    country: ['USA'],
    budget: '$55 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Forrest Gump',
      },
      {
        name: 'Robin Wright',
        age: 53,
        role: 'Jenny Curran',
      },
      {
        name: 'Sally Field',
        age: 72,
        role: 'Mrs. Gump',
      },
    ],
    director: {
      name: 'Robert Zemeckis',
      age: 68,
      oscarsCount: 1,
    }
  },
  {
    title: 'Interstellar',
    creationYear: 2014,
    budget: '$165 000 000',
    country: ['USA','Great Britain', 'Canada'],
    actors: [
      {
        name: 'Matthew McConaughey',
        age: 49,
        role: 'Cooper',
      },
      {
        name: 'Anne Hathaway',
        age: 36,
        role: 'Brand',
      },
      {
        name: 'Jessica Chastain',
        age: 42,
        role: 'Murph',
      },
      {
        name: 'Michael Caine',
        age: 86,
        role: 'Professor Brand',
      },
      {
        name: 'Matt Damon',
        age: 48,
        role: 'Mann',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Catch Me If You Can',
    creationYear: 2002,
    budget: '$52 000 000',
    country: ['USA', 'Canada'],
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Carl Hanratty',
      },
      {
        name: 'Leonardo DiCaprio',
        age: 36,
        role: 'Frank Abagnale Jr.',
      },
      {
        name: 'Christopher Walken',
        age: 76,
        role: 'Frank Abagnale',
      },
      {
        name: 'Amy Adams',
        age: 44,
        role: 'Brenda Strong',
      },
    ],
    director: {
      name: 'Steven Spielberg',
      age: 72,
      oscarsCount: 4,
    }
  },
];

let dirCount0=false;
let ageS=0;
let budgetS=0;
const actersTwo = [];
const actersRez = [];

for (let i = 0; i < films.length; i++) {
filmNUM = films[i];
  for (let data in filmNUM) {
    if (data == "title") {
      document.writeln ( "<br>  <br>")
      document.writeln ( filmNUM[data] +"<br>")
      document.writeln ( "--------------------" + "<br>")
    }
    if (data == "director") {
      director = filmNUM[data];
      for (let dirDat in director) {
        if ( dirDat == "oscarsCount" && director["oscarsCount"] == 0 ) {
          dirCount0 = true;
        }
        if ( dirDat == "name" ) {
          document.writeln ( "director" + ":" + director[dirDat]  + "<br>")
        }
        else {
          document.writeln (dirDat + ":" + director[dirDat] + "<br>")
        }
      }
    }
    if ( data == "actors") {
      document.writeln ( "<br>")
      actors=filmNUM["actors"];
      for ( y = 0; y < actors.length; y++) {
        document.writeln ("actor №" + (y+1)+ ":")
        for (let inf in actors[y]) {
          if ( inf == "name" ) {
            document.writeln ( actors[y][inf]+"<br>")
          }
          else {
            document.writeln (inf + ":"+ actors[y][inf]+"<br>")
          }
        }
        document.writeln ( "<br>" );
      }
      }
      if (data == "creationYear" || data == "country" || data == "budget") document.writeln ( data + ":" + filmNUM[data] +  "<br>");
    }
}

  document.writeln ( "<br>" );
  budch = 0;

    for (let i1 = 0; i1 < films.length; i1++) {
        filmOne = films[i1];
        budgetOne = filmOne.budget;
        directorOne = filmOne.director;
        actors = filmOne["actors"]
          if (directorOne["oscarsCount"] == 0) {
          document.writeln ("Cредний возраст актеров в фильме " +filmOne.title );
            for (i2=0; i2<actors.length; i2++) {
              actors1 = actors[i2]
              ageS += actors[i2]["age"]
              }
                document.writeln ( (ageS/i2).toFixed(2)  + " лет"+ "<br>");
                ageS = 0;
          }
        if (filmOne.creationYear > 1995) {
          for ( y2 = 0; y2 < actors.length; y2++) {
            actersTwo.push (actors[y2]["name"])
          }
          u1 = actersTwo.length
          if ( actersTwo.indexOf("Tom Hanks") != -1 ) {
              for (let u = 0; u < actersTwo.length; u++) {
                if ( actersTwo[u] !== "Tom Hanks") {
                  actersRez.push ( actersTwo[u] );
                }
              }
          }
          actersTwo.splice(0, u1);
        }


      if (directorOne["age"] <70 ) {
          da = 0;

          for (u1 = 0; u1 < actors.length; u1++) {

            if (actors[u1]["name"] == "Tom Hanks" ) {
              da = 1;
            }
          }

            if (da == 0) {

              let budchs = "";
              for (u2 = 0; u2 < budgetOne.length; u2++) {

              if (isNumeric (budgetOne[u2])) {
                  budchs = budchs + budgetOne[u2];
                  }
                }
              budch = budch + +budchs;
              }

          }


    }


  document.writeln ("<br>" + "Актеры, игравшие в фильмах с Томом Хенксом после 1995 года" + ":" + actersRez + "<br>");

  document.writeln ("<br>" + "Общий бюджет фильмов режиссеров с возрастом менее 70 лет", "<br>" + "без участия Тома Хэнкса" + ":" + budch + "долларов");




  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
