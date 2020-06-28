// implementing a 'breadth first search' algorithm to find the shortest path between two nodes, based on the description in Box 2.5 here: http://networksciencebook.com/chapter/2#box-2-5

//this breaks, for *some* inputs:
console.log(OldshortestPathBF(net, 'Q57193', 'Q72106', [], 0));

//this works
console.log(shortestPathBF(net, [{'n' : 0, 'id': 'Q57193'}], 'Q72106', []));


//previous, broken version, trying to implement a 'breadth first search' for shortest path:
function OldshortestPathBF(network, startId, endId, queue, n) {
    
    //my thinking was that this would stop runaway recursion in the case that it couldn't find a match, but it looks like it can run away even with very small n numbers, without any guarantee that it would have found a match if there was one
    if (n > 4) {
        return 'running too long';
    }
    if (startId == endId){
        console.log('match:');
        return {'n': n, 'id' : startId};
    } else {
        //get the ids of all the nodes that the current node is directly connected with
        let nextOutNodeIds = network.edges.filter((e) => e.source == startId).map((e) => e.target);
        let nextInNodeIds = network.edges.filter((e) => e.target == startId).map((e) => e.source);
        let nextLevelNodeIds = nextOutNodeIds.concat(nextInNodeIds);

        //add all these first-order links to the end of the queue, labelling them with their depth
        for (nodeId of nextLevelNodeIds) {
            queue.push({'n' : n+1, 'id': nodeId});
        }
        console.log(queue);
        
        // pull the next node from the *top* of the list (i.e. first-in-first-out) and call this function for it
        let nextNode = queue.shift();
        return shortestPathBF(network, nextNode.id, endId, queue, nextNode.n);
    }
}


// new version which seems to work fine? though probably not optimal, I guess!
function shortestPathBF(network, queue, endId, covered) {
    if (queue.length > 0){
        let currNode = queue.shift();
        let currId = currNode.id;
        let n = currNode.n;
        if (currId == endId){
            return n;
        } else {
            //get the ids of all the nodes that the current node is directly connected with
            let nextOutNodeIds = network.edges.filter((e) => e.source == currId).map((e) => e.target);
            let nextInNodeIds = network.edges.filter((e) => e.target == currId).map((e) => e.source);
            let nextLevelNodeIds = nextOutNodeIds.concat(nextInNodeIds);

            //add all these first-order links to the end of the queue, labelling them with their depth
            for (nodeId of nextLevelNodeIds) {
                if (! covered.includes(nodeId)){
                    queue.push({'n' : n+1, 'id': nodeId});
                    covered.push(nodeId);
                }
            }
            
            // call the function again with the new (shifted, and possibly pushed) queue
            return shortestPathBF(network, queue, endId, covered);
        }
    } else {
        return "node not found";
    }
}

