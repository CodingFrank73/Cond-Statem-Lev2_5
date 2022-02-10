
let inputBL = document.getElementById("bundeslandInfo");
let out;

function check() {

    let convInputBL = inputBL.value.toLowerCase();

    switch (convInputBL) {
        case "baden-württemberg":
            out = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
            break;

        case "bayern":
            out = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
            break;

        case "berlin":
            out = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
            break;

        case "brandenburg":
            out = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
            break;

        case "bremen":
            out = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
            break;

        case "hamburg":
            out = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
            break;

        case "hessen":
            out = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
            break;

        case "mecklenburg-vorpommern":
            out = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
            break;

        case "niedersachsen":
            out = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
            break;

        case "nordrhein-westfalen":
            out = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
            break;

        case "rheinland-pfalz":
            out = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
            break;

        case "saarland":
            out = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
            break;

        case "sachsen":
            out = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
            break;

        case "sachsen-anhalt":
            out = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
            break;

        case "schleswig-holstein":
            out = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
            break;

        case "thüringen":
            out = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
            break;

        default:
            out = "Ein solches Bundesland gibt es in Deutschland nicht."
            break;
    }

    document.getElementById("bundeslandInfoErgebnis").innerHTML = out;
}