const net = {
  "nodes": [
    {
      "id": "Q307",
      "label": "Galileo Galilei",
      "x": 1052,
      "y": 160,
      "displayLabel": false
    },
    {
      "id": "Q448",
      "label": "Denis Diderot",
      "x": 999,
      "y": 270,
      "displayLabel": false
    },
    {
      "id": "Q619",
      "label": "Nicolaus Copernicus",
      "x": 436,
      "y": 121,
      "displayLabel": false
    },
    {
      "id": "Q859",
      "label": "Plato",
      "x": 66,
      "y": 211,
      "displayLabel": false
    },
    {
      "id": "Q868",
      "label": "Aristotle",
      "x": 278,
      "y": 211,
      "displayLabel": false
    },
    {
      "id": "Q913",
      "label": "Socrates",
      "x": 613,
      "y": 88,
      "displayLabel": false
    },
    {
      "id": "Q935",
      "label": "Isaac Newton",
      "x": 1026,
      "y": 39,
      "displayLabel": false
    },
    {
      "id": "Q937",
      "label": "Albert Einstein",
      "x": 763,
      "y": 59,
      "displayLabel": false
    },
    {
      "id": "Q991",
      "label": "Fyodor Dostoyevsky",
      "x": 949,
      "y": 276,
      "displayLabel": false
    },
    {
      "id": "Q1001",
      "label": "Mohandas Karamchand Gandhi",
      "x": 110,
      "y": 295,
      "displayLabel": false
    },
    {
      "id": "Q1067",
      "label": "Dante Alighieri",
      "x": 818,
      "y": 270,
      "displayLabel": false
    },
    {
      "id": "Q1290",
      "label": "Blaise Pascal",
      "x": 394,
      "y": 281,
      "displayLabel": false
    },
    {
      "id": "Q1399",
      "label": "Niccolò Machiavelli",
      "x": 923,
      "y": 25,
      "displayLabel": false
    },
    {
      "id": "Q1541",
      "label": "Cicero",
      "x": 302,
      "y": 223,
      "displayLabel": false
    },
    {
      "id": "Q43216",
      "label": "Epicurus",
      "x": 96,
      "y": 77,
      "displayLabel": false
    },
    {
      "id": "Q43393",
      "label": "Robert Boyle",
      "x": 357,
      "y": 241,
      "displayLabel": false
    },
    {
      "id": "Q43499",
      "label": "Erasmus",
      "x": 844,
      "y": 47,
      "displayLabel": false
    },
    {
      "id": "Q43936",
      "label": "William of Ockham",
      "x": 1141,
      "y": 75,
      "displayLabel": false
    },
    {
      "id": "Q43939",
      "label": "Anselm of Canterbury",
      "x": 1112,
      "y": 199,
      "displayLabel": false
    },
    {
      "id": "Q44272",
      "label": "Michel Foucault",
      "x": 885,
      "y": 205,
      "displayLabel": false
    },
    {
      "id": "Q44845",
      "label": "Peter Sloterdijk",
      "x": 567,
      "y": 176,
      "displayLabel": false
    },
    {
      "id": "Q47154",
      "label": "Lucretius",
      "x": 862,
      "y": 200,
      "displayLabel": false
    },
    {
      "id": "Q48226",
      "label": "Ralph Waldo Emerson",
      "x": 1064,
      "y": 193,
      "displayLabel": false
    },
    {
      "id": "Q48301",
      "label": "Martin Heidegger",
      "x": 88,
      "y": 170,
      "displayLabel": false
    },
    {
      "id": "Q50020",
      "label": "John Stuart Mill",
      "x": 787,
      "y": 129,
      "displayLabel": false
    },
    {
      "id": "Q13529",
      "label": "Alfred Marshall",
      "x": 1103,
      "y": 101,
      "displayLabel": false
    },
    {
      "id": "Q13575",
      "label": "François Quesnay",
      "x": 590,
      "y": 280,
      "displayLabel": false
    },
    {
      "id": "Q15948",
      "label": "Émile Durkheim",
      "x": 549,
      "y": 267,
      "displayLabel": false
    },
    {
      "id": "Q15975",
      "label": "Montesquieu",
      "x": 622,
      "y": 282,
      "displayLabel": false
    },
    {
      "id": "Q22670",
      "label": "Friedrich Schiller",
      "x": 719,
      "y": 252,
      "displayLabel": false
    },
    {
      "id": "Q27645",
      "label": "Mikhail Bakunin",
      "x": 656,
      "y": 61,
      "displayLabel": false
    },
    {
      "id": "Q33760",
      "label": "Bertrand Russell",
      "x": 301,
      "y": 193,
      "displayLabel": false
    },
    {
      "id": "Q34628",
      "label": "Gotthold Ephraim Lessing",
      "x": 712,
      "y": 160,
      "displayLabel": false
    },
    {
      "id": "Q4604",
      "label": "Confucius",
      "x": 1025,
      "y": 224,
      "displayLabel": false
    },
    {
      "id": "Q5264",
      "label": "Hippocrates",
      "x": 988,
      "y": 66,
      "displayLabel": false
    },
    {
      "id": "Q5749",
      "label": "Pierre-Joseph Proudhon",
      "x": 889,
      "y": 184,
      "displayLabel": false
    },
    {
      "id": "Q5752",
      "label": "Peter Kropotkin",
      "x": 16,
      "y": 239,
      "displayLabel": false
    },
    {
      "id": "Q5879",
      "label": "Johann Wolfgang von Goethe",
      "x": 153,
      "y": 258,
      "displayLabel": false
    },
    {
      "id": "Q6512",
      "label": "Søren Kierkegaard",
      "x": 748,
      "y": 227,
      "displayLabel": false
    },
    {
      "id": "Q6527",
      "label": "Jean-Jacques Rousseau",
      "x": 1116,
      "y": 28,
      "displayLabel": false
    },
    {
      "id": "Q7060",
      "label": "Michel Onfray",
      "x": 188,
      "y": 78,
      "displayLabel": false
    },
    {
      "id": "Q7197",
      "label": "Simone de Beauvoir",
      "x": 627,
      "y": 291,
      "displayLabel": false
    },
    {
      "id": "Q7243",
      "label": "Leo Tolstoy",
      "x": 140,
      "y": 80,
      "displayLabel": false
    },
    {
      "id": "Q7286",
      "label": "Émilie du Châtelet",
      "x": 617,
      "y": 251,
      "displayLabel": false
    },
    {
      "id": "Q8011",
      "label": "Avicenna",
      "x": 132,
      "y": 34,
      "displayLabel": false
    },
    {
      "id": "Q8018",
      "label": "Augustine of Hippo",
      "x": 424,
      "y": 35,
      "displayLabel": false
    },
    {
      "id": "Q8963",
      "label": "Johannes Kepler",
      "x": 673,
      "y": 101,
      "displayLabel": false
    },
    {
      "id": "Q9047",
      "label": "Gottfried Wilhelm Leibniz",
      "x": 930,
      "y": 80,
      "displayLabel": false
    },
    {
      "id": "Q57112",
      "label": "Oswald Spengler",
      "x": 759,
      "y": 112,
      "displayLabel": false
    },
    {
      "id": "Q57186",
      "label": "Samuel von Pufendorf",
      "x": 291,
      "y": 286,
      "displayLabel": false
    },
    {
      "id": "Q57193",
      "label": "Moritz Schlick",
      "x": 843,
      "y": 23,
      "displayLabel": false
    },
    {
      "id": "Q57196",
      "label": "Franz Brentano",
      "x": 395,
      "y": 198,
      "displayLabel": false
    },
    {
      "id": "Q57255",
      "label": "Hans Jonas",
      "x": 641,
      "y": 51,
      "displayLabel": false
    },
    {
      "id": "Q57497",
      "label": "Carl Stumpf",
      "x": 1175,
      "y": 296,
      "displayLabel": false
    },
    {
      "id": "Q57554",
      "label": "Georg Christoph Lichtenberg",
      "x": 1171,
      "y": 211,
      "displayLabel": false
    },
    {
      "id": "Q58586",
      "label": "Edmund Husserl",
      "x": 919,
      "y": 298,
      "displayLabel": false
    },
    {
      "id": "Q58853",
      "label": "Karl-Otto Apel",
      "x": 1146,
      "y": 153,
      "displayLabel": false
    },
    {
      "id": "Q60025",
      "label": "Hannah Arendt",
      "x": 951,
      "y": 126,
      "displayLabel": false
    },
    {
      "id": "Q60028",
      "label": "Gottlob Frege",
      "x": 1139,
      "y": 97,
      "displayLabel": false
    },
    {
      "id": "Q60059",
      "label": "Albertus Magnus",
      "x": 519,
      "y": 148,
      "displayLabel": false
    },
    {
      "id": "Q60070",
      "label": "Friedrich Wilhelm Joseph Schelling",
      "x": 123,
      "y": 243,
      "displayLabel": false
    },
    {
      "id": "Q60080",
      "label": "Wilhelm Dilthey",
      "x": 49,
      "y": 248,
      "displayLabel": false
    },
    {
      "id": "Q60104",
      "label": "Paul Tillich",
      "x": 1049,
      "y": 120,
      "displayLabel": false
    },
    {
      "id": "Q60735",
      "label": "Axel Honneth",
      "x": 327,
      "y": 296,
      "displayLabel": false
    },
    {
      "id": "Q61078",
      "label": "Walter Benjamin",
      "x": 1073,
      "y": 34,
      "displayLabel": false
    },
    {
      "id": "Q61255",
      "label": "Kuno Fischer",
      "x": 1087,
      "y": 102,
      "displayLabel": false
    },
    {
      "id": "Q61271",
      "label": "Reinhart Koselleck",
      "x": 770,
      "y": 225,
      "displayLabel": false
    },
    {
      "id": "Q61674",
      "label": "Friedrich Albert Lange",
      "x": 642,
      "y": 132,
      "displayLabel": false
    },
    {
      "id": "Q62596",
      "label": "Paul Rée",
      "x": 344,
      "y": 60,
      "displayLabel": false
    },
    {
      "id": "Q62977",
      "label": "Walter Kaufmann",
      "x": 61,
      "y": 285,
      "displayLabel": false
    },
    {
      "id": "Q63081",
      "label": "Johannes Nikolaus Tetens",
      "x": 627,
      "y": 50,
      "displayLabel": false
    },
    {
      "id": "Q64406",
      "label": "Henrik Steffens",
      "x": 574,
      "y": 156,
      "displayLabel": false
    },
    {
      "id": "Q34670",
      "label": "Albert Camus",
      "x": 1193,
      "y": 84,
      "displayLabel": false
    },
    {
      "id": "Q34787",
      "label": "Friedrich Engels",
      "x": 265,
      "y": 183,
      "displayLabel": false
    },
    {
      "id": "Q34943",
      "label": "Ptolemy",
      "x": 396,
      "y": 156,
      "displayLabel": false
    },
    {
      "id": "Q35802",
      "label": "Benedictus de Spinoza",
      "x": 385,
      "y": 291,
      "displayLabel": false
    },
    {
      "id": "Q35900",
      "label": "Omar Khayyám",
      "x": 881,
      "y": 224,
      "displayLabel": false
    },
    {
      "id": "Q36303",
      "label": "Thales",
      "x": 921,
      "y": 146,
      "displayLabel": false
    },
    {
      "id": "Q36330",
      "label": "Giordano Bruno",
      "x": 1026,
      "y": 123,
      "displayLabel": false
    },
    {
      "id": "Q37160",
      "label": "David Hume",
      "x": 262,
      "y": 96,
      "displayLabel": false
    },
    {
      "id": "Q37388",
      "label": "Francis Bacon",
      "x": 464,
      "y": 224,
      "displayLabel": false
    },
    {
      "id": "Q37621",
      "label": "Thomas Hobbes",
      "x": 522,
      "y": 151,
      "displayLabel": false
    },
    {
      "id": "Q38193",
      "label": "Arthur Schopenhauer",
      "x": 1068,
      "y": 38,
      "displayLabel": false
    },
    {
      "id": "Q38873",
      "label": "Lou Andreas-Salomé",
      "x": 179,
      "y": 239,
      "displayLabel": false
    },
    {
      "id": "Q39837",
      "label": "Averroes",
      "x": 985,
      "y": 200,
      "displayLabel": false
    },
    {
      "id": "Q41155",
      "label": "Heraclitus",
      "x": 134,
      "y": 159,
      "displayLabel": false
    },
    {
      "id": "Q41513",
      "label": "William Blake",
      "x": 988,
      "y": 300,
      "displayLabel": false
    },
    {
      "id": "Q41568",
      "label": "Michel de Montaigne",
      "x": 831,
      "y": 208,
      "displayLabel": false
    },
    {
      "id": "Q41585",
      "label": "David Hilbert",
      "x": 1019,
      "y": 252,
      "displayLabel": false
    },
    {
      "id": "Q41980",
      "label": "Democritus",
      "x": 365,
      "y": 198,
      "displayLabel": false
    },
    {
      "id": "Q42156",
      "label": "Henri Bergson",
      "x": 102,
      "y": 274,
      "displayLabel": false
    },
    {
      "id": "Q9358",
      "label": "Friedrich Nietzsche",
      "x": 590,
      "y": 213,
      "displayLabel": false
    },
    {
      "id": "Q9364",
      "label": "Jean-Paul Sartre",
      "x": 199,
      "y": 291,
      "displayLabel": false
    },
    {
      "id": "Q9381",
      "label": "Adam Smith",
      "x": 605,
      "y": 120,
      "displayLabel": false
    },
    {
      "id": "Q9391",
      "label": "Ludwig Wittgenstein",
      "x": 1023,
      "y": 144,
      "displayLabel": false
    },
    {
      "id": "Q9438",
      "label": "Thomas Aquinas",
      "x": 23,
      "y": 237,
      "displayLabel": false
    },
    {
      "id": "Q9441",
      "label": "Gautama Buddha",
      "x": 1065,
      "y": 22,
      "displayLabel": false
    },
    {
      "id": "Q9546",
      "label": "Al-Ghazali",
      "x": 81,
      "y": 275,
      "displayLabel": false
    },
    {
      "id": "Q9554",
      "label": "Martin Luther",
      "x": 1074,
      "y": 244,
      "displayLabel": false
    },
    {
      "id": "Q10261",
      "label": "Pythagoras",
      "x": 488,
      "y": 101,
      "displayLabel": false
    },
    {
      "id": "Q11031",
      "label": "Vilfredo Pareto",
      "x": 541,
      "y": 186,
      "displayLabel": false
    },
    {
      "id": "Q11104",
      "label": "Ibn al-Haytham",
      "x": 163,
      "y": 273,
      "displayLabel": false
    },
    {
      "id": "Q11826",
      "label": "Al-Biruni",
      "x": 682,
      "y": 261,
      "displayLabel": false
    },
    {
      "id": "Q11903",
      "label": "Hypatia",
      "x": 1023,
      "y": 229,
      "displayLabel": false
    },
    {
      "id": "Q12718",
      "label": "Auguste Comte",
      "x": 616,
      "y": 118,
      "displayLabel": false
    },
    {
      "id": "Q12735",
      "label": "Johann Amos Comenius",
      "x": 624,
      "y": 19,
      "displayLabel": false
    },
    {
      "id": "Q12807",
      "label": "Umberto Eco",
      "x": 290,
      "y": 105,
      "displayLabel": false
    },
    {
      "id": "Q66061",
      "label": "Adolf Reinach",
      "x": 101,
      "y": 67,
      "displayLabel": false
    },
    {
      "id": "Q67323",
      "label": "Jakob Thomasius",
      "x": 707,
      "y": 92,
      "displayLabel": false
    },
    {
      "id": "Q71029",
      "label": "Hermann Weyl",
      "x": 321,
      "y": 270,
      "displayLabel": false
    },
    {
      "id": "Q71263",
      "label": "Moritz Geiger",
      "x": 163,
      "y": 170,
      "displayLabel": false
    },
    {
      "id": "Q9061",
      "label": "Karl Marx",
      "x": 513,
      "y": 202,
      "displayLabel": false
    },
    {
      "id": "Q9068",
      "label": "Voltaire",
      "x": 785,
      "y": 105,
      "displayLabel": false
    },
    {
      "id": "Q9191",
      "label": "René Descartes",
      "x": 1188,
      "y": 164,
      "displayLabel": false
    },
    {
      "id": "Q9235",
      "label": "Georg Wilhelm Friedrich Hegel",
      "x": 645,
      "y": 60,
      "displayLabel": false
    },
    {
      "id": "Q9312",
      "label": "Immanuel Kant",
      "x": 165,
      "y": 253,
      "displayLabel": false
    },
    {
      "id": "Q9353",
      "label": "John Locke",
      "x": 1148,
      "y": 300,
      "displayLabel": false
    },
    {
      "id": "Q72074",
      "label": "Oskar Becker",
      "x": 863,
      "y": 234,
      "displayLabel": false
    },
    {
      "id": "Q72106",
      "label": "Bruno Bauch",
      "x": 791,
      "y": 85,
      "displayLabel": false
    },
    {
      "id": "Q72107",
      "label": "Alexander Pfänder",
      "x": 555,
      "y": 264,
      "displayLabel": false
    },
    {
      "id": "Q72151",
      "label": "Markus Herz",
      "x": 232,
      "y": 265,
      "displayLabel": false
    }
  ],
  "edges": [
    {
      "source": "Q43393",
      "target": "Q307",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q8963",
      "target": "Q619",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q36330",
      "target": "Q619",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q868",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48226",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48301",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7243",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q37621",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q38193",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q11903",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9068",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9191",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q859",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q448",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q619",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q1067",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q43936",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48301",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q6512",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7243",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q8011",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q34943",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q37621",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q39837",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q11104",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q11903",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9191",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q868",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q859",
      "target": "Q913",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q868",
      "target": "Q913",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q913",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q913",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q937",
      "target": "Q935",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7286",
      "target": "Q935",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9068",
      "target": "Q935",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q935",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q937",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q937",
      "target": "Q991",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q27645",
      "target": "Q991",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7243",
      "target": "Q991",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q991",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q937",
      "target": "Q1001",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q41513",
      "target": "Q1067",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q1290",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q1290",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q1290",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9068",
      "target": "Q1290",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q1399",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q1399",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q1399",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q43499",
      "target": "Q1541",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q5749",
      "target": "Q1541",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q1541",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9068",
      "target": "Q1541",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q868",
      "target": "Q43216",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q43216",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q43216",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9191",
      "target": "Q43936",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q43936",
      "target": "Q43939",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q43939",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q43939",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9191",
      "target": "Q43939",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q43939",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q47154",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q48226",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q44272",
      "target": "Q48301",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q44845",
      "target": "Q48301",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q57255",
      "target": "Q48301",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q58853",
      "target": "Q48301",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q48301",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q61271",
      "target": "Q48301",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9364",
      "target": "Q48301",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q72074",
      "target": "Q48301",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q33760",
      "target": "Q50020",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60080",
      "target": "Q50020",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9381",
      "target": "Q13575",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q15948",
      "target": "Q15975",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q15975",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q15975",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q991",
      "target": "Q22670",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9391",
      "target": "Q33760",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q6512",
      "target": "Q34628",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q13575",
      "target": "Q4604",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q4604",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9068",
      "target": "Q4604",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q868",
      "target": "Q5264",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q8011",
      "target": "Q5264",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q27645",
      "target": "Q5749",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7243",
      "target": "Q5749",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7243",
      "target": "Q5752",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q22670",
      "target": "Q5879",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q57112",
      "target": "Q5879",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q61078",
      "target": "Q5879",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q38193",
      "target": "Q5879",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q5879",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48301",
      "target": "Q6512",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q6512",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q62977",
      "target": "Q6512",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q34670",
      "target": "Q6512",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q6512",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9391",
      "target": "Q6512",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q27645",
      "target": "Q6527",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q5749",
      "target": "Q6527",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7243",
      "target": "Q6527",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q6527",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q6527",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q6527",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q1001",
      "target": "Q7243",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q8011",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35900",
      "target": "Q8011",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q8011",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q1290",
      "target": "Q8018",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q6512",
      "target": "Q8018",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q8018",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q8018",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q8018",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q33760",
      "target": "Q9047",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q9047",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q9047",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q9047",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q57112",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9353",
      "target": "Q57186",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q937",
      "target": "Q57193",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q58586",
      "target": "Q57196",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q57255",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q58586",
      "target": "Q57497",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q57554",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48301",
      "target": "Q58586",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q57255",
      "target": "Q58586",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q58586",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q66061",
      "target": "Q58586",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q71029",
      "target": "Q58586",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q71263",
      "target": "Q58586",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q72074",
      "target": "Q58586",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q72107",
      "target": "Q58586",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q33760",
      "target": "Q60028",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q58586",
      "target": "Q60028",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q60028",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9391",
      "target": "Q60028",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q60059",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q6512",
      "target": "Q60070",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q64406",
      "target": "Q60070",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q60070",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q60104",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q61078",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q72106",
      "target": "Q61255",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q61674",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q62596",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q63081",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7060",
      "target": "Q34670",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q619",
      "target": "Q34943",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q1067",
      "target": "Q34943",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q11903",
      "target": "Q34943",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q448",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q937",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q33760",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60070",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q38193",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q38873",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q35802",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q10261",
      "target": "Q36303",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q36330",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q36330",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q937",
      "target": "Q37160",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q33760",
      "target": "Q37160",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q38193",
      "target": "Q37160",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q37160",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q37160",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q43393",
      "target": "Q37388",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q37388",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q37621",
      "target": "Q37388",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q37621",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q37621",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9353",
      "target": "Q37621",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q937",
      "target": "Q38193",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7243",
      "target": "Q38193",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q38193",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q38193",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9391",
      "target": "Q38193",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q38873",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q39837",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q36330",
      "target": "Q39837",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q39837",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q859",
      "target": "Q41155",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q868",
      "target": "Q41155",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48301",
      "target": "Q41155",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q34787",
      "target": "Q41155",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q41155",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q41155",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q1290",
      "target": "Q41568",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48226",
      "target": "Q41568",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q41568",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q41568",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q868",
      "target": "Q41980",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q43216",
      "target": "Q41980",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q41980",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q41980",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q44272",
      "target": "Q9358",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48301",
      "target": "Q9358",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7060",
      "target": "Q9358",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q62977",
      "target": "Q9358",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q34670",
      "target": "Q9358",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q38873",
      "target": "Q9358",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7197",
      "target": "Q9364",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60735",
      "target": "Q9364",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q33760",
      "target": "Q9391",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q58853",
      "target": "Q9391",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q1067",
      "target": "Q9438",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q43936",
      "target": "Q9438",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48301",
      "target": "Q9438",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q9438",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q12807",
      "target": "Q9438",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9191",
      "target": "Q9438",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q1001",
      "target": "Q9441",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q7243",
      "target": "Q9441",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9438",
      "target": "Q9546",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q6512",
      "target": "Q9554",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q859",
      "target": "Q10261",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q13529",
      "target": "Q11031",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q8011",
      "target": "Q11826",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q11903",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q15948",
      "target": "Q12718",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q12718",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q12735",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q67323",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q44272",
      "target": "Q9061",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q27645",
      "target": "Q9061",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q5749",
      "target": "Q9061",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q9061",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q61078",
      "target": "Q9061",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q34787",
      "target": "Q9061",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9364",
      "target": "Q9061",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q448",
      "target": "Q9068",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q9068",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q935",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q1290",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q43393",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9047",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q58586",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q35802",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9353",
      "target": "Q9191",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48226",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q27645",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q5749",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q6512",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60080",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q62977",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9364",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9061",
      "target": "Q9235",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q991",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q44272",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q48301",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q22670",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q6512",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q58586",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60025",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60070",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q60080",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q38193",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q41585",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q42156",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9358",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q12807",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q71029",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9235",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q72151",
      "target": "Q9312",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q37160",
      "target": "Q9353",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q38193",
      "target": "Q9353",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9068",
      "target": "Q9353",
      "color": "",
      "weight": ""
    },
    {
      "source": "Q9312",
      "target": "Q9353",
      "color": "",
      "weight": ""
    }
  ]
};