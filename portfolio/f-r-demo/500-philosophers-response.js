// get random philsosophers:
// https://query.wikidata.org/#SELECT%20%3Fitem%20%3FitemLabel%20%3Finfluenced_by%20%3Finfluenced_byLabel%20%28MD5%28CONCAT%28str%28%3Fitem%29%2Cstr%28RAND%28%29%29%29%29%20as%20%3Frandom%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20WHERE%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fitem%20wdt%3AP106%20wd%3AQ4964182%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wdt%3AP737%20%3Finfluenced_by.%20%23This%20means%20only%20those%20people%20who%20have%20an%20influenced_by%20will%20be%20returned%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20ORDER%20BY%20%3Frandom%0ALIMIT%20501

//musician query: https://query.wikidata.org/#SELECT%20%3Fitem%20%3FitemLabel%20%3Finfluenced_by%20%3Finfluenced_byLabel%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20WHERE%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fitem%20wdt%3AP106%20wd%3AQ4964182%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fitem%20wdt%3AP106%20wd%3AQ639669%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wdt%3AP737%20%3Finfluenced_by.%20%23This%20means%20only%20those%20people%20who%20have%20an%20influenced_by%20will%20be%20returned%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20


const allPhilosophers = [{"item":"http://www.wikidata.org/entity/Q448","itemLabel":"Denis Diderot","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q742","influenced_byLabel":"Jean Racine"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q11903","itemLabel":"Hypatia","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q37621","itemLabel":"Thomas Hobbes","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q48226","itemLabel":"Ralph Waldo Emerson","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q77144","itemLabel":"Leo Strauss","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q271809","itemLabel":"Proclus","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q767","influenced_byLabel":"Stéphane Mallarmé"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q434346","itemLabel":"Victor Cousin","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q855","influenced_byLabel":"Joseph Stalin"},{"item":"http://www.wikidata.org/entity/Q528261","itemLabel":"Ralph Cudworth","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q537304","itemLabel":"Ploutarchos of Athens","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q664619","itemLabel":"Rémi Brague","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q666230","itemLabel":"Aristobulus of Paneas","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q731904","itemLabel":"Valentin Ferdinandovich Asmus","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q1087945","itemLabel":"Dmitry Galkovsky","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q1173486","itemLabel":"David Anhaght","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q2332520","itemLabel":"Damaris Masham","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q2716613","itemLabel":"Ferdinand Alquié","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q3675891","itemLabel":"Christos Androutsos","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q28092109","itemLabel":"Pierre-Jean Labarrière","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q28152056","itemLabel":"Metrofan Aksyonov","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q3343837","itemLabel":"Normand Baillargeon","influenced_by":"http://www.wikidata.org/entity/Q5","influenced_byLabel":"human"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q502","influenced_byLabel":"Stendhal"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q502","influenced_byLabel":"Stendhal"},{"item":"http://www.wikidata.org/entity/Q43393","itemLabel":"Robert Boyle","influenced_by":"http://www.wikidata.org/entity/Q307","influenced_byLabel":"Galileo Galilei"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q302","influenced_byLabel":"Jesus"},{"item":"http://www.wikidata.org/entity/Q61078","itemLabel":"Walter Benjamin","influenced_by":"http://www.wikidata.org/entity/Q501","influenced_byLabel":"Charles Baudelaire"},{"item":"http://www.wikidata.org/entity/Q310903","itemLabel":"Neil deGrasse Tyson","influenced_by":"http://www.wikidata.org/entity/Q410","influenced_byLabel":"Carl Sagan"},{"item":"http://www.wikidata.org/entity/Q712946","itemLabel":"Jacques Barzun","influenced_by":"http://www.wikidata.org/entity/Q448","influenced_byLabel":"Denis Diderot"},{"item":"http://www.wikidata.org/entity/Q3592370","itemLabel":"Étienne Tassin","influenced_by":"http://www.wikidata.org/entity/Q448","influenced_byLabel":"Denis Diderot"},{"item":"http://www.wikidata.org/entity/Q20968412","itemLabel":"Marina Garcés","influenced_by":"http://www.wikidata.org/entity/Q448","influenced_byLabel":"Denis Diderot"},{"item":"http://www.wikidata.org/entity/Q80322726","itemLabel":"Mircea Ciobanu","influenced_by":"http://www.wikidata.org/entity/Q301","influenced_byLabel":"El Greco"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q535","influenced_byLabel":"Victor Hugo"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q692","influenced_byLabel":"William Shakespeare"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q535","influenced_byLabel":"Victor Hugo"},{"item":"http://www.wikidata.org/entity/Q8963","itemLabel":"Johannes Kepler","influenced_by":"http://www.wikidata.org/entity/Q619","influenced_byLabel":"Nicolaus Copernicus"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q692","influenced_byLabel":"William Shakespeare"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q692","influenced_byLabel":"William Shakespeare"},{"item":"http://www.wikidata.org/entity/Q36330","itemLabel":"Giordano Bruno","influenced_by":"http://www.wikidata.org/entity/Q619","influenced_byLabel":"Nicolaus Copernicus"},{"item":"http://www.wikidata.org/entity/Q216692","itemLabel":"Ludvig Holberg","influenced_by":"http://www.wikidata.org/entity/Q687","influenced_byLabel":"Molière"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q692","influenced_byLabel":"William Shakespeare"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q535","influenced_byLabel":"Victor Hugo"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q11104","itemLabel":"Ibn al-Haytham","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q11903","itemLabel":"Hypatia","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q909","influenced_byLabel":"Jorge Luis Borges"},{"item":"http://www.wikidata.org/entity/Q34943","itemLabel":"Ptolemy","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q37621","itemLabel":"Thomas Hobbes","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q39837","itemLabel":"Averroes","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q43936","itemLabel":"William of Ockham","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q905","influenced_byLabel":"Franz Kafka"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q905","influenced_byLabel":"Franz Kafka"},{"item":"http://www.wikidata.org/entity/Q102851","itemLabel":"Boethius","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q127398","itemLabel":"Moshe ben Maimon","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q132524","itemLabel":"Ayn Rand","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q909","influenced_byLabel":"Jorge Luis Borges"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q229646","itemLabel":"G. E. M. Anscombe","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q235470","itemLabel":"Martha Nussbaum","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q271809","itemLabel":"Proclus","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q272615","itemLabel":"J. L. Austin","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q275500","itemLabel":"Jean Buridan","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q313929","itemLabel":"Mortimer Jerome Adler","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q346523","itemLabel":"Andrea Cesalpino","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q355903","itemLabel":"Siger of Brabant","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q360366","itemLabel":"Nicomachus","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q517390","itemLabel":"Chantal Delsol","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q528415","itemLabel":"Hasdai Crescas","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q537304","itemLabel":"Ploutarchos of Athens","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q664619","itemLabel":"Rémi Brague","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q809101","itemLabel":"Barry Smith","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q1087945","itemLabel":"Dmitry Galkovsky","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q1173486","itemLabel":"David Anhaght","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q2332520","itemLabel":"Damaris Masham","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q3386096","itemLabel":"Pierre Manent","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q4115307","itemLabel":"Al-Jubba'i","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q9391","itemLabel":"Ludwig Wittgenstein","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q34670","itemLabel":"Albert Camus","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q48226","itemLabel":"Ralph Waldo Emerson","influenced_by":"http://www.wikidata.org/entity/Q6240","influenced_byLabel":"Hafez"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q62977","itemLabel":"Walter Kaufmann","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q381256","itemLabel":"Lucian Blaga","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q6691","influenced_byLabel":"Homer"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q6691","influenced_byLabel":"Homer"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q6691","influenced_byLabel":"Homer"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q6882","influenced_byLabel":"James Joyce"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q102585","itemLabel":"Johann Gottlieb Fichte","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q105428","itemLabel":"Johann Heinrich Pestalozzi","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q113741","itemLabel":"Olga Taussky-Todd","influenced_by":"http://www.wikidata.org/entity/Q7099","influenced_byLabel":"Emmy Noether"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q6882","influenced_byLabel":"James Joyce"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q185085","itemLabel":"Miguel de Unamuno","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q471523","itemLabel":"Francesco De Sanctis","influenced_by":"http://www.wikidata.org/entity/Q6691","influenced_byLabel":"Homer"},{"item":"http://www.wikidata.org/entity/Q670042","itemLabel":"Eduardo Lourenço","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q971585","itemLabel":"Hubert Dreyfus","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q11079","influenced_byLabel":"Muḥammad ibn Jābir al-Ḥarrānī al-Battānī"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q10261","influenced_byLabel":"Pythagoras"},{"item":"http://www.wikidata.org/entity/Q13529","itemLabel":"Alfred Marshall","influenced_by":"http://www.wikidata.org/entity/Q11031","influenced_byLabel":"Vilfredo Pareto"},{"item":"http://www.wikidata.org/entity/Q31439","itemLabel":"Abraham bar Hiyya","influenced_by":"http://www.wikidata.org/entity/Q11079","influenced_byLabel":"Muḥammad ibn Jābir al-Ḥarrānī al-Battānī"},{"item":"http://www.wikidata.org/entity/Q83375","itemLabel":"Empedocles","influenced_by":"http://www.wikidata.org/entity/Q10261","influenced_byLabel":"Pythagoras"},{"item":"http://www.wikidata.org/entity/Q94370","itemLabel":"Viktor Stern","influenced_by":"http://www.wikidata.org/entity/Q11730","influenced_byLabel":"Otto Bauer"},{"item":"http://www.wikidata.org/entity/Q127398","itemLabel":"Moshe ben Maimon","influenced_by":"http://www.wikidata.org/entity/Q11362","influenced_byLabel":"Ibn Bajjah"},{"item":"http://www.wikidata.org/entity/Q297040","itemLabel":"Apollonius of Tyana","influenced_by":"http://www.wikidata.org/entity/Q10261","influenced_byLabel":"Pythagoras"},{"item":"http://www.wikidata.org/entity/Q312410","itemLabel":"Epicharmus of Kos","influenced_by":"http://www.wikidata.org/entity/Q10261","influenced_byLabel":"Pythagoras"},{"item":"http://www.wikidata.org/entity/Q666230","itemLabel":"Aristobulus of Paneas","influenced_by":"http://www.wikidata.org/entity/Q10261","influenced_byLabel":"Pythagoras"},{"item":"http://www.wikidata.org/entity/Q1083378","itemLabel":"Carlo Lottieri","influenced_by":"http://www.wikidata.org/entity/Q11031","influenced_byLabel":"Vilfredo Pareto"},{"item":"http://www.wikidata.org/entity/Q1173486","itemLabel":"David Anhaght","influenced_by":"http://www.wikidata.org/entity/Q10261","influenced_byLabel":"Pythagoras"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q5682","influenced_byLabel":"Miguel de Cervantes"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q5682","influenced_byLabel":"Miguel de Cervantes"},{"item":"http://www.wikidata.org/entity/Q80322726","itemLabel":"Mircea Ciobanu","influenced_by":"http://www.wikidata.org/entity/Q5598","influenced_byLabel":"Rembrandt"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q5686","influenced_byLabel":"Charles Dickens"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q5686","influenced_byLabel":"Charles Dickens"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q5749","influenced_byLabel":"Pierre-Joseph Proudhon"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q5752","influenced_byLabel":"Peter Kropotkin"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q22670","itemLabel":"Friedrich Schiller","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q5749","influenced_byLabel":"Pierre-Joseph Proudhon"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q57112","itemLabel":"Oswald Spengler","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q61078","itemLabel":"Walter Benjamin","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q5752","influenced_byLabel":"Peter Kropotkin"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q180619","itemLabel":"Stephen Jay Gould","influenced_by":"http://www.wikidata.org/entity/Q5752","influenced_byLabel":"Peter Kropotkin"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q5816","influenced_byLabel":"Mao Zedong"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q5816","influenced_byLabel":"Mao Zedong"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q5685","influenced_byLabel":"Anton Chekhov"},{"item":"http://www.wikidata.org/entity/Q937610","itemLabel":"Edward Abbey","influenced_by":"http://www.wikidata.org/entity/Q5752","influenced_byLabel":"Peter Kropotkin"},{"item":"http://www.wikidata.org/entity/Q4059000","itemLabel":"Aisiqi","influenced_by":"http://www.wikidata.org/entity/Q5816","influenced_byLabel":"Mao Zedong"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q5264","influenced_byLabel":"Hippocrates"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q3816","influenced_byLabel":"George Sand"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q5264","influenced_byLabel":"Hippocrates"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q4604","influenced_byLabel":"Confucius"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q4604","influenced_byLabel":"Confucius"},{"item":"http://www.wikidata.org/entity/Q13575","itemLabel":"François Quesnay","influenced_by":"http://www.wikidata.org/entity/Q4604","influenced_byLabel":"Confucius"},{"item":"http://www.wikidata.org/entity/Q49074","itemLabel":"Kurt Vonnegut","influenced_by":"http://www.wikidata.org/entity/Q3335","influenced_byLabel":"George Orwell"},{"item":"http://www.wikidata.org/entity/Q469888","itemLabel":"Lewis Mumford","influenced_by":"http://www.wikidata.org/entity/Q4985","influenced_byLabel":"Herman Melville"},{"item":"http://www.wikidata.org/entity/Q80322726","itemLabel":"Mircea Ciobanu","influenced_by":"http://www.wikidata.org/entity/Q5432","influenced_byLabel":"Francisco Goya"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q7200","influenced_byLabel":"Alexander Pushkin"},{"item":"http://www.wikidata.org/entity/Q1001","itemLabel":"Mohandas Karamchand Gandhi","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q7198","influenced_byLabel":"Ovid"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q7200","influenced_byLabel":"Alexander Pushkin"},{"item":"http://www.wikidata.org/entity/Q46633","itemLabel":"Charles Babbage","influenced_by":"http://www.wikidata.org/entity/Q7259","influenced_byLabel":"Ada Lovelace"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q7199","influenced_byLabel":"Marcel Proust"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q7251","influenced_byLabel":"Alan Turing"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q332535","itemLabel":"Sergei Bulgakov","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q7231","influenced_byLabel":"Rosa Luxemburg"},{"item":"http://www.wikidata.org/entity/Q543381","itemLabel":"Iris Marion Young","influenced_by":"http://www.wikidata.org/entity/Q7197","influenced_byLabel":"Simone de Beauvoir"},{"item":"http://www.wikidata.org/entity/Q1290","itemLabel":"Blaise Pascal","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q35900","itemLabel":"Omar Khayyám","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q44481","itemLabel":"Pierre-Simon Laplace","influenced_by":"http://www.wikidata.org/entity/Q7604","influenced_byLabel":"Leonhard Euler"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q102851","itemLabel":"Boethius","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q127398","itemLabel":"Moshe ben Maimon","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q184500","itemLabel":"Johannes Scotus Eriugena","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q8027","influenced_byLabel":"Martin Luther King Jr."},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q8023","influenced_byLabel":"Nelson Mandela"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q8027","influenced_byLabel":"Martin Luther King Jr."},{"item":"http://www.wikidata.org/entity/Q2332520","itemLabel":"Damaris Masham","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q8778","influenced_byLabel":"Galen"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q8409","influenced_byLabel":"Alexander the Great"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q9364","itemLabel":"Jean-Paul Sartre","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q8747","influenced_byLabel":"Euclid"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q34787","itemLabel":"Friedrich Engels","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q75814","itemLabel":"Wilhelm Wundt","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q76510","itemLabel":"Christian Wolff","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q76997","itemLabel":"Moses Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q77057","itemLabel":"Karl Robert Eduard von Hartmann","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q123565","itemLabel":"Charles Bonnet","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q155547","itemLabel":"Johann Gottfried Herder","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q164374","itemLabel":"Pierre Louis Moreau de Maupertuis","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q180619","itemLabel":"Stephen Jay Gould","influenced_by":"http://www.wikidata.org/entity/Q9049","influenced_byLabel":"Noam Chomsky"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q184530","itemLabel":"Gerolamo Cardano","influenced_by":"http://www.wikidata.org/entity/Q8739","influenced_byLabel":"Archimedes"},{"item":"http://www.wikidata.org/entity/Q191029","itemLabel":"Giuseppe Peano","influenced_by":"http://www.wikidata.org/entity/Q8747","influenced_byLabel":"Euclid"},{"item":"http://www.wikidata.org/entity/Q212730","itemLabel":"Steven Pinker","influenced_by":"http://www.wikidata.org/entity/Q9049","influenced_byLabel":"Noam Chomsky"},{"item":"http://www.wikidata.org/entity/Q310757","itemLabel":"Ruđer Josip Bošković","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q310791","itemLabel":"Jules Michelet","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q465763","itemLabel":"Salomon Maimon","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q584382","itemLabel":"Yehoshua Bar-Hillel","influenced_by":"http://www.wikidata.org/entity/Q9049","influenced_byLabel":"Noam Chomsky"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q9049","influenced_byLabel":"Noam Chomsky"},{"item":"http://www.wikidata.org/entity/Q930837","itemLabel":"Gregory Chaitin","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q4226680","itemLabel":"A. A. Kozlov","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q4266616","itemLabel":"Lev Lopatin","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q448","itemLabel":"Denis Diderot","influenced_by":"http://www.wikidata.org/entity/Q9068","influenced_byLabel":"Voltaire"},{"item":"http://www.wikidata.org/entity/Q935","itemLabel":"Isaac Newton","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q9095","influenced_byLabel":"James Clerk Maxwell"},{"item":"http://www.wikidata.org/entity/Q1290","itemLabel":"Blaise Pascal","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q9068","influenced_byLabel":"Voltaire"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q9200","influenced_byLabel":"Paul"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q43393","itemLabel":"Robert Boyle","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q58586","itemLabel":"Edmund Husserl","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q9200","influenced_byLabel":"Paul"},{"item":"http://www.wikidata.org/entity/Q61078","itemLabel":"Walter Benjamin","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q76959","itemLabel":"Ralf Dahrendorf","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q128494","itemLabel":"Lyubov Axelrod","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q157318","itemLabel":"Leszek Kołakowski","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q179109","itemLabel":"Roland Barthes","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q182847","itemLabel":"Jean Baudrillard","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q188663","itemLabel":"Marin Mersenne","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q189564","itemLabel":"Pierre Teilhard de Chardin","influenced_by":"http://www.wikidata.org/entity/Q9200","influenced_byLabel":"Paul"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q212639","itemLabel":"Maurice Merleau-Ponty","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q289333","itemLabel":"Étienne Balibar","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q309818","itemLabel":"Nicolas Malebranche","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q310341","itemLabel":"Antonio Negri","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q1001","influenced_byLabel":"Mohandas Karamchand Gandhi"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q7286","itemLabel":"Émilie du Châtelet","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q937","influenced_byLabel":"Albert Einstein"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q937","influenced_byLabel":"Albert Einstein"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q937","influenced_byLabel":"Albert Einstein"},{"item":"http://www.wikidata.org/entity/Q91137","itemLabel":"Fyodor Stepun","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q168468","itemLabel":"David Brewster","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q171303","itemLabel":"Zeno of Citium","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q179149","itemLabel":"Antisthenes","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q189506","itemLabel":"Aristippus","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q263681","itemLabel":"Gene Sharp","influenced_by":"http://www.wikidata.org/entity/Q1001","influenced_byLabel":"Mohandas Karamchand Gandhi"},{"item":"http://www.wikidata.org/entity/Q270800","itemLabel":"Gaston Bachelard","influenced_by":"http://www.wikidata.org/entity/Q937","influenced_byLabel":"Albert Einstein"},{"item":"http://www.wikidata.org/entity/Q310765","itemLabel":"David Bohm","influenced_by":"http://www.wikidata.org/entity/Q937","influenced_byLabel":"Albert Einstein"},{"item":"http://www.wikidata.org/entity/Q310903","itemLabel":"Neil deGrasse Tyson","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q313073","itemLabel":"Jonathan Edwards","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q332535","itemLabel":"Sergei Bulgakov","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q364975","itemLabel":"Richard Cantillon","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q658008","itemLabel":"John Theophilus Desaguliers","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q666230","itemLabel":"Aristobulus of Paneas","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q1087945","itemLabel":"Dmitry Galkovsky","influenced_by":"http://www.wikidata.org/entity/Q913","influenced_byLabel":"Socrates"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q991","influenced_byLabel":"Fyodor Dostoyevsky"},{"item":"http://www.wikidata.org/entity/Q1384858","itemLabel":"Willem 's Gravesande","influenced_by":"http://www.wikidata.org/entity/Q935","influenced_byLabel":"Isaac Newton"},{"item":"http://www.wikidata.org/entity/Q13563069","itemLabel":"Joan Bondurant","influenced_by":"http://www.wikidata.org/entity/Q1001","influenced_byLabel":"Mohandas Karamchand Gandhi"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q1035","influenced_byLabel":"Charles Darwin"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q1048","influenced_byLabel":"Julius Caesar"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q1067","influenced_byLabel":"Dante Alighieri"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q1035","influenced_byLabel":"Charles Darwin"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q77057","itemLabel":"Karl Robert Eduard von Hartmann","influenced_by":"http://www.wikidata.org/entity/Q1035","influenced_byLabel":"Charles Darwin"},{"item":"http://www.wikidata.org/entity/Q125249","itemLabel":"William James","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q140694","itemLabel":"Alexis de Tocqueville","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q184366","itemLabel":"Thomas Henry Huxley","influenced_by":"http://www.wikidata.org/entity/Q1035","influenced_byLabel":"Charles Darwin"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q314172","itemLabel":"Pierre Duhem","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q353887","itemLabel":"Antoine Arnauld","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q434346","itemLabel":"Victor Cousin","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q951066","itemLabel":"Léon Brunschvicg","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q983825","itemLabel":"George John Romanes","influenced_by":"http://www.wikidata.org/entity/Q1035","influenced_byLabel":"Charles Darwin"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q1290","influenced_byLabel":"Blaise Pascal"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q1398","influenced_byLabel":"Virgil"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q1399","influenced_byLabel":"Niccolò Machiavelli"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q1511","influenced_byLabel":"Richard Wagner"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q1399","influenced_byLabel":"Niccolò Machiavelli"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q1399","influenced_byLabel":"Niccolò Machiavelli"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q1394","influenced_byLabel":"Vladimir Lenin"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q1394","influenced_byLabel":"Vladimir Lenin"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q1394","influenced_byLabel":"Vladimir Lenin"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q1394","influenced_byLabel":"Vladimir Lenin"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q1394","influenced_byLabel":"Vladimir Lenin"},{"item":"http://www.wikidata.org/entity/Q1083378","itemLabel":"Carlo Lottieri","influenced_by":"http://www.wikidata.org/entity/Q1325","influenced_byLabel":"Friedrich Hayek"},{"item":"http://www.wikidata.org/entity/Q2087685","itemLabel":"Philippe Nemo","influenced_by":"http://www.wikidata.org/entity/Q1325","influenced_byLabel":"Friedrich Hayek"},{"item":"http://www.wikidata.org/entity/Q3592370","itemLabel":"Étienne Tassin","influenced_by":"http://www.wikidata.org/entity/Q1399","influenced_byLabel":"Niccolò Machiavelli"},{"item":"http://www.wikidata.org/entity/Q5628058","itemLabel":"H. B. Acton","influenced_by":"http://www.wikidata.org/entity/Q1325","influenced_byLabel":"Friedrich Hayek"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q1394","influenced_byLabel":"Vladimir Lenin"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q1541","influenced_byLabel":"Cicero"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q1541","influenced_byLabel":"Cicero"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q1541","influenced_byLabel":"Cicero"},{"item":"http://www.wikidata.org/entity/Q43499","itemLabel":"Erasmus","influenced_by":"http://www.wikidata.org/entity/Q1541","influenced_byLabel":"Cicero"},{"item":"http://www.wikidata.org/entity/Q102851","itemLabel":"Boethius","influenced_by":"http://www.wikidata.org/entity/Q2054","influenced_byLabel":"Seneca"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q1541","influenced_byLabel":"Cicero"},{"item":"http://www.wikidata.org/entity/Q316347","itemLabel":"Thomas Reid","influenced_by":"http://www.wikidata.org/entity/Q1541","influenced_byLabel":"Cicero"},{"item":"http://www.wikidata.org/entity/Q364975","itemLabel":"Richard Cantillon","influenced_by":"http://www.wikidata.org/entity/Q1541","influenced_byLabel":"Cicero"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q332535","itemLabel":"Sergei Bulgakov","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q342730","itemLabel":"Antonio Labriola","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q347930","itemLabel":"Antonie Pannekoek","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q376036","itemLabel":"Svetozar Marković","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q540407","itemLabel":"Jean Hyppolite","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q731904","itemLabel":"Valentin Ferdinandovich Asmus","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q947456","itemLabel":"Sidney Hook","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q983648","itemLabel":"Kostas Axelos","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q2716613","itemLabel":"Ferdinand Alquié","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q2939300","itemLabel":"Carlos Astrada","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q4059000","itemLabel":"Aisiqi","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q4266616","itemLabel":"Lev Lopatin","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q7297230","itemLabel":"Ray Brassier","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q26043406","itemLabel":"Kohei Saito","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q9061","itemLabel":"Karl Marx","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q9364","itemLabel":"Jean-Paul Sartre","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q38873","itemLabel":"Lou Andreas-Salomé","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q48226","itemLabel":"Ralph Waldo Emerson","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q60080","itemLabel":"Wilhelm Dilthey","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q61171","itemLabel":"Erich Neumann","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q62977","itemLabel":"Walter Kaufmann","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q76422","itemLabel":"Ludwig Feuerbach","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q76725","itemLabel":"Max Stirner","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q77057","itemLabel":"Karl Robert Eduard von Hartmann","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q85942","itemLabel":"Nachman Krochmal","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q125879","itemLabel":"William Alston","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q128126","itemLabel":"Claude Lévi-Strauss","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q157318","itemLabel":"Leszek Kołakowski","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q189564","itemLabel":"Pierre Teilhard de Chardin","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q312295","itemLabel":"Giovanni Gentile","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q342730","itemLabel":"Antonio Labriola","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q432690","itemLabel":"Catherine Malabou","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q434346","itemLabel":"Victor Cousin","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q445939","itemLabel":"Roger Scruton","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q463553","itemLabel":"J. M. E. McTaggart","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q540407","itemLabel":"Jean Hyppolite","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q572741","itemLabel":"Kwame Anthony Appiah","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q896474","itemLabel":"Dumitru D. Roșca","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q983648","itemLabel":"Kostas Axelos","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q1680038","itemLabel":"James Black Baillie","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q2200215","itemLabel":"R.F. Beerling","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q3513783","itemLabel":"Francis Ellingwood Abbot","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q3707183","itemLabel":"Diego Fusaro","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q11705519","itemLabel":"Ángel Amor Ruibal","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q19974589","itemLabel":"Yevgeny Edelson","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q26043406","itemLabel":"Kohei Saito","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q28092109","itemLabel":"Pierre-Jean Labarrière","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q22670","itemLabel":"Friedrich Schiller","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q37160","itemLabel":"David Hume","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q41585","itemLabel":"David Hilbert","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q58586","itemLabel":"Edmund Husserl","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q60070","itemLabel":"Friedrich Wilhelm Joseph Schelling","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q60080","itemLabel":"Wilhelm Dilthey","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q71029","itemLabel":"Hermann Weyl","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q72151","itemLabel":"Markus Herz","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q57193","influenced_byLabel":"Moritz Schlick"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q57246","influenced_byLabel":"Hermann Minkowski"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q57186","influenced_byLabel":"Samuel von Pufendorf"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q57112","influenced_byLabel":"Oswald Spengler"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q57187","influenced_byLabel":"Stefan George"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q57280","influenced_byLabel":"Johann Joachim Winckelmann"},{"item":"http://www.wikidata.org/entity/Q58586","itemLabel":"Edmund Husserl","influenced_by":"http://www.wikidata.org/entity/Q57196","influenced_byLabel":"Franz Brentano"},{"item":"http://www.wikidata.org/entity/Q58586","itemLabel":"Edmund Husserl","influenced_by":"http://www.wikidata.org/entity/Q57497","influenced_byLabel":"Carl Stumpf"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q57255","influenced_byLabel":"Hans Jonas"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q57196","influenced_byLabel":"Franz Brentano"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q57188","influenced_byLabel":"Ernst Cassirer"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q57196","influenced_byLabel":"Franz Brentano"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q57085","influenced_byLabel":"Erich Fromm"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q57112","influenced_byLabel":"Oswald Spengler"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q57277","influenced_byLabel":"Gottfried Benn"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q57240","influenced_byLabel":"Ernst Bloch"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q57112","influenced_byLabel":"Oswald Spengler"},{"item":"http://www.wikidata.org/entity/Q511513","itemLabel":"Jakob Johann von Uexküll","influenced_by":"http://www.wikidata.org/entity/Q57190","influenced_byLabel":"Karl Ernst von Baer"},{"item":"http://www.wikidata.org/entity/Q3091395","itemLabel":"Jean-Pierre Dupuy","influenced_by":"http://www.wikidata.org/entity/Q57255","influenced_byLabel":"Hans Jonas"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q57188","influenced_byLabel":"Ernst Cassirer"},{"item":"http://www.wikidata.org/entity/Q17353220","itemLabel":"Arno Münster","influenced_by":"http://www.wikidata.org/entity/Q57240","influenced_byLabel":"Ernst Bloch"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q55767","influenced_byLabel":"Astrid Lindgren"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q60070","influenced_byLabel":"Friedrich Wilhelm Joseph Schelling"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q60070","influenced_byLabel":"Friedrich Wilhelm Joseph Schelling"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q57554","influenced_byLabel":"Georg Christoph Lichtenberg"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q60104","influenced_byLabel":"Paul Tillich"},{"item":"http://www.wikidata.org/entity/Q9391","itemLabel":"Ludwig Wittgenstein","influenced_by":"http://www.wikidata.org/entity/Q60028","influenced_byLabel":"Gottlob Frege"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q60059","influenced_byLabel":"Albertus Magnus"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q60028","influenced_byLabel":"Gottlob Frege"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q60028","influenced_byLabel":"Gottlob Frege"},{"item":"http://www.wikidata.org/entity/Q43393","itemLabel":"Robert Boyle","influenced_by":"http://www.wikidata.org/entity/Q60095","influenced_byLabel":"Otto von Guericke"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q57255","itemLabel":"Hans Jonas","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q58586","itemLabel":"Edmund Husserl","influenced_by":"http://www.wikidata.org/entity/Q60028","influenced_byLabel":"Gottlob Frege"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q64406","itemLabel":"Henrik Steffens","influenced_by":"http://www.wikidata.org/entity/Q60070","influenced_byLabel":"Friedrich Wilhelm Joseph Schelling"},{"item":"http://www.wikidata.org/entity/Q66061","itemLabel":"Adolf Reinach","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q71029","itemLabel":"Hermann Weyl","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q71263","itemLabel":"Moritz Geiger","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q72074","itemLabel":"Oskar Becker","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q72107","itemLabel":"Alexander Pfänder","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q60080","influenced_byLabel":"Wilhelm Dilthey"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q60028","influenced_byLabel":"Gottlob Frege"},{"item":"http://www.wikidata.org/entity/Q76521","itemLabel":"Max Scheler","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q77057","itemLabel":"Karl Robert Eduard von Hartmann","influenced_by":"http://www.wikidata.org/entity/Q60070","influenced_byLabel":"Friedrich Wilhelm Joseph Schelling"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q104261","itemLabel":"Walter Dubislav","influenced_by":"http://www.wikidata.org/entity/Q58750","influenced_byLabel":"Edmund Landau"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q157318","itemLabel":"Leszek Kołakowski","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q60080","influenced_byLabel":"Wilhelm Dilthey"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q60070","influenced_byLabel":"Friedrich Wilhelm Joseph Schelling"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q60070","influenced_byLabel":"Friedrich Wilhelm Joseph Schelling"},{"item":"http://www.wikidata.org/entity/Q212639","itemLabel":"Maurice Merleau-Ponty","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q60028","influenced_byLabel":"Gottlob Frege"},{"item":"http://www.wikidata.org/entity/Q311687","itemLabel":"Giorgio Agamben","influenced_by":"http://www.wikidata.org/entity/Q60025","influenced_byLabel":"Hannah Arendt"},{"item":"http://www.wikidata.org/entity/Q332535","itemLabel":"Sergei Bulgakov","influenced_by":"http://www.wikidata.org/entity/Q60070","influenced_byLabel":"Friedrich Wilhelm Joseph Schelling"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q60025","influenced_byLabel":"Hannah Arendt"},{"item":"http://www.wikidata.org/entity/Q358561","itemLabel":"Reinhold Niebuhr","influenced_by":"http://www.wikidata.org/entity/Q60104","influenced_byLabel":"Paul Tillich"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q60025","influenced_byLabel":"Hannah Arendt"},{"item":"http://www.wikidata.org/entity/Q381720","itemLabel":"Jan Patočka","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q471220","itemLabel":"Pyotr Chaadayev","influenced_by":"http://www.wikidata.org/entity/Q60070","influenced_byLabel":"Friedrich Wilhelm Joseph Schelling"},{"item":"http://www.wikidata.org/entity/Q517390","itemLabel":"Chantal Delsol","influenced_by":"http://www.wikidata.org/entity/Q60025","influenced_byLabel":"Hannah Arendt"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q1389946","itemLabel":"Philip Jourdain","influenced_by":"http://www.wikidata.org/entity/Q60028","influenced_byLabel":"Gottlob Frege"},{"item":"http://www.wikidata.org/entity/Q1984757","itemLabel":"Barbara Cassin","influenced_by":"http://www.wikidata.org/entity/Q60025","influenced_byLabel":"Hannah Arendt"},{"item":"http://www.wikidata.org/entity/Q2896505","itemLabel":"Dan Zahavi","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q3505892","itemLabel":"Suzanne Bachelard","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q3592370","itemLabel":"Étienne Tassin","influenced_by":"http://www.wikidata.org/entity/Q60025","influenced_byLabel":"Hannah Arendt"},{"item":"http://www.wikidata.org/entity/Q4226680","itemLabel":"A. A. Kozlov","influenced_by":"http://www.wikidata.org/entity/Q57684","influenced_byLabel":"Hermann Lotze"},{"item":"http://www.wikidata.org/entity/Q18692704","itemLabel":"Bérénice Levet","influenced_by":"http://www.wikidata.org/entity/Q60025","influenced_byLabel":"Hannah Arendt"},{"item":"http://www.wikidata.org/entity/Q66004295","itemLabel":"Sabine Gehlhaar","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q63081","influenced_byLabel":"Johannes Nikolaus Tetens"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q61674","influenced_byLabel":"Friedrich Albert Lange"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q62596","influenced_byLabel":"Paul Rée"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q64632","influenced_byLabel":"Friedrich Wilhelm Ritschl"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q61078","influenced_byLabel":"Walter Benjamin"},{"item":"http://www.wikidata.org/entity/Q72106","itemLabel":"Bruno Bauch","influenced_by":"http://www.wikidata.org/entity/Q61255","influenced_byLabel":"Kuno Fischer"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q61674","influenced_byLabel":"Friedrich Albert Lange"},{"item":"http://www.wikidata.org/entity/Q106265","itemLabel":"Norbert Bolz","influenced_by":"http://www.wikidata.org/entity/Q61078","influenced_byLabel":"Walter Benjamin"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q61078","influenced_byLabel":"Walter Benjamin"},{"item":"http://www.wikidata.org/entity/Q159636","itemLabel":"Joseph Priestley","influenced_by":"http://www.wikidata.org/entity/Q60887","influenced_byLabel":"Jeremy Bentham"},{"item":"http://www.wikidata.org/entity/Q180893","itemLabel":"Jaegwon Kim","influenced_by":"http://www.wikidata.org/entity/Q61885","influenced_byLabel":"Carl Gustav Hempel"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q61078","influenced_byLabel":"Walter Benjamin"},{"item":"http://www.wikidata.org/entity/Q190302","itemLabel":"Claude Adrien Helvétius","influenced_by":"http://www.wikidata.org/entity/Q60887","influenced_byLabel":"Jeremy Bentham"},{"item":"http://www.wikidata.org/entity/Q271666","itemLabel":"James Mill","influenced_by":"http://www.wikidata.org/entity/Q60887","influenced_byLabel":"Jeremy Bentham"},{"item":"http://www.wikidata.org/entity/Q312546","itemLabel":"William Stanley Jevons","influenced_by":"http://www.wikidata.org/entity/Q60887","influenced_byLabel":"Jeremy Bentham"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q61078","influenced_byLabel":"Walter Benjamin"},{"item":"http://www.wikidata.org/entity/Q584382","itemLabel":"Yehoshua Bar-Hillel","influenced_by":"http://www.wikidata.org/entity/Q61043","influenced_byLabel":"Abraham Fraenkel"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q60887","influenced_byLabel":"Jeremy Bentham"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q60844","influenced_byLabel":"Abraham Geiger"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q61674","influenced_byLabel":"Friedrich Albert Lange"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q61862","influenced_byLabel":"Eduard Zeller"},{"item":"http://www.wikidata.org/entity/Q1963049","itemLabel":"Pierre Poiret","influenced_by":"http://www.wikidata.org/entity/Q60281","influenced_byLabel":"Johannes Tauler"},{"item":"http://www.wikidata.org/entity/Q3091395","itemLabel":"Jean-Pierre Dupuy","influenced_by":"http://www.wikidata.org/entity/Q60884","influenced_byLabel":"Günther Anders"},{"item":"http://www.wikidata.org/entity/Q4408686","itemLabel":"Beatriz Sarlo","influenced_by":"http://www.wikidata.org/entity/Q61078","influenced_byLabel":"Walter Benjamin"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q61889","influenced_byLabel":"Hermann Diels"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q39599","influenced_byLabel":"Christiaan Huygens"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q38873","influenced_byLabel":"Lou Andreas-Salomé"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q40213","influenced_byLabel":"William Butler Yeats"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q39837","influenced_byLabel":"Averroes"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q39837","influenced_byLabel":"Averroes"},{"item":"http://www.wikidata.org/entity/Q36330","itemLabel":"Giordano Bruno","influenced_by":"http://www.wikidata.org/entity/Q39837","influenced_byLabel":"Averroes"},{"item":"http://www.wikidata.org/entity/Q61078","itemLabel":"Walter Benjamin","influenced_by":"http://www.wikidata.org/entity/Q38757","influenced_byLabel":"Bertolt Brecht"},{"item":"http://www.wikidata.org/entity/Q127398","itemLabel":"Moshe ben Maimon","influenced_by":"http://www.wikidata.org/entity/Q39837","influenced_byLabel":"Averroes"},{"item":"http://www.wikidata.org/entity/Q346523","itemLabel":"Andrea Cesalpino","influenced_by":"http://www.wikidata.org/entity/Q39837","influenced_byLabel":"Averroes"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q38757","influenced_byLabel":"Bertolt Brecht"},{"item":"http://www.wikidata.org/entity/Q355903","itemLabel":"Siger of Brabant","influenced_by":"http://www.wikidata.org/entity/Q39837","influenced_byLabel":"Averroes"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q40939","influenced_byLabel":"Aeschylus"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q34787","itemLabel":"Friedrich Engels","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q125551","itemLabel":"Parmenides","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q312410","itemLabel":"Epicharmus of Kos","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q983648","itemLabel":"Kostas Axelos","influenced_by":"http://www.wikidata.org/entity/Q41155","influenced_byLabel":"Heraclitus"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q41980","influenced_byLabel":"Democritus"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q41688","influenced_byLabel":"Hendrik Lorentz"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q42299","influenced_byLabel":"Bernhard Riemann"},{"item":"http://www.wikidata.org/entity/Q1290","itemLabel":"Blaise Pascal","influenced_by":"http://www.wikidata.org/entity/Q41568","influenced_byLabel":"Michel de Montaigne"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q41568","influenced_byLabel":"Michel de Montaigne"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q41568","influenced_byLabel":"Michel de Montaigne"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q41680","influenced_byLabel":"Dionysus"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q41980","influenced_byLabel":"Democritus"},{"item":"http://www.wikidata.org/entity/Q25973","itemLabel":"Hermann Hesse","influenced_by":"http://www.wikidata.org/entity/Q41630","influenced_byLabel":"psychoanalysis"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q41980","influenced_byLabel":"Democritus"},{"item":"http://www.wikidata.org/entity/Q43216","itemLabel":"Epicurus","influenced_by":"http://www.wikidata.org/entity/Q41980","influenced_byLabel":"Democritus"},{"item":"http://www.wikidata.org/entity/Q48226","itemLabel":"Ralph Waldo Emerson","influenced_by":"http://www.wikidata.org/entity/Q41568","influenced_byLabel":"Michel de Montaigne"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q189564","itemLabel":"Pierre Teilhard de Chardin","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q192207","itemLabel":"Aurobindo Ghosh","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q41568","influenced_byLabel":"Michel de Montaigne"},{"item":"http://www.wikidata.org/entity/Q270800","itemLabel":"Gaston Bachelard","influenced_by":"http://www.wikidata.org/entity/Q41532","influenced_byLabel":"Carl Jung"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q41532","influenced_byLabel":"Carl Jung"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q615119","itemLabel":"Coriolano Alberini","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q41921","influenced_byLabel":"Rosa Parks"},{"item":"http://www.wikidata.org/entity/Q1189157","itemLabel":"Nausiphanes","influenced_by":"http://www.wikidata.org/entity/Q41980","influenced_byLabel":"Democritus"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q42458","influenced_byLabel":"Anaximander"},{"item":"http://www.wikidata.org/entity/Q10261","itemLabel":"Pythagoras","influenced_by":"http://www.wikidata.org/entity/Q42458","influenced_byLabel":"Anaximander"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q42458","influenced_byLabel":"Anaximander"},{"item":"http://www.wikidata.org/entity/Q323228","itemLabel":"William Kingdon Clifford","influenced_by":"http://www.wikidata.org/entity/Q42299","influenced_byLabel":"Bernhard Riemann"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q43353","influenced_byLabel":"Aristophanes"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q44233","influenced_byLabel":"Hesiod"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q43216","influenced_byLabel":"Epicurus"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q43718","influenced_byLabel":"Nikolai Gogol"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q43718","influenced_byLabel":"Nikolai Gogol"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q43939","influenced_byLabel":"Anselm of Canterbury"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q43936","influenced_byLabel":"William of Ockham"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q43939","influenced_byLabel":"Anselm of Canterbury"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q43939","influenced_byLabel":"Anselm of Canterbury"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q43216","influenced_byLabel":"Epicurus"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q43939","influenced_byLabel":"Anselm of Canterbury"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q43216","influenced_byLabel":"Epicurus"},{"item":"http://www.wikidata.org/entity/Q39803","itemLabel":"Mario Vargas Llosa","influenced_by":"http://www.wikidata.org/entity/Q43444","influenced_byLabel":"Gustave Flaubert"},{"item":"http://www.wikidata.org/entity/Q43936","itemLabel":"William of Ockham","influenced_by":"http://www.wikidata.org/entity/Q43939","influenced_byLabel":"Anselm of Canterbury"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q44197","influenced_byLabel":"Maximilien Robespierre"},{"item":"http://www.wikidata.org/entity/Q192315","itemLabel":"Pierre Gassendi","influenced_by":"http://www.wikidata.org/entity/Q43216","influenced_byLabel":"Epicurus"},{"item":"http://www.wikidata.org/entity/Q201538","itemLabel":"Edward Said","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q213195","itemLabel":"B. F. Skinner","influenced_by":"http://www.wikidata.org/entity/Q42985","influenced_byLabel":"Ivan Pavlov"},{"item":"http://www.wikidata.org/entity/Q219368","itemLabel":"Judith Butler","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q43216","influenced_byLabel":"Epicurus"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q43303","influenced_byLabel":"Malcolm X"},{"item":"http://www.wikidata.org/entity/Q267536","itemLabel":"Nancy Fraser","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q275500","itemLabel":"Jean Buridan","influenced_by":"http://www.wikidata.org/entity/Q43936","influenced_byLabel":"William of Ockham"},{"item":"http://www.wikidata.org/entity/Q308269","itemLabel":"Abdolkarim Soroush","influenced_by":"http://www.wikidata.org/entity/Q43347","influenced_byLabel":"Rumi"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q43347","influenced_byLabel":"Rumi"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q43347","influenced_byLabel":"Rumi"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q44403","influenced_byLabel":"Heinrich Heine"},{"item":"http://www.wikidata.org/entity/Q189564","itemLabel":"Pierre Teilhard de Chardin","influenced_by":"http://www.wikidata.org/entity/Q44281","influenced_byLabel":"Ignatius of Loyola"},{"item":"http://www.wikidata.org/entity/Q215263","itemLabel":"Daniel Dennett","influenced_by":"http://www.wikidata.org/entity/Q44461","influenced_byLabel":"Richard Dawkins"},{"item":"http://www.wikidata.org/entity/Q310341","itemLabel":"Antonio Negri","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q311687","itemLabel":"Giorgio Agamben","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q44403","influenced_byLabel":"Heinrich Heine"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q44847","influenced_byLabel":"D. T. Suzuki"},{"item":"http://www.wikidata.org/entity/Q971585","itemLabel":"Hubert Dreyfus","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q1265639","itemLabel":"Roberto Esposito","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q1482545","itemLabel":"Jürgen Mümken","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q1748370","itemLabel":"Yves Charles Zarka","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q2797629","itemLabel":"Jones Very","influenced_by":"http://www.wikidata.org/entity/Q45546","influenced_byLabel":"William Wordsworth"},{"item":"http://www.wikidata.org/entity/Q3763746","itemLabel":"Éric Alliez","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q7609759","itemLabel":"Stephen Law","influenced_by":"http://www.wikidata.org/entity/Q44461","influenced_byLabel":"Richard Dawkins"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q14949231","itemLabel":"Jasbir Puar","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q20968412","itemLabel":"Marina Garcés","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q44272","influenced_byLabel":"Michel Foucault"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q46599","influenced_byLabel":"Mikhail Lermontov"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q48226","influenced_byLabel":"Ralph Waldo Emerson"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q47154","influenced_byLabel":"Lucretius"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q46420","influenced_byLabel":"Ibn Arabi"},{"item":"http://www.wikidata.org/entity/Q216692","itemLabel":"Ludvig Holberg","influenced_by":"http://www.wikidata.org/entity/Q47160","influenced_byLabel":"Plautus"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q11826","influenced_byLabel":"Al-Biruni"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q11903","influenced_byLabel":"Hypatia"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q12735","influenced_byLabel":"John Amos Comenius"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q12718","influenced_byLabel":"Auguste Comte"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q13894","influenced_byLabel":"Richard Strauss"},{"item":"http://www.wikidata.org/entity/Q9381","itemLabel":"Adam Smith","influenced_by":"http://www.wikidata.org/entity/Q13575","influenced_byLabel":"François Quesnay"},{"item":"http://www.wikidata.org/entity/Q13529","itemLabel":"Alfred Marshall","influenced_by":"http://www.wikidata.org/entity/Q13509","influenced_byLabel":"Léon Walras"},{"item":"http://www.wikidata.org/entity/Q15948","itemLabel":"Émile Durkheim","influenced_by":"http://www.wikidata.org/entity/Q12718","influenced_byLabel":"Auguste Comte"},{"item":"http://www.wikidata.org/entity/Q93996","itemLabel":"Ernst Mach","influenced_by":"http://www.wikidata.org/entity/Q12718","influenced_byLabel":"Auguste Comte"},{"item":"http://www.wikidata.org/entity/Q128126","itemLabel":"Claude Lévi-Strauss","influenced_by":"http://www.wikidata.org/entity/Q13230","influenced_byLabel":"Ferdinand de Saussure"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q13230","influenced_byLabel":"Ferdinand de Saussure"},{"item":"http://www.wikidata.org/entity/Q159636","itemLabel":"Joseph Priestley","influenced_by":"http://www.wikidata.org/entity/Q12735","influenced_byLabel":"John Amos Comenius"},{"item":"http://www.wikidata.org/entity/Q179109","itemLabel":"Roland Barthes","influenced_by":"http://www.wikidata.org/entity/Q13230","influenced_byLabel":"Ferdinand de Saussure"},{"item":"http://www.wikidata.org/entity/Q182847","itemLabel":"Jean Baudrillard","influenced_by":"http://www.wikidata.org/entity/Q13230","influenced_byLabel":"Ferdinand de Saussure"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q12718","influenced_byLabel":"Auguste Comte"},{"item":"http://www.wikidata.org/entity/Q463441","itemLabel":"Théodule-Armand Ribot","influenced_by":"http://www.wikidata.org/entity/Q12718","influenced_byLabel":"Auguste Comte"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q13513","influenced_byLabel":"Jean-Baptiste Say"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q13515","influenced_byLabel":"Frédéric Bastiat"},{"item":"http://www.wikidata.org/entity/Q3513783","itemLabel":"Francis Ellingwood Abbot","influenced_by":"http://www.wikidata.org/entity/Q15474","influenced_byLabel":"Sir William Hamilton, 9th Baronet"},{"item":"http://www.wikidata.org/entity/Q4719500","itemLabel":"Alexander Macfarlane","influenced_by":"http://www.wikidata.org/entity/Q11887","influenced_byLabel":"William Rowan Hamilton"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q15975","influenced_byLabel":"Montesquieu"},{"item":"http://www.wikidata.org/entity/Q15948","itemLabel":"Émile Durkheim","influenced_by":"http://www.wikidata.org/entity/Q15975","influenced_byLabel":"Montesquieu"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q15975","influenced_byLabel":"Montesquieu"},{"item":"http://www.wikidata.org/entity/Q128126","itemLabel":"Claude Lévi-Strauss","influenced_by":"http://www.wikidata.org/entity/Q15948","influenced_byLabel":"Émile Durkheim"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q15975","influenced_byLabel":"Montesquieu"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q15975","influenced_byLabel":"Montesquieu"},{"item":"http://www.wikidata.org/entity/Q183094","itemLabel":"Adam Ferguson","influenced_by":"http://www.wikidata.org/entity/Q15975","influenced_byLabel":"Montesquieu"},{"item":"http://www.wikidata.org/entity/Q295393","itemLabel":"Marcel Mauss","influenced_by":"http://www.wikidata.org/entity/Q15948","influenced_byLabel":"Émile Durkheim"},{"item":"http://www.wikidata.org/entity/Q324932","itemLabel":"Lucien Lévy-Bruhl","influenced_by":"http://www.wikidata.org/entity/Q15948","influenced_byLabel":"Émile Durkheim"},{"item":"http://www.wikidata.org/entity/Q5621275","itemLabel":"Gustave Belot","influenced_by":"http://www.wikidata.org/entity/Q15948","influenced_byLabel":"Émile Durkheim"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q19185","influenced_byLabel":"George Bernard Shaw"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q16867","influenced_byLabel":"Edgar Allan Poe"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q22670","influenced_byLabel":"Friedrich Schiller"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q16867","influenced_byLabel":"Edgar Allan Poe"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q16409","influenced_byLabel":"Tristan Tzara"},{"item":"http://www.wikidata.org/entity/Q1257572","itemLabel":"Raphael M. Robinson","influenced_by":"http://www.wikidata.org/entity/Q17455","influenced_byLabel":"John von Neumann"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q25820","influenced_byLabel":"Thomas Young"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q28480","influenced_byLabel":"Max Brod"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q27645","influenced_byLabel":"Mikhail Bakunin"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q25649","influenced_byLabel":"Saul Alinsky"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q25161","influenced_byLabel":"Roald Dahl"},{"item":"http://www.wikidata.org/entity/Q9391","itemLabel":"Ludwig Wittgenstein","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q41239","itemLabel":"Konstantin Eduardovich Tsiolkovskii","influenced_by":"http://www.wikidata.org/entity/Q33977","influenced_byLabel":"Jules Verne"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q30875","influenced_byLabel":"Oscar Wilde"},{"item":"http://www.wikidata.org/entity/Q86371","itemLabel":"Gustav Bergmann","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q102289","itemLabel":"Buckminster Fuller","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q215263","itemLabel":"Daniel Dennett","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q243757","itemLabel":"A. J. Ayer","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q366123","itemLabel":"David Chalmers","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q432690","itemLabel":"Catherine Malabou","influenced_by":"http://www.wikidata.org/entity/Q28918","influenced_byLabel":"Luce Irigaray"},{"item":"http://www.wikidata.org/entity/Q725239","itemLabel":"Stephen Neale","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q947456","itemLabel":"Sidney Hook","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q1022453","itemLabel":"C. D. Broad","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q8070379","itemLabel":"Zhang Xuecheng","influenced_by":"http://www.wikidata.org/entity/Q31754","influenced_byLabel":"Huang Zongxi"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q34628","influenced_byLabel":"Gotthold Ephraim Lessing"},{"item":"http://www.wikidata.org/entity/Q7060","itemLabel":"Michel Onfray","influenced_by":"http://www.wikidata.org/entity/Q34670","influenced_byLabel":"Albert Camus"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q34670","influenced_byLabel":"Albert Camus"},{"item":"http://www.wikidata.org/entity/Q179109","itemLabel":"Roland Barthes","influenced_by":"http://www.wikidata.org/entity/Q34670","influenced_byLabel":"Albert Camus"},{"item":"http://www.wikidata.org/entity/Q445511","itemLabel":"Michael Walzer","influenced_by":"http://www.wikidata.org/entity/Q34670","influenced_byLabel":"Albert Camus"},{"item":"http://www.wikidata.org/entity/Q580695","itemLabel":"Robert C. Solomon","influenced_by":"http://www.wikidata.org/entity/Q34670","influenced_byLabel":"Albert Camus"},{"item":"http://www.wikidata.org/entity/Q2073530","itemLabel":"Jean-Marie Blas de Roblès","influenced_by":"http://www.wikidata.org/entity/Q33977","influenced_byLabel":"Jules Verne"},{"item":"http://www.wikidata.org/entity/Q448","itemLabel":"Denis Diderot","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q34943","influenced_byLabel":"Ptolemy"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q34943","influenced_byLabel":"Ptolemy"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q11903","itemLabel":"Hypatia","influenced_by":"http://www.wikidata.org/entity/Q34943","influenced_byLabel":"Ptolemy"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q35610","influenced_byLabel":"Arthur Conan Doyle"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q38873","itemLabel":"Lou Andreas-Salomé","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q60070","itemLabel":"Friedrich Wilhelm Joseph Schelling","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q76422","itemLabel":"Ludwig Feuerbach","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q76997","itemLabel":"Moses Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q77144","itemLabel":"Leo Strauss","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q102585","itemLabel":"Johann Gottlieb Fichte","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q128494","itemLabel":"Lyubov Axelrod","influenced_by":"http://www.wikidata.org/entity/Q34787","influenced_byLabel":"Friedrich Engels"},{"item":"http://www.wikidata.org/entity/Q155547","itemLabel":"Johann Gottfried Herder","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q157318","itemLabel":"Leszek Kołakowski","influenced_by":"http://www.wikidata.org/entity/Q34787","influenced_byLabel":"Friedrich Engels"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q34787","influenced_byLabel":"Friedrich Engels"},{"item":"http://www.wikidata.org/entity/Q4059000","itemLabel":"Aisiqi","influenced_by":"http://www.wikidata.org/entity/Q34787","influenced_byLabel":"Friedrich Engels"},{"item":"http://www.wikidata.org/entity/Q7060","itemLabel":"Michel Onfray","influenced_by":"http://www.wikidata.org/entity/Q36268","influenced_byLabel":"Brigitte Bardot"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q36330","influenced_byLabel":"Giordano Bruno"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q35811","influenced_byLabel":"Zoroaster"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q35811","influenced_byLabel":"Zoroaster"},{"item":"http://www.wikidata.org/entity/Q10261","itemLabel":"Pythagoras","influenced_by":"http://www.wikidata.org/entity/Q35811","influenced_byLabel":"Zoroaster"},{"item":"http://www.wikidata.org/entity/Q10261","itemLabel":"Pythagoras","influenced_by":"http://www.wikidata.org/entity/Q36303","influenced_byLabel":"Thalis"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q36330","influenced_byLabel":"Giordano Bruno"},{"item":"http://www.wikidata.org/entity/Q42458","itemLabel":"Anaximander","influenced_by":"http://www.wikidata.org/entity/Q36303","influenced_byLabel":"Thalis"},{"item":"http://www.wikidata.org/entity/Q102585","itemLabel":"Johann Gottlieb Fichte","influenced_by":"http://www.wikidata.org/entity/Q36281","influenced_byLabel":"Roseau"},{"item":"http://www.wikidata.org/entity/Q155547","itemLabel":"Johann Gottfried Herder","influenced_by":"http://www.wikidata.org/entity/Q36330","influenced_byLabel":"Giordano Bruno"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q180819","itemLabel":"Lev Vygotsky","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76685","itemLabel":"Johann Friedrich Herbart","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76881","itemLabel":"Gustav Fechner","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76997","itemLabel":"Moses Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q82049","itemLabel":"George Berkeley","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q85942","itemLabel":"Nachman Krochmal","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q102585","itemLabel":"Johann Gottlieb Fichte","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q123190","itemLabel":"Jean Piaget","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q155547","itemLabel":"Johann Gottfried Herder","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q155887","itemLabel":"Luitzen Egbertus Jan Brouwer","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q157318","itemLabel":"Leszek Kołakowski","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q172544","itemLabel":"John Rawls","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q172544","itemLabel":"John Rawls","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q310791","itemLabel":"Jules Michelet","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q313073","itemLabel":"Jonathan Edwards","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q313929","itemLabel":"Mortimer Jerome Adler","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q9333","influenced_byLabel":"Laozi"},{"item":"http://www.wikidata.org/entity/Q335112","itemLabel":"Anthony Ashley-Cooper, 3rd Earl of Shaftesbury","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q364975","itemLabel":"Richard Cantillon","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q434346","itemLabel":"Victor Cousin","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q445939","itemLabel":"Roger Scruton","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q465763","itemLabel":"Salomon Maimon","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q519894","itemLabel":"Antoni Lange","influenced_by":"http://www.wikidata.org/entity/Q9327","influenced_byLabel":"Guy de Maupassant"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q731904","itemLabel":"Valentin Ferdinandovich Asmus","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q1442423","itemLabel":"Gabriel Jean Edmond Séailles","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q2716613","itemLabel":"Ferdinand Alquié","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q2915527","itemLabel":"Monroe Beardsley","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q3513783","itemLabel":"Francis Ellingwood Abbot","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q7609759","itemLabel":"Stephen Law","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q28092109","itemLabel":"Pierre-Jean Labarrière","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q28152056","itemLabel":"Metrofan Aksyonov","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q62269206","itemLabel":"Matthew Stuart","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q7060","itemLabel":"Michel Onfray","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q7197","itemLabel":"Simone de Beauvoir","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q34670","itemLabel":"Albert Camus","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q38873","itemLabel":"Lou Andreas-Salomé","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q60735","itemLabel":"Axel Honneth","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q62977","itemLabel":"Walter Kaufmann","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q86575","itemLabel":"Frithjof Bergmann","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q153034","itemLabel":"Emmanuel Levinas","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q9381","influenced_byLabel":"Adam Smith"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q179109","itemLabel":"Roland Barthes","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q193670","itemLabel":"Frantz Fanon","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q201538","itemLabel":"Edward Said","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q270800","itemLabel":"Gaston Bachelard","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q313509","itemLabel":"Bernard-Henri Lévy","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q345641","itemLabel":"Bernard Williams","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q365129","itemLabel":"Arthur Danto Lindo","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q368831","itemLabel":"Colin Wilson","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q580695","itemLabel":"Robert C. Solomon","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q620732","itemLabel":"Alexander Tarasov","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q631466","itemLabel":"Benny Lévy","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q9381","influenced_byLabel":"Adam Smith"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q1926717","itemLabel":"Micha Josef Berdyczewski","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q2200215","itemLabel":"R.F. Beerling","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q3182114","itemLabel":"John Moore","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q3617745","itemLabel":"Anna Maria Carassiti","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q3850939","itemLabel":"Fernando González","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q4939864","itemLabel":"Sissela Bok","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q5950521","itemLabel":"Juan José Sebreli","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q6097521","itemLabel":"Ivan Soll","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q6138416","itemLabel":"James M. Edie","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q6536603","itemLabel":"Lewis Gordon","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q6769300","itemLabel":"Mark Poster","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q7174493","itemLabel":"Peter Hallward","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q7815187","itemLabel":"Tom Campbell","influenced_by":"http://www.wikidata.org/entity/Q9381","influenced_byLabel":"Adam Smith"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q9711","influenced_byLabel":"Honoré de Balzac"},{"item":"http://www.wikidata.org/entity/Q1001","itemLabel":"Mohandas Karamchand Gandhi","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q9554","influenced_byLabel":"Martin Luther"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q9458","influenced_byLabel":"Muhammad"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q9546","influenced_byLabel":"Al-Ghazali"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q41590","itemLabel":"Mircea Eliade","influenced_by":"http://www.wikidata.org/entity/Q9711","influenced_byLabel":"Honoré de Balzac"},{"item":"http://www.wikidata.org/entity/Q43936","itemLabel":"William of Ockham","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q58853","itemLabel":"Karl-Otto Apel","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q75812","itemLabel":"Norbert Elias","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q76849","itemLabel":"Georg Simmel","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q78688","itemLabel":"Heinz von Foerster","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q86371","itemLabel":"Gustav Bergmann","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q125879","itemLabel":"William Alston","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q131333","itemLabel":"George Eliot","influenced_by":"http://www.wikidata.org/entity/Q9711","influenced_byLabel":"Honoré de Balzac"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q189172","itemLabel":"Andrey Korotayev","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q213393","itemLabel":"John Wesley","influenced_by":"http://www.wikidata.org/entity/Q9554","influenced_byLabel":"Martin Luther"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q229646","itemLabel":"G. E. M. Anscombe","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q229646","itemLabel":"G. E. M. Anscombe","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q231690","itemLabel":"B. R. Ambedkar","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q295012","itemLabel":"John Searle","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q313929","itemLabel":"Mortimer Jerome Adler","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q9554","influenced_byLabel":"Martin Luther"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q379577","itemLabel":"Marpa Lotsawa","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q472676","itemLabel":"Stephen Toulmin","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q9458","influenced_byLabel":"Muhammad"},{"item":"http://www.wikidata.org/entity/Q601275","itemLabel":"John Wisdom","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q1050943","itemLabel":"Catherine Colliot-Thélène","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q1364813","itemLabel":"Norman Malcolm","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q1436392","itemLabel":"James Tully","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q4725710","itemLabel":"Alice Ambrose","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q4769048","itemLabel":"Annette Baier","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q29439790","itemLabel":"Joan Roig Gironella","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q60526193","itemLabel":"J. Hunter Guthrie","influenced_by":"http://www.wikidata.org/entity/Q61882","influenced_byLabel":"Werner Jaeger"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q67323","influenced_byLabel":"Jakob Thomasius"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q73014","influenced_byLabel":"Erhard Weigel"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q75889","influenced_byLabel":"Friedrich Hölderlin"},{"item":"http://www.wikidata.org/entity/Q57255","itemLabel":"Hans Jonas","influenced_by":"http://www.wikidata.org/entity/Q76327","influenced_byLabel":"Rudolf Bultmann"},{"item":"http://www.wikidata.org/entity/Q58853","itemLabel":"Karl-Otto Apel","influenced_by":"http://www.wikidata.org/entity/Q76357","influenced_byLabel":"Jürgen Habermas"},{"item":"http://www.wikidata.org/entity/Q122318","itemLabel":"Paul Bernays","influenced_by":"http://www.wikidata.org/entity/Q72599","influenced_byLabel":"Issai Schur"},{"item":"http://www.wikidata.org/entity/Q263235","itemLabel":"Seyla Benhabib","influenced_by":"http://www.wikidata.org/entity/Q76357","influenced_byLabel":"Jürgen Habermas"},{"item":"http://www.wikidata.org/entity/Q309675","itemLabel":"G. Stanley Hall","influenced_by":"http://www.wikidata.org/entity/Q75814","influenced_byLabel":"Wilhelm Wundt"},{"item":"http://www.wikidata.org/entity/Q382016","itemLabel":"Gilles de Roberval","influenced_by":"http://www.wikidata.org/entity/Q75655","influenced_byLabel":"Pierre de Fermat"},{"item":"http://www.wikidata.org/entity/Q469888","itemLabel":"Lewis Mumford","influenced_by":"http://www.wikidata.org/entity/Q73646","influenced_byLabel":"Thorstein Veblen"},{"item":"http://www.wikidata.org/entity/Q505528","itemLabel":"Harold Innis","influenced_by":"http://www.wikidata.org/entity/Q73646","influenced_byLabel":"Thorstein Veblen"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q72803","influenced_byLabel":"Gustav Weigand"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q75814","influenced_byLabel":"Wilhelm Wundt"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q65644","influenced_byLabel":"Heymann Steinthal"},{"item":"http://www.wikidata.org/entity/Q3675891","itemLabel":"Christos Androutsos","influenced_by":"http://www.wikidata.org/entity/Q75814","influenced_byLabel":"Wilhelm Wundt"},{"item":"http://www.wikidata.org/entity/Q4017966","itemLabel":"Walter Maturi","influenced_by":"http://www.wikidata.org/entity/Q66147","influenced_byLabel":"Friedrich Meinecke"},{"item":"http://www.wikidata.org/entity/Q5935914","itemLabel":"Jorge Rivera Cruchaga","influenced_by":"http://www.wikidata.org/entity/Q76356","influenced_byLabel":"Hans-Georg Gadamer"},{"item":"http://www.wikidata.org/entity/Q20046888","itemLabel":"Luis Filipe Barreto","influenced_by":"http://www.wikidata.org/entity/Q76356","influenced_byLabel":"Hans-Georg Gadamer"},{"item":"http://www.wikidata.org/entity/Q22957880","itemLabel":"Cristina Lafont","influenced_by":"http://www.wikidata.org/entity/Q76357","influenced_byLabel":"Jürgen Habermas"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q76499","influenced_byLabel":"Johann Georg Hamann"},{"item":"http://www.wikidata.org/entity/Q9061","itemLabel":"Karl Marx","influenced_by":"http://www.wikidata.org/entity/Q76422","influenced_byLabel":"Ludwig Feuerbach"},{"item":"http://www.wikidata.org/entity/Q9061","itemLabel":"Karl Marx","influenced_by":"http://www.wikidata.org/entity/Q76725","influenced_byLabel":"Max Stirner"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q76576","influenced_byLabel":"Friedrich Schleiermacher"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q76510","influenced_byLabel":"Christian Wolff"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q76521","influenced_byLabel":"Max Scheler"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q76725","influenced_byLabel":"Max Stirner"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q76422","influenced_byLabel":"Ludwig Feuerbach"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q76420","influenced_byLabel":"Georg Cantor"},{"item":"http://www.wikidata.org/entity/Q34787","itemLabel":"Friedrich Engels","influenced_by":"http://www.wikidata.org/entity/Q76422","influenced_byLabel":"Ludwig Feuerbach"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q76849","influenced_byLabel":"Georg Simmel"},{"item":"http://www.wikidata.org/entity/Q58720","itemLabel":"Mikhail Vassilyevich Lomonosov","influenced_by":"http://www.wikidata.org/entity/Q76510","influenced_byLabel":"Christian Wolff"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q76509","influenced_byLabel":"Karl Jaspers"},{"item":"http://www.wikidata.org/entity/Q60080","itemLabel":"Wilhelm Dilthey","influenced_by":"http://www.wikidata.org/entity/Q76576","influenced_byLabel":"Friedrich Schleiermacher"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q76576","influenced_byLabel":"Friedrich Schleiermacher"},{"item":"http://www.wikidata.org/entity/Q76422","itemLabel":"Ludwig Feuerbach","influenced_by":"http://www.wikidata.org/entity/Q76576","influenced_byLabel":"Friedrich Schleiermacher"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q76709","influenced_byLabel":"Hermann Cohen"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q76710","influenced_byLabel":"Franz Rosenzweig"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q76725","influenced_byLabel":"Max Stirner"},{"item":"http://www.wikidata.org/entity/Q84345","itemLabel":"Ludwig von Bertalanffy","influenced_by":"http://www.wikidata.org/entity/Q76519","influenced_byLabel":"Rudolf Carnap"},{"item":"http://www.wikidata.org/entity/Q93996","itemLabel":"Ernst Mach","influenced_by":"http://www.wikidata.org/entity/Q76516","influenced_byLabel":"Richard Avenarius"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q76548","influenced_byLabel":"Meister Eckhart"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q76826","influenced_byLabel":"Max Horkheimer"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q76509","influenced_byLabel":"Karl Jaspers"},{"item":"http://www.wikidata.org/entity/Q155547","itemLabel":"Johann Gottfried Herder","influenced_by":"http://www.wikidata.org/entity/Q76499","influenced_byLabel":"Johann Georg Hamann"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q76849","influenced_byLabel":"Georg Simmel"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q76512","influenced_byLabel":"Franz Xaver von Baader"},{"item":"http://www.wikidata.org/entity/Q243757","itemLabel":"A. J. Ayer","influenced_by":"http://www.wikidata.org/entity/Q76519","influenced_byLabel":"Rudolf Carnap"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q76420","influenced_byLabel":"Georg Cantor"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q76519","influenced_byLabel":"Rudolf Carnap"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q76727","influenced_byLabel":"Ernst Jünger"},{"item":"http://www.wikidata.org/entity/Q342730","itemLabel":"Antonio Labriola","influenced_by":"http://www.wikidata.org/entity/Q76685","influenced_byLabel":"Johann Friedrich Herbart"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q76710","influenced_byLabel":"Franz Rosenzweig"},{"item":"http://www.wikidata.org/entity/Q584382","itemLabel":"Yehoshua Bar-Hillel","influenced_by":"http://www.wikidata.org/entity/Q76519","influenced_byLabel":"Rudolf Carnap"},{"item":"http://www.wikidata.org/entity/Q706525","itemLabel":"Mario Tronti","influenced_by":"http://www.wikidata.org/entity/Q76727","influenced_byLabel":"Ernst Jünger"},{"item":"http://www.wikidata.org/entity/Q1083378","itemLabel":"Carlo Lottieri","influenced_by":"http://www.wikidata.org/entity/Q76688","influenced_byLabel":"Hans-Hermann Hoppe"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q76709","influenced_byLabel":"Hermann Cohen"},{"item":"http://www.wikidata.org/entity/Q1389946","itemLabel":"Philip Jourdain","influenced_by":"http://www.wikidata.org/entity/Q76420","influenced_byLabel":"Georg Cantor"},{"item":"http://www.wikidata.org/entity/Q3182114","itemLabel":"John Moore","influenced_by":"http://www.wikidata.org/entity/Q76725","influenced_byLabel":"Max Stirner"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q76501","influenced_byLabel":"Nicolai Hartmann"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q76504","influenced_byLabel":"Paul Natorp"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q76709","influenced_byLabel":"Hermann Cohen"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q76586","influenced_byLabel":"Karl Kautsky"},{"item":"http://www.wikidata.org/entity/Q9370512","itemLabel":"Walery Łoziński","influenced_by":"http://www.wikidata.org/entity/Q76756","influenced_byLabel":"Albrecht Penck"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q77017","influenced_byLabel":"Jakob Böhme"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q77127","influenced_byLabel":"Mary Wigman"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q78491","influenced_byLabel":"Stefan Zweig"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q78600","influenced_byLabel":"Alexius Meinong"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q77017","influenced_byLabel":"Jakob Böhme"},{"item":"http://www.wikidata.org/entity/Q47208","itemLabel":"Louis-Claude de Saint-Martin","influenced_by":"http://www.wikidata.org/entity/Q77017","influenced_byLabel":"Jakob Böhme"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q77148","influenced_byLabel":"Carl Schmitt"},{"item":"http://www.wikidata.org/entity/Q72106","itemLabel":"Bruno Bauch","influenced_by":"http://www.wikidata.org/entity/Q77012","influenced_byLabel":"Heinrich Rickert"},{"item":"http://www.wikidata.org/entity/Q72106","itemLabel":"Bruno Bauch","influenced_by":"http://www.wikidata.org/entity/Q77045","influenced_byLabel":"Wilhelm Windelband"},{"item":"http://www.wikidata.org/entity/Q72151","itemLabel":"Markus Herz","influenced_by":"http://www.wikidata.org/entity/Q76997","influenced_byLabel":"Moses Mendelssohn"},{"item":"http://www.wikidata.org/entity/Q76510","itemLabel":"Christian Wolff","influenced_by":"http://www.wikidata.org/entity/Q77288","influenced_byLabel":"Ehrenfried Walther von Tschirnhaus"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q78484","influenced_byLabel":"Rudolf Steiner"},{"item":"http://www.wikidata.org/entity/Q91137","itemLabel":"Fyodor Stepun","influenced_by":"http://www.wikidata.org/entity/Q77012","influenced_byLabel":"Heinrich Rickert"},{"item":"http://www.wikidata.org/entity/Q91137","itemLabel":"Fyodor Stepun","influenced_by":"http://www.wikidata.org/entity/Q77045","influenced_byLabel":"Wilhelm Windelband"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q77012","influenced_byLabel":"Heinrich Rickert"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q77017","influenced_byLabel":"Jakob Böhme"},{"item":"http://www.wikidata.org/entity/Q242616","itemLabel":"Patricia Churchland","influenced_by":"http://www.wikidata.org/entity/Q78497","influenced_byLabel":"Paul Feyerabend"},{"item":"http://www.wikidata.org/entity/Q296249","itemLabel":"Imre Lakatos","influenced_by":"http://www.wikidata.org/entity/Q78497","influenced_byLabel":"Paul Feyerabend"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q78513","influenced_byLabel":"Otto Weininger"},{"item":"http://www.wikidata.org/entity/Q465763","itemLabel":"Salomon Maimon","influenced_by":"http://www.wikidata.org/entity/Q76997","influenced_byLabel":"Moses Mendelssohn"},{"item":"http://www.wikidata.org/entity/Q505520","itemLabel":"Kenneth E. Boulding","influenced_by":"http://www.wikidata.org/entity/Q78477","influenced_byLabel":"Joseph Schumpeter"},{"item":"http://www.wikidata.org/entity/Q664619","itemLabel":"Rémi Brague","influenced_by":"http://www.wikidata.org/entity/Q77144","influenced_byLabel":"Leo Strauss"},{"item":"http://www.wikidata.org/entity/Q683690","itemLabel":"Alexander Potebnja","influenced_by":"http://www.wikidata.org/entity/Q77888","influenced_byLabel":"Wilhelm von Humboldt"},{"item":"http://www.wikidata.org/entity/Q1031492","itemLabel":"Mária Göllner","influenced_by":"http://www.wikidata.org/entity/Q78484","influenced_byLabel":"Rudolf Steiner"},{"item":"http://www.wikidata.org/entity/Q1064777","itemLabel":"Charles Hartshorne","influenced_by":"http://www.wikidata.org/entity/Q76881","influenced_byLabel":"Gustav Fechner"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q77609","influenced_byLabel":"Hermann Bonitz"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q77888","influenced_byLabel":"Wilhelm von Humboldt"},{"item":"http://www.wikidata.org/entity/Q4226680","itemLabel":"A. A. Kozlov","influenced_by":"http://www.wikidata.org/entity/Q78129","influenced_byLabel":"Gustav Teichmüller"},{"item":"http://www.wikidata.org/entity/Q19974589","itemLabel":"Yevgeny Edelson","influenced_by":"http://www.wikidata.org/entity/Q77498","influenced_byLabel":"Friedrich Eduard Beneke"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q79822","influenced_byLabel":"Adam Mickiewicz"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q82049","influenced_byLabel":"George Berkeley"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q79822","influenced_byLabel":"Adam Mickiewicz"},{"item":"http://www.wikidata.org/entity/Q37160","itemLabel":"David Hume","influenced_by":"http://www.wikidata.org/entity/Q82049","influenced_byLabel":"George Berkeley"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q79759","influenced_byLabel":"John Milton"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q82049","influenced_byLabel":"George Berkeley"},{"item":"http://www.wikidata.org/entity/Q112176","itemLabel":"Ernst von Glasersfeld","influenced_by":"http://www.wikidata.org/entity/Q82049","influenced_byLabel":"George Berkeley"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q310341","itemLabel":"Antonio Negri","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q465763","itemLabel":"Salomon Maimon","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q553128","itemLabel":"Giulio Cesare Vanini","influenced_by":"http://www.wikidata.org/entity/Q36330","influenced_byLabel":"Giordano Bruno"},{"item":"http://www.wikidata.org/entity/Q766723","itemLabel":"Rebecca Goldstein","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q951460","itemLabel":"François Zourabichvili","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q6852549","itemLabel":"Q6852549","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q28152056","itemLabel":"Metrofan Aksyonov","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q37621","influenced_byLabel":"Thomas Hobbes"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q37621","influenced_byLabel":"Thomas Hobbes"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q37388","influenced_byLabel":"Francis Bacon"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q37621","influenced_byLabel":"Thomas Hobbes"},{"item":"http://www.wikidata.org/entity/Q37621","itemLabel":"Thomas Hobbes","influenced_by":"http://www.wikidata.org/entity/Q37388","influenced_byLabel":"Francis Bacon"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q43393","itemLabel":"Robert Boyle","influenced_by":"http://www.wikidata.org/entity/Q37388","influenced_byLabel":"Francis Bacon"},{"item":"http://www.wikidata.org/entity/Q76576","itemLabel":"Friedrich Schleiermacher","influenced_by":"http://www.wikidata.org/entity/Q37068","influenced_byLabel":"Romanticism"},{"item":"http://www.wikidata.org/entity/Q78513","itemLabel":"Otto Weininger","influenced_by":"http://www.wikidata.org/entity/Q36661","influenced_byLabel":"Henrik Ibsen"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q310791","itemLabel":"Jules Michelet","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q37327","influenced_byLabel":"Samuel Beckett"},{"item":"http://www.wikidata.org/entity/Q313925","itemLabel":"Thomas Browne","influenced_by":"http://www.wikidata.org/entity/Q37388","influenced_byLabel":"Francis Bacon"},{"item":"http://www.wikidata.org/entity/Q316045","itemLabel":"Georg Brandes","influenced_by":"http://www.wikidata.org/entity/Q36661","influenced_byLabel":"Henrik Ibsen"},{"item":"http://www.wikidata.org/entity/Q316347","itemLabel":"Thomas Reid","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q355201","itemLabel":"Alvin Plantinga","influenced_by":"http://www.wikidata.org/entity/Q37577","influenced_byLabel":"John Calvin"},{"item":"http://www.wikidata.org/entity/Q394628","itemLabel":"Raymond Williams","influenced_by":"http://www.wikidata.org/entity/Q36661","influenced_byLabel":"Henrik Ibsen"},{"item":"http://www.wikidata.org/entity/Q465763","itemLabel":"Salomon Maimon","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q37388","influenced_byLabel":"Francis Bacon"},{"item":"http://www.wikidata.org/entity/Q2252828","itemLabel":"Renzo Novatore","influenced_by":"http://www.wikidata.org/entity/Q36661","influenced_byLabel":"Henrik Ibsen"},{"item":"http://www.wikidata.org/entity/Q2634723","itemLabel":"Loren Eiseley","influenced_by":"http://www.wikidata.org/entity/Q37388","influenced_byLabel":"Francis Bacon"},{"item":"http://www.wikidata.org/entity/Q4769048","itemLabel":"Annette Baier","influenced_by":"http://www.wikidata.org/entity/Q37160","influenced_byLabel":"David Hume"},{"item":"http://www.wikidata.org/entity/Q5584986","itemLabel":"Gordon Clark","influenced_by":"http://www.wikidata.org/entity/Q37577","influenced_byLabel":"John Calvin"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q9391","itemLabel":"Ludwig Wittgenstein","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q39803","itemLabel":"Mario Vargas Llosa","influenced_by":"http://www.wikidata.org/entity/Q38392","influenced_byLabel":"William Faulkner"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q76997","itemLabel":"Moses Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q37621","influenced_byLabel":"Thomas Hobbes"},{"item":"http://www.wikidata.org/entity/Q77057","itemLabel":"Karl Robert Eduard von Hartmann","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q85142","itemLabel":"Kurt Baier","influenced_by":"http://www.wikidata.org/entity/Q37621","influenced_byLabel":"Thomas Hobbes"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q185085","itemLabel":"Miguel de Unamuno","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q282280","itemLabel":"Vladimir Solovyov","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q1286158","itemLabel":"Edmund Montgomery","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q38082","influenced_byLabel":"Lewis Carroll"},{"item":"http://www.wikidata.org/entity/Q22670","itemLabel":"Friedrich Schiller","influenced_by":"http://www.wikidata.org/entity/Q112258","influenced_byLabel":"Karl Leonhard Reinhold"},{"item":"http://www.wikidata.org/entity/Q102585","itemLabel":"Johann Gottlieb Fichte","influenced_by":"http://www.wikidata.org/entity/Q112258","influenced_byLabel":"Karl Leonhard Reinhold"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q105180","influenced_byLabel":"Sojourner Truth"},{"item":"http://www.wikidata.org/entity/Q358561","itemLabel":"Reinhold Niebuhr","influenced_by":"http://www.wikidata.org/entity/Q107473","influenced_byLabel":"Karl Barth"},{"item":"http://www.wikidata.org/entity/Q28152056","itemLabel":"Metrofan Aksyonov","influenced_by":"http://www.wikidata.org/entity/Q113015","influenced_byLabel":"Karl, Freiherr von Prel"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q122392","influenced_byLabel":"Jacob Bernoulli"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q122382","influenced_byLabel":"Henry Fuseli"},{"item":"http://www.wikidata.org/entity/Q76526","itemLabel":"E. F. Schumacher","influenced_by":"http://www.wikidata.org/entity/Q113659","influenced_byLabel":"Leopold Kohr"},{"item":"http://www.wikidata.org/entity/Q76526","itemLabel":"E. F. Schumacher","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q84186","itemLabel":"Ivan Illich","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q123413","itemLabel":"Titus Burckhardt","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q176515","itemLabel":"Howard Gardner","influenced_by":"http://www.wikidata.org/entity/Q123190","influenced_byLabel":"Jean Piaget"},{"item":"http://www.wikidata.org/entity/Q242616","itemLabel":"Patricia Churchland","influenced_by":"http://www.wikidata.org/entity/Q123280","influenced_byLabel":"Francis Crick"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q123089","influenced_byLabel":"Benjamin Constant"},{"item":"http://www.wikidata.org/entity/Q957553","itemLabel":"Martin Lings","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q2114825","itemLabel":"Marco Pallis","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q2718078","itemLabel":"Tage Lindbom","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q3170848","itemLabel":"Jean Borella","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q80322726","itemLabel":"Mircea Ciobanu","influenced_by":"http://www.wikidata.org/entity/Q120993","influenced_byLabel":"Amedeo Modigliani"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q125551","influenced_byLabel":"Parmenides"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q125551","influenced_byLabel":"Parmenides"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q127398","influenced_byLabel":"Moshe ben Maimon"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q125551","influenced_byLabel":"Parmenides"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q127398","influenced_byLabel":"Moshe ben Maimon"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q125551","influenced_byLabel":"Parmenides"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q127398","influenced_byLabel":"Moshe ben Maimon"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q125551","influenced_byLabel":"Parmenides"},{"item":"http://www.wikidata.org/entity/Q76685","itemLabel":"Johann Friedrich Herbart","influenced_by":"http://www.wikidata.org/entity/Q125551","influenced_byLabel":"Parmenides"},{"item":"http://www.wikidata.org/entity/Q85942","itemLabel":"Nachman Krochmal","influenced_by":"http://www.wikidata.org/entity/Q127398","influenced_byLabel":"Moshe ben Maimon"},{"item":"http://www.wikidata.org/entity/Q101638","itemLabel":"Mary Wollstonecraft","influenced_by":"http://www.wikidata.org/entity/Q126462","influenced_byLabel":"Thomas Paine"},{"item":"http://www.wikidata.org/entity/Q107728","itemLabel":"Eberhard Arnold","influenced_by":"http://www.wikidata.org/entity/Q124749","influenced_byLabel":"Hermann Kutter"},{"item":"http://www.wikidata.org/entity/Q129228","itemLabel":"René Girard","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q132157","itemLabel":"Zeno of Elea","influenced_by":"http://www.wikidata.org/entity/Q125551","influenced_byLabel":"Parmenides"},{"item":"http://www.wikidata.org/entity/Q182847","itemLabel":"Jean Baudrillard","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q127398","influenced_byLabel":"Moshe ben Maimon"},{"item":"http://www.wikidata.org/entity/Q465763","itemLabel":"Salomon Maimon","influenced_by":"http://www.wikidata.org/entity/Q127398","influenced_byLabel":"Moshe ben Maimon"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q123413","influenced_byLabel":"Titus Burckhardt"},{"item":"http://www.wikidata.org/entity/Q528415","itemLabel":"Hasdai Crescas","influenced_by":"http://www.wikidata.org/entity/Q127398","influenced_byLabel":"Moshe ben Maimon"},{"item":"http://www.wikidata.org/entity/Q559622","itemLabel":"Joseph Albo","influenced_by":"http://www.wikidata.org/entity/Q127398","influenced_byLabel":"Moshe ben Maimon"},{"item":"http://www.wikidata.org/entity/Q725642","itemLabel":"Clarence Irving Lewis","influenced_by":"http://www.wikidata.org/entity/Q125249","influenced_byLabel":"William James"},{"item":"http://www.wikidata.org/entity/Q3709773","itemLabel":"Wolfgang Smith","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q4180366","itemLabel":"Edwin Holt","influenced_by":"http://www.wikidata.org/entity/Q125249","influenced_byLabel":"William James"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q123466","influenced_byLabel":"Heinrich Wölfflin"},{"item":"http://www.wikidata.org/entity/Q5950051","itemLabel":"Huston Smith","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q7146983","itemLabel":"Patrick Laude","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q8018864","itemLabel":"William Stoddart","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q15458882","itemLabel":"Jacob Needleman","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q1001","itemLabel":"Mohandas Karamchand Gandhi","influenced_by":"http://www.wikidata.org/entity/Q131149","influenced_byLabel":"Henry David Thoreau"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q131149","influenced_byLabel":"Henry David Thoreau"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q131149","influenced_byLabel":"Henry David Thoreau"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q353754","itemLabel":"Paul de Man","influenced_by":"http://www.wikidata.org/entity/Q130631","influenced_byLabel":"Jacques Derrida"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q432690","itemLabel":"Catherine Malabou","influenced_by":"http://www.wikidata.org/entity/Q130631","influenced_byLabel":"Jacques Derrida"},{"item":"http://www.wikidata.org/entity/Q472206","itemLabel":"Jean-Pierre Vernant","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q130631","influenced_byLabel":"Jacques Derrida"},{"item":"http://www.wikidata.org/entity/Q937610","itemLabel":"Edward Abbey","influenced_by":"http://www.wikidata.org/entity/Q131149","influenced_byLabel":"Henry David Thoreau"},{"item":"http://www.wikidata.org/entity/Q1245071","itemLabel":"Marcel Detienne","influenced_by":"http://www.wikidata.org/entity/Q128126","influenced_byLabel":"Claude Lévi-Strauss"},{"item":"http://www.wikidata.org/entity/Q2880824","itemLabel":"Félix de Azúa","influenced_by":"http://www.wikidata.org/entity/Q130746","influenced_byLabel":"Agustín García Calvo"},{"item":"http://www.wikidata.org/entity/Q3091395","itemLabel":"Jean-Pierre Dupuy","influenced_by":"http://www.wikidata.org/entity/Q129228","influenced_byLabel":"René Girard"},{"item":"http://www.wikidata.org/entity/Q3848721","itemLabel":"Maurizio Ferraris","influenced_by":"http://www.wikidata.org/entity/Q130631","influenced_byLabel":"Jacques Derrida"},{"item":"http://www.wikidata.org/entity/Q20046888","itemLabel":"Luis Filipe Barreto","influenced_by":"http://www.wikidata.org/entity/Q130631","influenced_byLabel":"Jacques Derrida"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q132157","influenced_byLabel":"Zeno of Elea"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q131333","influenced_byLabel":"George Eliot"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q131671","influenced_byLabel":"Xenophanes"},{"item":"http://www.wikidata.org/entity/Q41155","itemLabel":"Heraclitus","influenced_by":"http://www.wikidata.org/entity/Q131671","influenced_byLabel":"Xenophanes"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q132157","influenced_byLabel":"Zeno of Elea"},{"item":"http://www.wikidata.org/entity/Q47667","itemLabel":"Hu Shih","influenced_by":"http://www.wikidata.org/entity/Q131805","influenced_byLabel":"John Dewey"},{"item":"http://www.wikidata.org/entity/Q192207","itemLabel":"Aurobindo Ghosh","influenced_by":"http://www.wikidata.org/entity/Q131805","influenced_byLabel":"John Dewey"},{"item":"http://www.wikidata.org/entity/Q231690","itemLabel":"B. R. Ambedkar","influenced_by":"http://www.wikidata.org/entity/Q131805","influenced_byLabel":"John Dewey"},{"item":"http://www.wikidata.org/entity/Q235470","itemLabel":"Martha Nussbaum","influenced_by":"http://www.wikidata.org/entity/Q132489","influenced_byLabel":"Amartya Sen"},{"item":"http://www.wikidata.org/entity/Q663485","itemLabel":"James Rowland Angell","influenced_by":"http://www.wikidata.org/entity/Q131805","influenced_byLabel":"John Dewey"},{"item":"http://www.wikidata.org/entity/Q947456","itemLabel":"Sidney Hook","influenced_by":"http://www.wikidata.org/entity/Q131805","influenced_byLabel":"John Dewey"},{"item":"http://www.wikidata.org/entity/Q1235503","itemLabel":"Leonard Peikoff","influenced_by":"http://www.wikidata.org/entity/Q132524","influenced_byLabel":"Ayn Rand"},{"item":"http://www.wikidata.org/entity/Q2915527","itemLabel":"Monroe Beardsley","influenced_by":"http://www.wikidata.org/entity/Q131805","influenced_byLabel":"John Dewey"},{"item":"http://www.wikidata.org/entity/Q5293925","itemLabel":"Donald A. Crosby","influenced_by":"http://www.wikidata.org/entity/Q131805","influenced_byLabel":"John Dewey"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q140188","influenced_byLabel":"Aristarchus of Samos"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q11903","itemLabel":"Hypatia","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q134661","influenced_byLabel":"George Boole"},{"item":"http://www.wikidata.org/entity/Q34670","itemLabel":"Albert Camus","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q102851","itemLabel":"Boethius","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q128126","itemLabel":"Claude Lévi-Strauss","influenced_by":"http://www.wikidata.org/entity/Q135576","influenced_byLabel":"Alfred Radcliffe-Brown"},{"item":"http://www.wikidata.org/entity/Q208448","itemLabel":"Augustus De Morgan","influenced_by":"http://www.wikidata.org/entity/Q134661","influenced_byLabel":"George Boole"},{"item":"http://www.wikidata.org/entity/Q271809","itemLabel":"Proclus","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q1389946","itemLabel":"Philip Jourdain","influenced_by":"http://www.wikidata.org/entity/Q134661","influenced_byLabel":"George Boole"},{"item":"http://www.wikidata.org/entity/Q2332520","itemLabel":"Damaris Masham","influenced_by":"http://www.wikidata.org/entity/Q134189","influenced_byLabel":"Plotinus"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q150471","influenced_byLabel":"E. T. A. Hoffmann"},{"item":"http://www.wikidata.org/entity/Q15948","itemLabel":"Émile Durkheim","influenced_by":"http://www.wikidata.org/entity/Q144535","influenced_byLabel":"Herbert Spencer"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q150471","influenced_byLabel":"E. T. A. Hoffmann"},{"item":"http://www.wikidata.org/entity/Q34670","itemLabel":"Albert Camus","influenced_by":"http://www.wikidata.org/entity/Q151164","influenced_byLabel":"André Malraux"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q144535","influenced_byLabel":"Herbert Spencer"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q81244","influenced_byLabel":"Karl Popper"},{"item":"http://www.wikidata.org/entity/Q333521","itemLabel":"Nassim Nicholas Taleb","influenced_by":"http://www.wikidata.org/entity/Q81244","influenced_byLabel":"Karl Popper"},{"item":"http://www.wikidata.org/entity/Q5628058","itemLabel":"H. B. Acton","influenced_by":"http://www.wikidata.org/entity/Q81244","influenced_byLabel":"Karl Popper"},{"item":"http://www.wikidata.org/entity/Q15994733","itemLabel":"Eric Scerri","influenced_by":"http://www.wikidata.org/entity/Q81244","influenced_byLabel":"Karl Popper"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q81082","influenced_byLabel":"Henri Poincaré"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q83375","influenced_byLabel":"Empedocles"},{"item":"http://www.wikidata.org/entity/Q913","itemLabel":"Socrates","influenced_by":"http://www.wikidata.org/entity/Q83041","influenced_byLabel":"Anaxagoras"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q82934","influenced_byLabel":"Claude Henri de Rouvroy, comte de Saint-Simon"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q83375","influenced_byLabel":"Empedocles"},{"item":"http://www.wikidata.org/entity/Q83275","itemLabel":"Ziya Gökalp","influenced_by":"http://www.wikidata.org/entity/Q83280","influenced_byLabel":"Pan-Turkism"},{"item":"http://www.wikidata.org/entity/Q84352","itemLabel":"André Gorz","influenced_by":"http://www.wikidata.org/entity/Q84186","influenced_byLabel":"Ivan Illich"},{"item":"http://www.wikidata.org/entity/Q132524","itemLabel":"Ayn Rand","influenced_by":"http://www.wikidata.org/entity/Q84177","influenced_byLabel":"Carl Menger"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q83003","influenced_byLabel":"Antonio Gramsci"},{"item":"http://www.wikidata.org/entity/Q187520","itemLabel":"Charles Sanders Peirce","influenced_by":"http://www.wikidata.org/entity/Q82049","influenced_byLabel":"George Berkeley"},{"item":"http://www.wikidata.org/entity/Q364975","itemLabel":"Richard Cantillon","influenced_by":"http://www.wikidata.org/entity/Q82778","influenced_byLabel":"Pliny the Elder"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q83003","influenced_byLabel":"Antonio Gramsci"},{"item":"http://www.wikidata.org/entity/Q3573879","itemLabel":"Yves Paccalet","influenced_by":"http://www.wikidata.org/entity/Q83233","influenced_byLabel":"Jacques Cousteau"},{"item":"http://www.wikidata.org/entity/Q4266616","itemLabel":"Lev Lopatin","influenced_by":"http://www.wikidata.org/entity/Q82049","influenced_byLabel":"George Berkeley"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q82122","influenced_byLabel":"Jean-Baptiste de Lamarck"},{"item":"http://www.wikidata.org/entity/Q76688","itemLabel":"Hans-Hermann Hoppe","influenced_by":"http://www.wikidata.org/entity/Q84233","influenced_byLabel":"Ludwig von Mises"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q84423","influenced_byLabel":"Martin Buber"},{"item":"http://www.wikidata.org/entity/Q93996","itemLabel":"Ernst Mach","influenced_by":"http://www.wikidata.org/entity/Q86374","influenced_byLabel":"Andreas von Ettingshausen"},{"item":"http://www.wikidata.org/entity/Q111637","itemLabel":"Leon Henkin","influenced_by":"http://www.wikidata.org/entity/Q92741","influenced_byLabel":"Alonzo Church"},{"item":"http://www.wikidata.org/entity/Q113741","itemLabel":"Olga Taussky-Todd","influenced_by":"http://www.wikidata.org/entity/Q84552","influenced_byLabel":"Hans Hahn"},{"item":"http://www.wikidata.org/entity/Q132524","itemLabel":"Ayn Rand","influenced_by":"http://www.wikidata.org/entity/Q84233","influenced_byLabel":"Ludwig von Mises"},{"item":"http://www.wikidata.org/entity/Q183509","itemLabel":"Ilya Prigogine","influenced_by":"http://www.wikidata.org/entity/Q84296","influenced_byLabel":"Ludwig Boltzmann"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q92611","influenced_byLabel":"Haskell Curry"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q93166","influenced_byLabel":"Milan Kundera"},{"item":"http://www.wikidata.org/entity/Q454268","itemLabel":"John Zerzan","influenced_by":"http://www.wikidata.org/entity/Q84186","influenced_byLabel":"Ivan Illich"},{"item":"http://www.wikidata.org/entity/Q580695","itemLabel":"Robert C. Solomon","influenced_by":"http://www.wikidata.org/entity/Q86575","influenced_byLabel":"Frithjof Bergmann"},{"item":"http://www.wikidata.org/entity/Q1174527","itemLabel":"David Gauthier","influenced_by":"http://www.wikidata.org/entity/Q85142","influenced_byLabel":"Kurt Baier"},{"item":"http://www.wikidata.org/entity/Q3091395","itemLabel":"Jean-Pierre Dupuy","influenced_by":"http://www.wikidata.org/entity/Q84186","influenced_byLabel":"Ivan Illich"},{"item":"http://www.wikidata.org/entity/Q3351331","itemLabel":"Olivier Rey","influenced_by":"http://www.wikidata.org/entity/Q84186","influenced_byLabel":"Ivan Illich"},{"item":"http://www.wikidata.org/entity/Q4495505","itemLabel":"Thomas Hanna","influenced_by":"http://www.wikidata.org/entity/Q89394","influenced_byLabel":"Hans Selye"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q93996","influenced_byLabel":"Ernst Mach"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q102851","influenced_byLabel":"Boethius"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q102513","influenced_byLabel":"Harriet Beecher Stowe"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q102585","influenced_byLabel":"Johann Gottlieb Fichte"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q102851","influenced_byLabel":"Boethius"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q93343","influenced_byLabel":"Percy Bysshe Shelley"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q93996","influenced_byLabel":"Ernst Mach"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q101638","influenced_byLabel":"Mary Wollstonecraft"},{"item":"http://www.wikidata.org/entity/Q60070","itemLabel":"Friedrich Wilhelm Joseph Schelling","influenced_by":"http://www.wikidata.org/entity/Q102585","influenced_byLabel":"Johann Gottlieb Fichte"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q93996","influenced_byLabel":"Ernst Mach"},{"item":"http://www.wikidata.org/entity/Q78506","itemLabel":"Ingeborg Bachmann","influenced_by":"http://www.wikidata.org/entity/Q93514","influenced_byLabel":"Ilse Aichinger"},{"item":"http://www.wikidata.org/entity/Q78570","itemLabel":"Otto Neurath","influenced_by":"http://www.wikidata.org/entity/Q93996","influenced_byLabel":"Ernst Mach"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q101638","influenced_byLabel":"Mary Wollstonecraft"},{"item":"http://www.wikidata.org/entity/Q314172","itemLabel":"Pierre Duhem","influenced_by":"http://www.wikidata.org/entity/Q93996","influenced_byLabel":"Ernst Mach"},{"item":"http://www.wikidata.org/entity/Q3188736","itemLabel":"Jules Lequier","influenced_by":"http://www.wikidata.org/entity/Q102585","influenced_byLabel":"Johann Gottlieb Fichte"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q102585","influenced_byLabel":"Johann Gottlieb Fichte"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q160460","influenced_byLabel":"Al-Farabi"},{"item":"http://www.wikidata.org/entity/Q127398","itemLabel":"Moshe ben Maimon","influenced_by":"http://www.wikidata.org/entity/Q160460","influenced_byLabel":"Al-Farabi"},{"item":"http://www.wikidata.org/entity/Q182128","itemLabel":"Giovanni Pico della Mirandola","influenced_by":"http://www.wikidata.org/entity/Q162145","influenced_byLabel":"Neoplatonism"},{"item":"http://www.wikidata.org/entity/Q205162","itemLabel":"Isaiah Berlin","influenced_by":"http://www.wikidata.org/entity/Q160640","influenced_byLabel":"Raymond Aron"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q162597","influenced_byLabel":"Henri Lefebvre"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q169243","influenced_byLabel":"Protagoras"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q169234","influenced_byLabel":"Abu Bakr al-Razi"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q168542","influenced_byLabel":"Adalbert Stifter"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q169243","influenced_byLabel":"Protagoras"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q165792","influenced_byLabel":"Edmund Burke"},{"item":"http://www.wikidata.org/entity/Q84186","itemLabel":"Ivan Illich","influenced_by":"http://www.wikidata.org/entity/Q164797","influenced_byLabel":"Paulo Freire"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q164797","influenced_byLabel":"Paulo Freire"},{"item":"http://www.wikidata.org/entity/Q445939","itemLabel":"Roger Scruton","influenced_by":"http://www.wikidata.org/entity/Q165792","influenced_byLabel":"Edmund Burke"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q172599","influenced_byLabel":"Giacomo Leopardi"},{"item":"http://www.wikidata.org/entity/Q22670","itemLabel":"Friedrich Schiller","influenced_by":"http://www.wikidata.org/entity/Q170800","influenced_byLabel":"Pedro Calderón de la Barca"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q169906","influenced_byLabel":"Jacques Lacan"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q169906","influenced_byLabel":"Jacques Lacan"},{"item":"http://www.wikidata.org/entity/Q189564","itemLabel":"Pierre Teilhard de Chardin","influenced_by":"http://www.wikidata.org/entity/Q170472","influenced_byLabel":"Origen"},{"item":"http://www.wikidata.org/entity/Q235470","itemLabel":"Martha Nussbaum","influenced_by":"http://www.wikidata.org/entity/Q172544","influenced_byLabel":"John Rawls"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q169906","influenced_byLabel":"Jacques Lacan"},{"item":"http://www.wikidata.org/entity/Q319803","itemLabel":"Ronald Dworkin","influenced_by":"http://www.wikidata.org/entity/Q172544","influenced_byLabel":"John Rawls"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q169906","influenced_byLabel":"Jacques Lacan"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q171091","influenced_byLabel":"Philip K. Dick"},{"item":"http://www.wikidata.org/entity/Q381044","itemLabel":"Michael Sandel","influenced_by":"http://www.wikidata.org/entity/Q172544","influenced_byLabel":"John Rawls"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q172684","influenced_byLabel":"Aleister Crowley"},{"item":"http://www.wikidata.org/entity/Q572741","itemLabel":"Kwame Anthony Appiah","influenced_by":"http://www.wikidata.org/entity/Q172544","influenced_byLabel":"John Rawls"},{"item":"http://www.wikidata.org/entity/Q611015","itemLabel":"Jean Laplanche","influenced_by":"http://www.wikidata.org/entity/Q169906","influenced_byLabel":"Jacques Lacan"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q171677","influenced_byLabel":"Roger Bacon"},{"item":"http://www.wikidata.org/entity/Q1984757","itemLabel":"Barbara Cassin","influenced_by":"http://www.wikidata.org/entity/Q169906","influenced_byLabel":"Jacques Lacan"},{"item":"http://www.wikidata.org/entity/Q3091395","itemLabel":"Jean-Pierre Dupuy","influenced_by":"http://www.wikidata.org/entity/Q172544","influenced_byLabel":"John Rawls"},{"item":"http://www.wikidata.org/entity/Q3453681","itemLabel":"Ruwen Ogien","influenced_by":"http://www.wikidata.org/entity/Q172544","influenced_byLabel":"John Rawls"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q171969","influenced_byLabel":"Georges Cuvier"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q169906","influenced_byLabel":"Jacques Lacan"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q177847","influenced_byLabel":"Lucian of Samosata"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q178744","influenced_byLabel":"Manu"},{"item":"http://www.wikidata.org/entity/Q11903","itemLabel":"Hypatia","influenced_by":"http://www.wikidata.org/entity/Q178217","influenced_byLabel":"Diofantos"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q178709","influenced_byLabel":"Giambattista Vico"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q178709","influenced_byLabel":"Giambattista Vico"},{"item":"http://www.wikidata.org/entity/Q1001","itemLabel":"Mohandas Karamchand Gandhi","influenced_by":"http://www.wikidata.org/entity/Q179126","influenced_byLabel":"John Ruskin"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q179759","influenced_byLabel":"Al-Kindi"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q182128","influenced_byLabel":"Giovanni Pico della Mirandola"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q179759","influenced_byLabel":"Al-Kindi"},{"item":"http://www.wikidata.org/entity/Q43499","itemLabel":"Erasmus","influenced_by":"http://www.wikidata.org/entity/Q179541","influenced_byLabel":"Epicureanism"},{"item":"http://www.wikidata.org/entity/Q43499","itemLabel":"Erasmus","influenced_by":"http://www.wikidata.org/entity/Q182128","influenced_byLabel":"Giovanni Pico della Mirandola"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q180967","influenced_byLabel":"Adi Shankara"},{"item":"http://www.wikidata.org/entity/Q314252","itemLabel":"Gregory Bateson","influenced_by":"http://www.wikidata.org/entity/Q180099","influenced_byLabel":"Margaret Mead"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q179266","influenced_byLabel":"Jiddu Krishnamurti"},{"item":"http://www.wikidata.org/entity/Q445939","itemLabel":"Roger Scruton","influenced_by":"http://www.wikidata.org/entity/Q179126","influenced_byLabel":"John Ruskin"},{"item":"http://www.wikidata.org/entity/Q481384","itemLabel":"Ebn Meskavayh","influenced_by":"http://www.wikidata.org/entity/Q179759","influenced_byLabel":"Al-Kindi"},{"item":"http://www.wikidata.org/entity/Q517390","itemLabel":"Chantal Delsol","influenced_by":"http://www.wikidata.org/entity/Q179805","influenced_byLabel":"political philosophy"},{"item":"http://www.wikidata.org/entity/Q4408686","itemLabel":"Beatriz Sarlo","influenced_by":"http://www.wikidata.org/entity/Q179109","influenced_byLabel":"Roland Barthes"},{"item":"http://www.wikidata.org/entity/Q80322726","itemLabel":"Mircea Ciobanu","influenced_by":"http://www.wikidata.org/entity/Q179266","influenced_byLabel":"Jiddu Krishnamurti"},{"item":"http://www.wikidata.org/entity/Q1001","itemLabel":"Mohandas Karamchand Gandhi","influenced_by":"http://www.wikidata.org/entity/Q183167","influenced_byLabel":"G. K. Chesterton"},{"item":"http://www.wikidata.org/entity/Q1290","itemLabel":"Blaise Pascal","influenced_by":"http://www.wikidata.org/entity/Q183144","influenced_byLabel":"Epictetus"},{"item":"http://www.wikidata.org/entity/Q7060","itemLabel":"Michel Onfray","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q183167","influenced_byLabel":"G. K. Chesterton"},{"item":"http://www.wikidata.org/entity/Q92611","itemLabel":"Haskell Curry","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q104461","itemLabel":"Heinrich Scholz","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q125879","itemLabel":"William Alston","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q128494","itemLabel":"Lyubov Axelrod","influenced_by":"http://www.wikidata.org/entity/Q182905","influenced_byLabel":"Georgi Plekhanov"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q182603","influenced_byLabel":"Church Fathers"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q183167","influenced_byLabel":"G. K. Chesterton"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q289333","itemLabel":"Étienne Balibar","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q310341","itemLabel":"Antonio Negri","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q352465","itemLabel":"Félix Guattari","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q448427","itemLabel":"Sarah Kofman","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q556699","itemLabel":"Manuel De Landa","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q644620","itemLabel":"Quentin Meillassoux","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q747790","itemLabel":"Paolo Virno","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q852886","itemLabel":"François Laruelle","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q912704","itemLabel":"Brian Massumi","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q918655","itemLabel":"Michael Hardt","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q951460","itemLabel":"François Zourabichvili","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q1022453","itemLabel":"C. D. Broad","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q1064777","itemLabel":"Charles Hartshorne","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q3763746","itemLabel":"Éric Alliez","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q4147967","itemLabel":"Iain Hamilton Grant","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q5301680","itemLabel":"Douglas Kellner","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q5495081","itemLabel":"Fred Evans","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q5726254","itemLabel":"Henry Nelson Wieman","influenced_by":"http://www.wikidata.org/entity/Q183372","influenced_byLabel":"Alfred North Whitehead"},{"item":"http://www.wikidata.org/entity/Q6004524","itemLabel":"Reza Negarestani","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q6535374","itemLabel":"Levi Bryant","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q7027450","itemLabel":"Nick Land","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q7153067","itemLabel":"Paul R. Patton","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q7174493","itemLabel":"Peter Hallward","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q7297230","itemLabel":"Ray Brassier","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q282280","influenced_byLabel":"Vladimir Solovyov"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q273708","influenced_byLabel":"François de La Rochefoucauld"},{"item":"http://www.wikidata.org/entity/Q91137","itemLabel":"Fyodor Stepun","influenced_by":"http://www.wikidata.org/entity/Q282280","influenced_byLabel":"Vladimir Solovyov"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q282280","influenced_byLabel":"Vladimir Solovyov"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q275003","influenced_byLabel":"Émile Chartier"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q273210","influenced_byLabel":"James Baldwin"},{"item":"http://www.wikidata.org/entity/Q332535","itemLabel":"Sergei Bulgakov","influenced_by":"http://www.wikidata.org/entity/Q282280","influenced_byLabel":"Vladimir Solovyov"},{"item":"http://www.wikidata.org/entity/Q364975","itemLabel":"Richard Cantillon","influenced_by":"http://www.wikidata.org/entity/Q278699","influenced_byLabel":"William Petty"},{"item":"http://www.wikidata.org/entity/Q467015","itemLabel":"Henry Corbin","influenced_by":"http://www.wikidata.org/entity/Q282883","influenced_byLabel":"Shahab al-Din Suhrawardi"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q282883","influenced_byLabel":"Shahab al-Din Suhrawardi"},{"item":"http://www.wikidata.org/entity/Q937610","itemLabel":"Edward Abbey","influenced_by":"http://www.wikidata.org/entity/Q278543","influenced_byLabel":"A. B. Guthrie Jr."},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q282280","influenced_byLabel":"Vladimir Solovyov"},{"item":"http://www.wikidata.org/entity/Q4266616","itemLabel":"Lev Lopatin","influenced_by":"http://www.wikidata.org/entity/Q282280","influenced_byLabel":"Vladimir Solovyov"},{"item":"http://www.wikidata.org/entity/Q60526193","itemLabel":"J. Hunter Guthrie","influenced_by":"http://www.wikidata.org/entity/Q274978","influenced_byLabel":"Émile Bréhier"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q294100","influenced_byLabel":"Jacques-Bénigne Bossuet"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q297726","influenced_byLabel":"Hippolyte Taine"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q295386","influenced_byLabel":"G. E. Moore"},{"item":"http://www.wikidata.org/entity/Q78497","itemLabel":"Paul Feyerabend","influenced_by":"http://www.wikidata.org/entity/Q296249","influenced_byLabel":"Imre Lakatos"},{"item":"http://www.wikidata.org/entity/Q86371","itemLabel":"Gustav Bergmann","influenced_by":"http://www.wikidata.org/entity/Q295386","influenced_byLabel":"G. E. Moore"},{"item":"http://www.wikidata.org/entity/Q185770","itemLabel":"Posidonius","influenced_by":"http://www.wikidata.org/entity/Q297420","influenced_byLabel":"Panaetius"},{"item":"http://www.wikidata.org/entity/Q193803","itemLabel":"Roger Penrose","influenced_by":"http://www.wikidata.org/entity/Q284336","influenced_byLabel":"Dennis W. Sciama"},{"item":"http://www.wikidata.org/entity/Q345641","itemLabel":"Bernard Williams","influenced_by":"http://www.wikidata.org/entity/Q297493","influenced_byLabel":"Philippa Foot"},{"item":"http://www.wikidata.org/entity/Q379900","itemLabel":"Samuel Alexander","influenced_by":"http://www.wikidata.org/entity/Q295386","influenced_byLabel":"G. E. Moore"},{"item":"http://www.wikidata.org/entity/Q505528","itemLabel":"Harold Innis","influenced_by":"http://www.wikidata.org/entity/Q295978","influenced_byLabel":"George Herbert Mead"},{"item":"http://www.wikidata.org/entity/Q1022453","itemLabel":"C. D. Broad","influenced_by":"http://www.wikidata.org/entity/Q295386","influenced_byLabel":"G. E. Moore"},{"item":"http://www.wikidata.org/entity/Q2499944","itemLabel":"Abd al-Rahman al-Kawakibi","influenced_by":"http://www.wikidata.org/entity/Q296244","influenced_byLabel":"Vittorio Alfieri"},{"item":"http://www.wikidata.org/entity/Q4725710","itemLabel":"Alice Ambrose","influenced_by":"http://www.wikidata.org/entity/Q295386","influenced_byLabel":"G. E. Moore"},{"item":"http://www.wikidata.org/entity/Q15689042","itemLabel":"Ganapati Muni","influenced_by":"http://www.wikidata.org/entity/Q288441","influenced_byLabel":"Ramana Maharshi"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q302835","influenced_byLabel":"Nasir al-Din al-Tusi"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q309818","influenced_byLabel":"Nicolas Malebranche"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q309818","influenced_byLabel":"Nicolas Malebranche"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q309818","influenced_byLabel":"Nicolas Malebranche"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q309818","influenced_byLabel":"Nicolas Malebranche"},{"item":"http://www.wikidata.org/entity/Q41155","itemLabel":"Heraclitus","influenced_by":"http://www.wikidata.org/entity/Q298860","influenced_byLabel":"Hippasus"},{"item":"http://www.wikidata.org/entity/Q62852","itemLabel":"Ted Nelson","influenced_by":"http://www.wikidata.org/entity/Q299595","influenced_byLabel":"Vannevar Bush"},{"item":"http://www.wikidata.org/entity/Q82049","itemLabel":"George Berkeley","influenced_by":"http://www.wikidata.org/entity/Q309818","influenced_byLabel":"Nicolas Malebranche"},{"item":"http://www.wikidata.org/entity/Q213195","itemLabel":"B. F. Skinner","influenced_by":"http://www.wikidata.org/entity/Q309765","influenced_byLabel":"Edward Thorndike"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q298521","influenced_byLabel":"Saul Kripke"},{"item":"http://www.wikidata.org/entity/Q313073","itemLabel":"Jonathan Edwards","influenced_by":"http://www.wikidata.org/entity/Q309818","influenced_byLabel":"Nicolas Malebranche"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q299938","influenced_byLabel":"Halford Mackinder"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q306514","influenced_byLabel":"Abbie Hoffman"},{"item":"http://www.wikidata.org/entity/Q2499944","itemLabel":"Abd al-Rahman al-Kawakibi","influenced_by":"http://www.wikidata.org/entity/Q298434","influenced_byLabel":"Jamal ad-Din al-Afghani"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q309759","influenced_byLabel":"Edward Lear"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q310794","influenced_byLabel":"Karl Pearson"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q310757","influenced_byLabel":"Ruđer Josip Bošković"},{"item":"http://www.wikidata.org/entity/Q10261","itemLabel":"Pythagoras","influenced_by":"http://www.wikidata.org/entity/Q311485","influenced_byLabel":"Pherecydes of Syros"},{"item":"http://www.wikidata.org/entity/Q13529","itemLabel":"Alfred Marshall","influenced_by":"http://www.wikidata.org/entity/Q312546","influenced_byLabel":"William Stanley Jevons"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q311005","influenced_byLabel":"Alain Badiou"},{"item":"http://www.wikidata.org/entity/Q211411","itemLabel":"Chrysippus of Soli","influenced_by":"http://www.wikidata.org/entity/Q310149","influenced_byLabel":"Cleanthes"},{"item":"http://www.wikidata.org/entity/Q231690","itemLabel":"B. R. Ambedkar","influenced_by":"http://www.wikidata.org/entity/Q312551","influenced_byLabel":"Kabir"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q310913","influenced_byLabel":"Thich Nhat Hanh"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q311776","influenced_byLabel":"Paul Grice"},{"item":"http://www.wikidata.org/entity/Q313379","itemLabel":"Algirdas Julien Greimas","influenced_by":"http://www.wikidata.org/entity/Q310590","influenced_byLabel":"Georges Dumézil"},{"item":"http://www.wikidata.org/entity/Q352465","itemLabel":"Félix Guattari","influenced_by":"http://www.wikidata.org/entity/Q310341","influenced_byLabel":"Antonio Negri"},{"item":"http://www.wikidata.org/entity/Q435801","itemLabel":"Peter Senge","influenced_by":"http://www.wikidata.org/entity/Q310765","influenced_byLabel":"David Bohm"},{"item":"http://www.wikidata.org/entity/Q467470","itemLabel":"Jacques Rancière","influenced_by":"http://www.wikidata.org/entity/Q311005","influenced_byLabel":"Alain Badiou"},{"item":"http://www.wikidata.org/entity/Q528415","itemLabel":"Hasdai Crescas","influenced_by":"http://www.wikidata.org/entity/Q310777","influenced_byLabel":"Nicole Oresme"},{"item":"http://www.wikidata.org/entity/Q547086","itemLabel":"Tristan Garcia","influenced_by":"http://www.wikidata.org/entity/Q311005","influenced_byLabel":"Alain Badiou"},{"item":"http://www.wikidata.org/entity/Q644620","itemLabel":"Quentin Meillassoux","influenced_by":"http://www.wikidata.org/entity/Q311005","influenced_byLabel":"Alain Badiou"},{"item":"http://www.wikidata.org/entity/Q725239","itemLabel":"Stephen Neale","influenced_by":"http://www.wikidata.org/entity/Q311776","influenced_byLabel":"Paul Grice"},{"item":"http://www.wikidata.org/entity/Q923743","itemLabel":"Simon Critchley","influenced_by":"http://www.wikidata.org/entity/Q311005","influenced_byLabel":"Alain Badiou"},{"item":"http://www.wikidata.org/entity/Q5515822","itemLabel":"Gabriel Rockhill","influenced_by":"http://www.wikidata.org/entity/Q311005","influenced_byLabel":"Alain Badiou"},{"item":"http://www.wikidata.org/entity/Q6175878","itemLabel":"Jeffrey Bub","influenced_by":"http://www.wikidata.org/entity/Q310765","influenced_byLabel":"David Bohm"},{"item":"http://www.wikidata.org/entity/Q7174493","itemLabel":"Peter Hallward","influenced_by":"http://www.wikidata.org/entity/Q311005","influenced_byLabel":"Alain Badiou"},{"item":"http://www.wikidata.org/entity/Q7297230","itemLabel":"Ray Brassier","influenced_by":"http://www.wikidata.org/entity/Q311005","influenced_byLabel":"Alain Badiou"},{"item":"http://www.wikidata.org/entity/Q11034616","itemLabel":"Paavo Pylkkänen","influenced_by":"http://www.wikidata.org/entity/Q310765","influenced_byLabel":"David Bohm"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q314189","influenced_byLabel":"Lev Shestov"},{"item":"http://www.wikidata.org/entity/Q85142","itemLabel":"Kurt Baier","influenced_by":"http://www.wikidata.org/entity/Q313386","influenced_byLabel":"Gilbert Ryle"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q313666","influenced_byLabel":"Georges Sorel"},{"item":"http://www.wikidata.org/entity/Q231690","itemLabel":"B. R. Ambedkar","influenced_by":"http://www.wikidata.org/entity/Q314394","influenced_byLabel":"Jyotirao Phule"},{"item":"http://www.wikidata.org/entity/Q243757","itemLabel":"A. J. Ayer","influenced_by":"http://www.wikidata.org/entity/Q313386","influenced_byLabel":"Gilbert Ryle"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q313666","influenced_byLabel":"Georges Sorel"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q316339","influenced_byLabel":"Francisco Suárez"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q316339","influenced_byLabel":"Francisco Suárez"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q316367","influenced_byLabel":"Francis Hutcheson"},{"item":"http://www.wikidata.org/entity/Q12718","itemLabel":"Auguste Comte","influenced_by":"http://www.wikidata.org/entity/Q316674","influenced_byLabel":"Louis Gabriel Ambroise de Bonald"},{"item":"http://www.wikidata.org/entity/Q15948","itemLabel":"Émile Durkheim","influenced_by":"http://www.wikidata.org/entity/Q316674","influenced_byLabel":"Louis Gabriel Ambroise de Bonald"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q315210","influenced_byLabel":"Maurice Blanchot"},{"item":"http://www.wikidata.org/entity/Q125879","itemLabel":"William Alston","influenced_by":"http://www.wikidata.org/entity/Q316347","influenced_byLabel":"Thomas Reid"},{"item":"http://www.wikidata.org/entity/Q205162","itemLabel":"Isaiah Berlin","influenced_by":"http://www.wikidata.org/entity/Q317075","influenced_byLabel":"R. G. Collingwood"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q315387","influenced_byLabel":"Frank P. Ramsey"},{"item":"http://www.wikidata.org/entity/Q937610","itemLabel":"Edward Abbey","influenced_by":"http://www.wikidata.org/entity/Q315963","influenced_byLabel":"Gary Snyder"},{"item":"http://www.wikidata.org/entity/Q1187608","itemLabel":"Denis Pétau","influenced_by":"http://www.wikidata.org/entity/Q315163","influenced_byLabel":"Joseph Justus Scaliger"},{"item":"http://www.wikidata.org/entity/Q1398235","itemLabel":"William Derham","influenced_by":"http://www.wikidata.org/entity/Q316949","influenced_byLabel":"John Ray"},{"item":"http://www.wikidata.org/entity/Q4115307","itemLabel":"Al-Jubba'i","influenced_by":"http://www.wikidata.org/entity/Q316349","influenced_byLabel":"Abu al-Hasan al-Ash'ari"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q316045","influenced_byLabel":"Georg Brandes"},{"item":"http://www.wikidata.org/entity/Q1290","itemLabel":"Blaise Pascal","influenced_by":"http://www.wikidata.org/entity/Q318943","influenced_byLabel":"Cornelius Jansen"},{"item":"http://www.wikidata.org/entity/Q315372","itemLabel":"Gabriel Tarde","influenced_by":"http://www.wikidata.org/entity/Q323245","influenced_byLabel":"Antoine Augustin Cournot"},{"item":"http://www.wikidata.org/entity/Q316371","itemLabel":"Vladimir Ivanovich Vernadsky","influenced_by":"http://www.wikidata.org/entity/Q319386","influenced_byLabel":"Vasily Dokuchaev"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q318105","influenced_byLabel":"Corneliu Zelea Codreanu"},{"item":"http://www.wikidata.org/entity/Q366123","itemLabel":"David Chalmers","influenced_by":"http://www.wikidata.org/entity/Q319308","influenced_byLabel":"Douglas Hofstadter"},{"item":"http://www.wikidata.org/entity/Q553128","itemLabel":"Giulio Cesare Vanini","influenced_by":"http://www.wikidata.org/entity/Q318787","influenced_byLabel":"Pietro Pomponazzi"},{"item":"http://www.wikidata.org/entity/Q17296722","itemLabel":"Hélène Metzger","influenced_by":"http://www.wikidata.org/entity/Q324932","influenced_byLabel":"Lucien Lévy-Bruhl"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q319243","influenced_byLabel":"Alexandre Koyré"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q335516","influenced_byLabel":"Abu Zayd al-Balkhi"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q332470","influenced_byLabel":"Henry St John, 1st Viscount Bolingbroke"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q336002","influenced_byLabel":"Anthony Ashley Cooper, 1st Earl of Shaftesbury"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q336115","influenced_byLabel":"Theognis of Megara"},{"item":"http://www.wikidata.org/entity/Q102289","itemLabel":"Buckminster Fuller","influenced_by":"http://www.wikidata.org/entity/Q333402","influenced_byLabel":"Alfred Korzybski"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q332449","influenced_byLabel":"William Blackstone"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q184169","influenced_byLabel":"Louis Althusser"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q184500","influenced_byLabel":"Johannes Scotus Eriugena"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q185832","influenced_byLabel":"Emmanuel Swedenborg"},{"item":"http://www.wikidata.org/entity/Q48226","itemLabel":"Ralph Waldo Emerson","influenced_by":"http://www.wikidata.org/entity/Q185832","influenced_byLabel":"Emmanuel Swedenborg"},{"item":"http://www.wikidata.org/entity/Q57497","itemLabel":"Carl Stumpf","influenced_by":"http://www.wikidata.org/entity/Q184735","influenced_byLabel":"Bernard Bolzano"},{"item":"http://www.wikidata.org/entity/Q58586","itemLabel":"Edmund Husserl","influenced_by":"http://www.wikidata.org/entity/Q184735","influenced_byLabel":"Bernard Bolzano"},{"item":"http://www.wikidata.org/entity/Q60028","itemLabel":"Gottlob Frege","influenced_by":"http://www.wikidata.org/entity/Q184735","influenced_byLabel":"Bernard Bolzano"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q184735","influenced_byLabel":"Bernard Bolzano"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q186525","influenced_byLabel":"Julius Nyerere"},{"item":"http://www.wikidata.org/entity/Q350124","itemLabel":"Kevin Mulligan","influenced_by":"http://www.wikidata.org/entity/Q184735","influenced_byLabel":"Bernard Bolzano"},{"item":"http://www.wikidata.org/entity/Q381848","itemLabel":"Patrick Geddes","influenced_by":"http://www.wikidata.org/entity/Q184366","influenced_byLabel":"Thomas Henry Huxley"},{"item":"http://www.wikidata.org/entity/Q381994","itemLabel":"Kazimierz Twardowski","influenced_by":"http://www.wikidata.org/entity/Q184735","influenced_byLabel":"Bernard Bolzano"},{"item":"http://www.wikidata.org/entity/Q556699","itemLabel":"Manuel De Landa","influenced_by":"http://www.wikidata.org/entity/Q185105","influenced_byLabel":"Fernand Braudel"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q184656","influenced_byLabel":"Nicolai Berdyaev"},{"item":"http://www.wikidata.org/entity/Q6118610","itemLabel":"Renata Salecl","influenced_by":"http://www.wikidata.org/entity/Q184750","influenced_byLabel":"Slavoj Žižek"},{"item":"http://www.wikidata.org/entity/Q6535374","itemLabel":"Levi Bryant","influenced_by":"http://www.wikidata.org/entity/Q184750","influenced_byLabel":"Slavoj Žižek"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q184750","influenced_byLabel":"Slavoj Žižek"},{"item":"http://www.wikidata.org/entity/Q20968412","itemLabel":"Marina Garcés","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q184226","influenced_byLabel":"Gilles Deleuze"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q188663","influenced_byLabel":"Marin Mersenne"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q187520","influenced_byLabel":"Charles Sanders Peirce"},{"item":"http://www.wikidata.org/entity/Q58853","itemLabel":"Karl-Otto Apel","influenced_by":"http://www.wikidata.org/entity/Q187520","influenced_byLabel":"Charles Sanders Peirce"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q187520","influenced_byLabel":"Charles Sanders Peirce"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q187520","influenced_byLabel":"Charles Sanders Peirce"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q188176","influenced_byLabel":"William S. Burroughs"},{"item":"http://www.wikidata.org/entity/Q207534","itemLabel":"Alfred Tarski","influenced_by":"http://www.wikidata.org/entity/Q187520","influenced_byLabel":"Charles Sanders Peirce"},{"item":"http://www.wikidata.org/entity/Q471040","itemLabel":"Vinayak Damodar Savarkar","influenced_by":"http://www.wikidata.org/entity/Q187336","influenced_byLabel":"Giuseppe Mazzini"},{"item":"http://www.wikidata.org/entity/Q471260","itemLabel":"Josiah Royce","influenced_by":"http://www.wikidata.org/entity/Q187520","influenced_byLabel":"Charles Sanders Peirce"},{"item":"http://www.wikidata.org/entity/Q3173010","itemLabel":"Susan Haack","influenced_by":"http://www.wikidata.org/entity/Q187520","influenced_byLabel":"Charles Sanders Peirce"},{"item":"http://www.wikidata.org/entity/Q7027450","itemLabel":"Nick Land","influenced_by":"http://www.wikidata.org/entity/Q188176","influenced_byLabel":"William S. Burroughs"},{"item":"http://www.wikidata.org/entity/Q7060","itemLabel":"Michel Onfray","influenced_by":"http://www.wikidata.org/entity/Q189506","influenced_byLabel":"Aristippus"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q190089","influenced_byLabel":"Duns Scotus"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q191029","influenced_byLabel":"Giuseppe Peano"},{"item":"http://www.wikidata.org/entity/Q43216","itemLabel":"Epicurus","influenced_by":"http://www.wikidata.org/entity/Q189506","influenced_byLabel":"Aristippus"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q190089","influenced_byLabel":"Duns Scotus"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q190089","influenced_byLabel":"Duns Scotus"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q190089","influenced_byLabel":"Duns Scotus"},{"item":"http://www.wikidata.org/entity/Q189564","itemLabel":"Pierre Teilhard de Chardin","influenced_by":"http://www.wikidata.org/entity/Q191734","influenced_byLabel":"Gregory of Nyssa"},{"item":"http://www.wikidata.org/entity/Q262225","itemLabel":"Arete of Cyrene","influenced_by":"http://www.wikidata.org/entity/Q189506","influenced_byLabel":"Aristippus"},{"item":"http://www.wikidata.org/entity/Q381765","itemLabel":"Theodoros the Atheist","influenced_by":"http://www.wikidata.org/entity/Q189506","influenced_byLabel":"Aristippus"},{"item":"http://www.wikidata.org/entity/Q437876","itemLabel":"Hegesias of Cyrene","influenced_by":"http://www.wikidata.org/entity/Q189506","influenced_byLabel":"Aristippus"},{"item":"http://www.wikidata.org/entity/Q528415","itemLabel":"Hasdai Crescas","influenced_by":"http://www.wikidata.org/entity/Q190089","influenced_byLabel":"Duns Scotus"},{"item":"http://www.wikidata.org/entity/Q556865","itemLabel":"Anniceris","influenced_by":"http://www.wikidata.org/entity/Q189506","influenced_byLabel":"Aristippus"},{"item":"http://www.wikidata.org/entity/Q665984","itemLabel":"Aristippus the Younger","influenced_by":"http://www.wikidata.org/entity/Q189506","influenced_byLabel":"Aristippus"},{"item":"http://www.wikidata.org/entity/Q7027450","itemLabel":"Nick Land","influenced_by":"http://www.wikidata.org/entity/Q188987","influenced_byLabel":"William Gibson"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q192885","influenced_byLabel":"Vissarion Belinsky"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q192315","influenced_byLabel":"Pierre Gassendi"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q193660","influenced_byLabel":"Ramon Llull"},{"item":"http://www.wikidata.org/entity/Q25973","itemLabel":"Hermann Hesse","influenced_by":"http://www.wikidata.org/entity/Q193664","influenced_byLabel":"Pietism"},{"item":"http://www.wikidata.org/entity/Q43216","itemLabel":"Epicurus","influenced_by":"http://www.wikidata.org/entity/Q192313","influenced_byLabel":"Pyrrho"},{"item":"http://www.wikidata.org/entity/Q75889","itemLabel":"Friedrich Hölderlin","influenced_by":"http://www.wikidata.org/entity/Q193664","influenced_byLabel":"Pietism"},{"item":"http://www.wikidata.org/entity/Q76576","itemLabel":"Friedrich Schleiermacher","influenced_by":"http://www.wikidata.org/entity/Q193664","influenced_byLabel":"Pietism"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q192207","influenced_byLabel":"Aurobindo Ghosh"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q192331","influenced_byLabel":"Nikolay Gavrilovich Chernyshevsky"},{"item":"http://www.wikidata.org/entity/Q189597","itemLabel":"Philo of Alexandria","influenced_by":"http://www.wikidata.org/entity/Q193589","influenced_byLabel":"Platonism"},{"item":"http://www.wikidata.org/entity/Q325741","itemLabel":"Homi K. Bhabha","influenced_by":"http://www.wikidata.org/entity/Q193670","influenced_byLabel":"Frantz Fanon"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q192348","influenced_byLabel":"Benedetto Croce"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q193670","influenced_byLabel":"Frantz Fanon"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q193257","influenced_byLabel":"Jean-François Lyotard"},{"item":"http://www.wikidata.org/entity/Q376036","itemLabel":"Svetozar Marković","influenced_by":"http://www.wikidata.org/entity/Q192331","influenced_byLabel":"Nikolay Gavrilovich Chernyshevsky"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q192331","influenced_byLabel":"Nikolay Gavrilovich Chernyshevsky"},{"item":"http://www.wikidata.org/entity/Q664619","itemLabel":"Rémi Brague","influenced_by":"http://www.wikidata.org/entity/Q192292","influenced_byLabel":"medieval philosophy"},{"item":"http://www.wikidata.org/entity/Q1451251","itemLabel":"François de La Mothe Le Vayer","influenced_by":"http://www.wikidata.org/entity/Q192313","influenced_byLabel":"Pyrrho"},{"item":"http://www.wikidata.org/entity/Q2939213","itemLabel":"Carlo Ludovico Ragghianti","influenced_by":"http://www.wikidata.org/entity/Q192348","influenced_byLabel":"Benedetto Croce"},{"item":"http://www.wikidata.org/entity/Q4017966","itemLabel":"Walter Maturi","influenced_by":"http://www.wikidata.org/entity/Q192348","influenced_byLabel":"Benedetto Croce"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q200639","influenced_byLabel":"Paul Valéry"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q201221","influenced_byLabel":"Alexander Ivanovich Herzen"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q198644","influenced_byLabel":"Paul Bourget"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q201221","influenced_byLabel":"Alexander Ivanovich Herzen"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q193857","influenced_byLabel":"Ben Jonson"},{"item":"http://www.wikidata.org/entity/Q106265","itemLabel":"Norbert Bolz","influenced_by":"http://www.wikidata.org/entity/Q193871","influenced_byLabel":"Marshall McLuhan"},{"item":"http://www.wikidata.org/entity/Q310791","itemLabel":"Jules Michelet","influenced_by":"http://www.wikidata.org/entity/Q201477","influenced_byLabel":"Jean-Antoine-Nicolas de Caritat de Condorcet"},{"item":"http://www.wikidata.org/entity/Q325741","itemLabel":"Homi K. Bhabha","influenced_by":"http://www.wikidata.org/entity/Q201538","influenced_byLabel":"Edward Said"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q193871","influenced_byLabel":"Marshall McLuhan"},{"item":"http://www.wikidata.org/entity/Q379577","itemLabel":"Marpa Lotsawa","influenced_by":"http://www.wikidata.org/entity/Q203060","influenced_byLabel":"Naropa"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q201221","influenced_byLabel":"Alexander Ivanovich Herzen"},{"item":"http://www.wikidata.org/entity/Q620732","itemLabel":"Alexander Tarasov","influenced_by":"http://www.wikidata.org/entity/Q193670","influenced_byLabel":"Frantz Fanon"},{"item":"http://www.wikidata.org/entity/Q773259","itemLabel":"Shibli Nomani","influenced_by":"http://www.wikidata.org/entity/Q196546","influenced_byLabel":"Syed Ahmed Khan"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q200639","influenced_byLabel":"Paul Valéry"},{"item":"http://www.wikidata.org/entity/Q6536603","itemLabel":"Lewis Gordon","influenced_by":"http://www.wikidata.org/entity/Q193670","influenced_byLabel":"Frantz Fanon"},{"item":"http://www.wikidata.org/entity/Q39803","itemLabel":"Mario Vargas Llosa","influenced_by":"http://www.wikidata.org/entity/Q205162","influenced_byLabel":"Isaiah Berlin"},{"item":"http://www.wikidata.org/entity/Q102851","itemLabel":"Boethius","influenced_by":"http://www.wikidata.org/entity/Q203445","influenced_byLabel":"Porphyry"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q203674","influenced_byLabel":"Pierre Klossowski"},{"item":"http://www.wikidata.org/entity/Q1083378","itemLabel":"Carlo Lottieri","influenced_by":"http://www.wikidata.org/entity/Q205927","influenced_byLabel":"Robert Nozick"},{"item":"http://www.wikidata.org/entity/Q2484404","itemLabel":"Yuval Noah Harari","influenced_by":"http://www.wikidata.org/entity/Q205772","influenced_byLabel":"Jared Diamond"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q208448","influenced_byLabel":"Augustus De Morgan"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q208230","influenced_byLabel":"Claude Bernard"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q207359","influenced_byLabel":"Georges Bataille"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q207534","influenced_byLabel":"Alfred Tarski"},{"item":"http://www.wikidata.org/entity/Q86371","itemLabel":"Gustav Bergmann","influenced_by":"http://www.wikidata.org/entity/Q208238","influenced_byLabel":"Vienna Circle"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q207534","influenced_byLabel":"Alfred Tarski"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q207534","influenced_byLabel":"Alfred Tarski"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q207359","influenced_byLabel":"Georges Bataille"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q207544","influenced_byLabel":"L. Frank Baum"},{"item":"http://www.wikidata.org/entity/Q113786","itemLabel":"Karl H. Pribram","influenced_by":"http://www.wikidata.org/entity/Q213504","influenced_byLabel":"Charles Scott Sherrington"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q211731","influenced_byLabel":"Timothy Leary"},{"item":"http://www.wikidata.org/entity/Q971585","itemLabel":"Hubert Dreyfus","influenced_by":"http://www.wikidata.org/entity/Q212639","influenced_byLabel":"Maurice Merleau-Ponty"},{"item":"http://www.wikidata.org/entity/Q1345582","itemLabel":"Gilbert Simondon","influenced_by":"http://www.wikidata.org/entity/Q212639","influenced_byLabel":"Maurice Merleau-Ponty"},{"item":"http://www.wikidata.org/entity/Q3592370","itemLabel":"Étienne Tassin","influenced_by":"http://www.wikidata.org/entity/Q212639","influenced_byLabel":"Maurice Merleau-Ponty"},{"item":"http://www.wikidata.org/entity/Q3852788","itemLabel":"Mauro Carbone","influenced_by":"http://www.wikidata.org/entity/Q212639","influenced_byLabel":"Maurice Merleau-Ponty"},{"item":"http://www.wikidata.org/entity/Q18692704","itemLabel":"Bérénice Levet","influenced_by":"http://www.wikidata.org/entity/Q212639","influenced_byLabel":"Maurice Merleau-Ponty"},{"item":"http://www.wikidata.org/entity/Q20968412","itemLabel":"Marina Garcés","influenced_by":"http://www.wikidata.org/entity/Q212639","influenced_byLabel":"Maurice Merleau-Ponty"},{"item":"http://www.wikidata.org/entity/Q38481872","itemLabel":"Yves Bonnardel","influenced_by":"http://www.wikidata.org/entity/Q211539","influenced_byLabel":"Peter Singer"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q214816","influenced_byLabel":"Pierre Bayle"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q215305","influenced_byLabel":"Giulio Romano"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q213632","influenced_byLabel":"Johann Most"},{"item":"http://www.wikidata.org/entity/Q215263","itemLabel":"Daniel Dennett","influenced_by":"http://www.wikidata.org/entity/Q214969","influenced_byLabel":"Willard Van Orman Quine"},{"item":"http://www.wikidata.org/entity/Q242616","itemLabel":"Patricia Churchland","influenced_by":"http://www.wikidata.org/entity/Q214969","influenced_byLabel":"Willard Van Orman Quine"},{"item":"http://www.wikidata.org/entity/Q242616","itemLabel":"Patricia Churchland","influenced_by":"http://www.wikidata.org/entity/Q215258","influenced_byLabel":"Richard Rorty"},{"item":"http://www.wikidata.org/entity/Q273223","itemLabel":"John Eccles","influenced_by":"http://www.wikidata.org/entity/Q213504","influenced_byLabel":"Charles Scott Sherrington"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q214969","influenced_byLabel":"Willard Van Orman Quine"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q216809","influenced_byLabel":"Paul Cohen"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q214969","influenced_byLabel":"Willard Van Orman Quine"},{"item":"http://www.wikidata.org/entity/Q712469","itemLabel":"Cornel West","influenced_by":"http://www.wikidata.org/entity/Q215258","influenced_byLabel":"Richard Rorty"},{"item":"http://www.wikidata.org/entity/Q7106073","itemLabel":"Oscar Kempthorne","influenced_by":"http://www.wikidata.org/entity/Q216723","influenced_byLabel":"Ronald Fisher"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q218960","influenced_byLabel":"Laurence Sterne"},{"item":"http://www.wikidata.org/entity/Q213195","itemLabel":"B. F. Skinner","influenced_by":"http://www.wikidata.org/entity/Q217477","influenced_byLabel":"John B. Watson"},{"item":"http://www.wikidata.org/entity/Q271666","itemLabel":"James Mill","influenced_by":"http://www.wikidata.org/entity/Q218254","influenced_byLabel":"Dugald Stewart"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q221697","influenced_byLabel":"Hilary Putnam"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q221697","influenced_byLabel":"Hilary Putnam"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q223955","influenced_byLabel":"Aimé Césaire"},{"item":"http://www.wikidata.org/entity/Q1963049","itemLabel":"Pierre Poiret","influenced_by":"http://www.wikidata.org/entity/Q220976","influenced_byLabel":"Thomas à Kempis"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q229646","influenced_byLabel":"G. E. M. Anscombe"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q236594","influenced_byLabel":"Sextus Empiricus"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q237833","influenced_byLabel":"George Santayana"},{"item":"http://www.wikidata.org/entity/Q450663","itemLabel":"Avital Ronell","influenced_by":"http://www.wikidata.org/entity/Q238584","influenced_byLabel":"R. D. Laing"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q242517","influenced_byLabel":"Orphism"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q251259","influenced_byLabel":"Ibn Tufayl"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q251259","influenced_byLabel":"Ibn Tufayl"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q251259","influenced_byLabel":"Ibn Tufayl"},{"item":"http://www.wikidata.org/entity/Q43393","itemLabel":"Robert Boyle","influenced_by":"http://www.wikidata.org/entity/Q251259","influenced_byLabel":"Ibn Tufayl"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q243787","influenced_byLabel":"Grigorios Palamas"},{"item":"http://www.wikidata.org/entity/Q2589859","itemLabel":"Georges Vacher de Lapouge","influenced_by":"http://www.wikidata.org/entity/Q264918","influenced_byLabel":"Arthur de Gobineau"},{"item":"http://www.wikidata.org/entity/Q3421077","itemLabel":"Raymond O. Faulkner","influenced_by":"http://www.wikidata.org/entity/Q242542","influenced_byLabel":"Margaret Murray"},{"item":"http://www.wikidata.org/entity/Q4131970","itemLabel":"Piama Gaïdenko","influenced_by":"http://www.wikidata.org/entity/Q259731","influenced_byLabel":"Teodor Oizerman"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q250161","influenced_byLabel":"Dennis Banks"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q271809","influenced_byLabel":"Proclus"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q270800","influenced_byLabel":"Gaston Bachelard"},{"item":"http://www.wikidata.org/entity/Q125879","itemLabel":"William Alston","influenced_by":"http://www.wikidata.org/entity/Q272615","influenced_byLabel":"J. L. Austin"},{"item":"http://www.wikidata.org/entity/Q179109","itemLabel":"Roland Barthes","influenced_by":"http://www.wikidata.org/entity/Q270800","influenced_byLabel":"Gaston Bachelard"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q270800","influenced_byLabel":"Gaston Bachelard"},{"item":"http://www.wikidata.org/entity/Q433741","itemLabel":"Georges Canguilhem","influenced_by":"http://www.wikidata.org/entity/Q270800","influenced_byLabel":"Gaston Bachelard"},{"item":"http://www.wikidata.org/entity/Q764300","itemLabel":"Dominique Lecourt","influenced_by":"http://www.wikidata.org/entity/Q270800","influenced_byLabel":"Gaston Bachelard"},{"item":"http://www.wikidata.org/entity/Q1345582","itemLabel":"Gilbert Simondon","influenced_by":"http://www.wikidata.org/entity/Q270800","influenced_byLabel":"Gaston Bachelard"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q271032","influenced_byLabel":"Matthew Arnold"},{"item":"http://www.wikidata.org/entity/Q1963049","itemLabel":"Pierre Poiret","influenced_by":"http://www.wikidata.org/entity/Q270552","influenced_byLabel":"Antoinette Bourignon"},{"item":"http://www.wikidata.org/entity/Q4747968","itemLabel":"Amos N. Wilson","influenced_by":"http://www.wikidata.org/entity/Q272504","influenced_byLabel":"Marcus Garvey"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q270800","influenced_byLabel":"Gaston Bachelard"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q374362","influenced_byLabel":"Nikolay Ogarev"},{"item":"http://www.wikidata.org/entity/Q43393","itemLabel":"Robert Boyle","influenced_by":"http://www.wikidata.org/entity/Q365463","influenced_byLabel":"Cornelis Drebbel"},{"item":"http://www.wikidata.org/entity/Q379900","itemLabel":"Samuel Alexander","influenced_by":"http://www.wikidata.org/entity/Q369621","influenced_byLabel":"Thomas Hill Green"},{"item":"http://www.wikidata.org/entity/Q440183","itemLabel":"Nicolas-Claude Fabri de Peiresc","influenced_by":"http://www.wikidata.org/entity/Q365463","influenced_byLabel":"Cornelis Drebbel"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q369907","influenced_byLabel":"Abul Ala Maududi"},{"item":"http://www.wikidata.org/entity/Q1285583","itemLabel":"Ljubodrag Simonović","influenced_by":"http://www.wikidata.org/entity/Q376036","influenced_byLabel":"Svetozar Marković"},{"item":"http://www.wikidata.org/entity/Q3312923","itemLabel":"Miguel Abensour","influenced_by":"http://www.wikidata.org/entity/Q373036","influenced_byLabel":"Claude Lefort"},{"item":"http://www.wikidata.org/entity/Q3592370","itemLabel":"Étienne Tassin","influenced_by":"http://www.wikidata.org/entity/Q373036","influenced_byLabel":"Claude Lefort"},{"item":"http://www.wikidata.org/entity/Q5232183","itemLabel":"David Carrier","influenced_by":"http://www.wikidata.org/entity/Q365129","influenced_byLabel":"Arthur Danto Lindo"},{"item":"http://www.wikidata.org/entity/Q13052258","itemLabel":"Arsen Bagratuni","influenced_by":"http://www.wikidata.org/entity/Q365695","influenced_byLabel":"Moses of Chorene"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q385790","influenced_byLabel":"African Spir"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q379912","influenced_byLabel":"Bernard Mandeville"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q385790","influenced_byLabel":"African Spir"},{"item":"http://www.wikidata.org/entity/Q207718","itemLabel":"Isaac Barrow","influenced_by":"http://www.wikidata.org/entity/Q382016","influenced_byLabel":"Gilles de Roberval"},{"item":"http://www.wikidata.org/entity/Q271666","itemLabel":"James Mill","influenced_by":"http://www.wikidata.org/entity/Q379902","influenced_byLabel":"David Hartley"},{"item":"http://www.wikidata.org/entity/Q274309","itemLabel":"Élisabeth Badinter","influenced_by":"http://www.wikidata.org/entity/Q380443","influenced_byLabel":"Alain Finkielkraut"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q394628","influenced_byLabel":"Raymond Williams"},{"item":"http://www.wikidata.org/entity/Q469888","itemLabel":"Lewis Mumford","influenced_by":"http://www.wikidata.org/entity/Q381848","influenced_byLabel":"Patrick Geddes"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q379589","influenced_byLabel":"Ananda Coomaraswamy"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q380241","influenced_byLabel":"Bayazid Bastami"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q381678","influenced_byLabel":"André Leroi-Gourhan"},{"item":"http://www.wikidata.org/entity/Q1348334","itemLabel":"Pascal Bruckner","influenced_by":"http://www.wikidata.org/entity/Q380443","influenced_byLabel":"Alain Finkielkraut"},{"item":"http://www.wikidata.org/entity/Q3296918","itemLabel":"John Anderson","influenced_by":"http://www.wikidata.org/entity/Q379900","influenced_byLabel":"Samuel Alexander"},{"item":"http://www.wikidata.org/entity/Q3592370","itemLabel":"Étienne Tassin","influenced_by":"http://www.wikidata.org/entity/Q381720","influenced_byLabel":"Jan Patočka"},{"item":"http://www.wikidata.org/entity/Q4266616","itemLabel":"Lev Lopatin","influenced_by":"http://www.wikidata.org/entity/Q382582","influenced_byLabel":"Maine de Biran"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q380256","influenced_byLabel":"Nikolay Lossky"},{"item":"http://www.wikidata.org/entity/Q8018864","itemLabel":"William Stoddart","influenced_by":"http://www.wikidata.org/entity/Q379589","influenced_byLabel":"Ananda Coomaraswamy"},{"item":"http://www.wikidata.org/entity/Q55197968","itemLabel":"Q55197968","influenced_by":"http://www.wikidata.org/entity/Q401543","influenced_byLabel":"Khoja Akhmet Yassawi"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q434346","influenced_byLabel":"Victor Cousin"},{"item":"http://www.wikidata.org/entity/Q13529","itemLabel":"Alfred Marshall","influenced_by":"http://www.wikidata.org/entity/Q433076","influenced_byLabel":"Henry Sidgwick"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q433741","influenced_byLabel":"Georges Canguilhem"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q444593","influenced_byLabel":"Gayle Rubin"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q443783","influenced_byLabel":"Richard Hooker"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q433741","influenced_byLabel":"Georges Canguilhem"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q433741","influenced_byLabel":"Georges Canguilhem"},{"item":"http://www.wikidata.org/entity/Q565381","itemLabel":"Paul Janet","influenced_by":"http://www.wikidata.org/entity/Q434346","influenced_byLabel":"Victor Cousin"},{"item":"http://www.wikidata.org/entity/Q3084343","itemLabel":"François Dagognet","influenced_by":"http://www.wikidata.org/entity/Q433741","influenced_byLabel":"Georges Canguilhem"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q433741","influenced_byLabel":"Georges Canguilhem"},{"item":"http://www.wikidata.org/entity/Q132524","itemLabel":"Ayn Rand","influenced_by":"http://www.wikidata.org/entity/Q460075","influenced_byLabel":"Isabel Paterson"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q454802","influenced_byLabel":"Ernesto Laclau"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q470914","influenced_byLabel":"Ibn Zuhr"},{"item":"http://www.wikidata.org/entity/Q102585","itemLabel":"Johann Gottlieb Fichte","influenced_by":"http://www.wikidata.org/entity/Q465763","influenced_byLabel":"Salomon Maimon"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q467668","influenced_byLabel":"Louis Lavelle"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q466026","influenced_byLabel":"Susanne Langer"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q463723","influenced_byLabel":"Nikolai Fyodorovich Fyodorov"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q461758","influenced_byLabel":"Lorraine Hansberry"},{"item":"http://www.wikidata.org/entity/Q551475","itemLabel":"Alexander Piatigorsky","influenced_by":"http://www.wikidata.org/entity/Q470453","influenced_byLabel":"Merab Mamardashvili"},{"item":"http://www.wikidata.org/entity/Q725642","itemLabel":"Clarence Irving Lewis","influenced_by":"http://www.wikidata.org/entity/Q471260","influenced_byLabel":"Josiah Royce"},{"item":"http://www.wikidata.org/entity/Q1064777","itemLabel":"Charles Hartshorne","influenced_by":"http://www.wikidata.org/entity/Q471260","influenced_byLabel":"Josiah Royce"},{"item":"http://www.wikidata.org/entity/Q2499944","itemLabel":"Abd al-Rahman al-Kawakibi","influenced_by":"http://www.wikidata.org/entity/Q471046","influenced_byLabel":"Rida Muhammad Rashid"},{"item":"http://www.wikidata.org/entity/Q3592370","itemLabel":"Étienne Tassin","influenced_by":"http://www.wikidata.org/entity/Q467470","influenced_byLabel":"Jacques Rancière"},{"item":"http://www.wikidata.org/entity/Q4112617","itemLabel":"Q4112617","influenced_by":"http://www.wikidata.org/entity/Q463723","influenced_byLabel":"Nikolai Fyodorovich Fyodorov"},{"item":"http://www.wikidata.org/entity/Q5515822","itemLabel":"Gabriel Rockhill","influenced_by":"http://www.wikidata.org/entity/Q467470","influenced_byLabel":"Jacques Rancière"},{"item":"http://www.wikidata.org/entity/Q6535374","itemLabel":"Levi Bryant","influenced_by":"http://www.wikidata.org/entity/Q467470","influenced_byLabel":"Jacques Rancière"},{"item":"http://www.wikidata.org/entity/Q85142","itemLabel":"Kurt Baier","influenced_by":"http://www.wikidata.org/entity/Q472676","influenced_byLabel":"Stephen Toulmin"},{"item":"http://www.wikidata.org/entity/Q171303","itemLabel":"Zeno of Citium","influenced_by":"http://www.wikidata.org/entity/Q485459","influenced_byLabel":"cynic"},{"item":"http://www.wikidata.org/entity/Q482708","itemLabel":"Ham Seok-heon","influenced_by":"http://www.wikidata.org/entity/Q485247","influenced_byLabel":"Uchimura Kanzō"},{"item":"http://www.wikidata.org/entity/Q3348646","itemLabel":"Abul Hasan Ali Hasani Nadwi","influenced_by":"http://www.wikidata.org/entity/Q484141","influenced_byLabel":"Muhammad Iqbalm"},{"item":"http://www.wikidata.org/entity/Q84186","itemLabel":"Ivan Illich","influenced_by":"http://www.wikidata.org/entity/Q496850","influenced_byLabel":"René Guénon"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q496850","influenced_byLabel":"René Guénon"},{"item":"http://www.wikidata.org/entity/Q123413","itemLabel":"Titus Burckhardt","influenced_by":"http://www.wikidata.org/entity/Q496850","influenced_byLabel":"René Guénon"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q511513","influenced_byLabel":"Jakob Johann von Uexküll"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q496850","influenced_byLabel":"René Guénon"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q496850","influenced_byLabel":"René Guénon"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q513448","influenced_byLabel":"Lucien Goldmann"},{"item":"http://www.wikidata.org/entity/Q540407","itemLabel":"Jean Hyppolite","influenced_by":"http://www.wikidata.org/entity/Q515633","influenced_byLabel":"Jean Cavaillès"},{"item":"http://www.wikidata.org/entity/Q2718078","itemLabel":"Tage Lindbom","influenced_by":"http://www.wikidata.org/entity/Q496850","influenced_byLabel":"René Guénon"},{"item":"http://www.wikidata.org/entity/Q3170848","itemLabel":"Jean Borella","influenced_by":"http://www.wikidata.org/entity/Q496850","influenced_byLabel":"René Guénon"},{"item":"http://www.wikidata.org/entity/Q3709773","itemLabel":"Wolfgang Smith","influenced_by":"http://www.wikidata.org/entity/Q496850","influenced_byLabel":"René Guénon"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q515633","influenced_byLabel":"Jean Cavaillès"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q528415","influenced_byLabel":"Hasdai Crescas"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q540407","influenced_byLabel":"Jean Hyppolite"},{"item":"http://www.wikidata.org/entity/Q235470","itemLabel":"Martha Nussbaum","influenced_by":"http://www.wikidata.org/entity/Q528159","influenced_byLabel":"Catharine MacKinnon"},{"item":"http://www.wikidata.org/entity/Q271809","itemLabel":"Proclus","influenced_by":"http://www.wikidata.org/entity/Q537304","influenced_byLabel":"Ploutarchos of Athens"},{"item":"http://www.wikidata.org/entity/Q559622","itemLabel":"Joseph Albo","influenced_by":"http://www.wikidata.org/entity/Q528415","influenced_byLabel":"Hasdai Crescas"},{"item":"http://www.wikidata.org/entity/Q2332520","itemLabel":"Damaris Masham","influenced_by":"http://www.wikidata.org/entity/Q528261","influenced_byLabel":"Ralph Cudworth"},{"item":"http://www.wikidata.org/entity/Q19962938","itemLabel":"Francisco Soler Grima","influenced_by":"http://www.wikidata.org/entity/Q520726","influenced_byLabel":"Julián Marías"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q559213","influenced_byLabel":"Thomas Sydenham"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q542090","influenced_byLabel":"Konstantin Leontiev"},{"item":"http://www.wikidata.org/entity/Q472676","itemLabel":"Stephen Toulmin","influenced_by":"http://www.wikidata.org/entity/Q553796","influenced_byLabel":"Norwood Russell Hanson"},{"item":"http://www.wikidata.org/entity/Q562952","itemLabel":"Michael Halliday","influenced_by":"http://www.wikidata.org/entity/Q550722","influenced_byLabel":"Vilém Mathesius"},{"item":"http://www.wikidata.org/entity/Q101638","itemLabel":"Mary Wollstonecraft","influenced_by":"http://www.wikidata.org/entity/Q561101","influenced_byLabel":"Richard Price"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q573120","influenced_byLabel":"Jean Wahl"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q592023","influenced_byLabel":"Herman Wirth"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q590420","influenced_byLabel":"V. A. Urechia"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q642420","influenced_byLabel":"Christ"},{"item":"http://www.wikidata.org/entity/Q126460","itemLabel":"Eugenio Coșeriu","influenced_by":"http://www.wikidata.org/entity/Q599238","influenced_byLabel":"Antonino Pagliaro"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q601475","influenced_byLabel":"Maurice de Gandillac"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q610240","influenced_byLabel":"Théodore Simon Jouffroy"},{"item":"http://www.wikidata.org/entity/Q3265723","itemLabel":"Lucien Sève","influenced_by":"http://www.wikidata.org/entity/Q601482","influenced_byLabel":"Georges Politzer"},{"item":"http://www.wikidata.org/entity/Q7297230","itemLabel":"Ray Brassier","influenced_by":"http://www.wikidata.org/entity/Q644620","influenced_byLabel":"Quentin Meillassoux"},{"item":"http://www.wikidata.org/entity/Q76422","itemLabel":"Ludwig Feuerbach","influenced_by":"http://www.wikidata.org/entity/Q651205","influenced_byLabel":"Sensualism"},{"item":"http://www.wikidata.org/entity/Q106265","itemLabel":"Norbert Bolz","influenced_by":"http://www.wikidata.org/entity/Q650151","influenced_byLabel":"Jacob Taubes"},{"item":"http://www.wikidata.org/entity/Q129504","itemLabel":"Arturo Ardao","influenced_by":"http://www.wikidata.org/entity/Q678242","influenced_byLabel":"Carlos Vaz Ferreira"},{"item":"http://www.wikidata.org/entity/Q159648","itemLabel":"Gianni Vattimo","influenced_by":"http://www.wikidata.org/entity/Q693290","influenced_byLabel":"Luigi Pareyson"},{"item":"http://www.wikidata.org/entity/Q184735","itemLabel":"Bernard Bolzano","influenced_by":"http://www.wikidata.org/entity/Q678982","influenced_byLabel":"Leibniz University Hannover"},{"item":"http://www.wikidata.org/entity/Q235134","itemLabel":"María Zambrano","influenced_by":"http://www.wikidata.org/entity/Q680632","influenced_byLabel":"Xavier Zubiri"},{"item":"http://www.wikidata.org/entity/Q264028","itemLabel":"John of Salisbury","influenced_by":"http://www.wikidata.org/entity/Q658109","influenced_byLabel":"Thierry of Chartres"},{"item":"http://www.wikidata.org/entity/Q3170848","itemLabel":"Jean Borella","influenced_by":"http://www.wikidata.org/entity/Q657488","influenced_byLabel":"perennial philosophy"},{"item":"http://www.wikidata.org/entity/Q3348646","itemLabel":"Abul Hasan Ali Hasani Nadwi","influenced_by":"http://www.wikidata.org/entity/Q659028","influenced_byLabel":"Muhammad Ilyas Kandhalawi"},{"item":"http://www.wikidata.org/entity/Q3709773","itemLabel":"Wolfgang Smith","influenced_by":"http://www.wikidata.org/entity/Q657488","influenced_byLabel":"perennial philosophy"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q694826","influenced_byLabel":"Tadeusz Stefan Zieliński"},{"item":"http://www.wikidata.org/entity/Q5935914","itemLabel":"Jorge Rivera Cruchaga","influenced_by":"http://www.wikidata.org/entity/Q680632","influenced_byLabel":"Xavier Zubiri"},{"item":"http://www.wikidata.org/entity/Q8006429","itemLabel":"William C. Wimsatt","influenced_by":"http://www.wikidata.org/entity/Q659265","influenced_byLabel":"Richard Lewontin"},{"item":"http://www.wikidata.org/entity/Q15458882","itemLabel":"Jacob Needleman","influenced_by":"http://www.wikidata.org/entity/Q657488","influenced_byLabel":"perennial philosophy"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q707787","influenced_byLabel":"Robert Filmer"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q707490","influenced_byLabel":"Jean-Marie Guyau"},{"item":"http://www.wikidata.org/entity/Q49325","itemLabel":"Albert Schweitzer","influenced_by":"http://www.wikidata.org/entity/Q706888","influenced_byLabel":"Hermann Samuel Reimarus"},{"item":"http://www.wikidata.org/entity/Q125879","itemLabel":"William Alston","influenced_by":"http://www.wikidata.org/entity/Q712462","influenced_byLabel":"Wilfrid Sellars"},{"item":"http://www.wikidata.org/entity/Q242616","itemLabel":"Patricia Churchland","influenced_by":"http://www.wikidata.org/entity/Q712462","influenced_byLabel":"Wilfrid Sellars"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q704649","influenced_byLabel":"Pierre Leroux"},{"item":"http://www.wikidata.org/entity/Q3707183","itemLabel":"Diego Fusaro","influenced_by":"http://www.wikidata.org/entity/Q707724","influenced_byLabel":"Costanzo Preve"},{"item":"http://www.wikidata.org/entity/Q7297230","itemLabel":"Ray Brassier","influenced_by":"http://www.wikidata.org/entity/Q712462","influenced_byLabel":"Wilfrid Sellars"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q713261","influenced_byLabel":"Petr Chelčický"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q725642","influenced_byLabel":"Clarence Irving Lewis"},{"item":"http://www.wikidata.org/entity/Q8070379","itemLabel":"Zhang Xuecheng","influenced_by":"http://www.wikidata.org/entity/Q714369","influenced_byLabel":"Dai Zhen"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q719228","influenced_byLabel":"Ogden Nash"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q733578","influenced_byLabel":"Ahmad al-Alawi"},{"item":"http://www.wikidata.org/entity/Q181707","itemLabel":"Charles Fourier","influenced_by":"http://www.wikidata.org/entity/Q732729","influenced_byLabel":"Nicolas-Edme Rétif"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q733578","influenced_byLabel":"Ahmad al-Alawi"},{"item":"http://www.wikidata.org/entity/Q4017966","itemLabel":"Walter Maturi","influenced_by":"http://www.wikidata.org/entity/Q730889","influenced_byLabel":"Gaetano Salvemini"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q733188","influenced_byLabel":"Gustave Lanson"},{"item":"http://www.wikidata.org/entity/Q2054","itemLabel":"Seneca","influenced_by":"http://www.wikidata.org/entity/Q780789","influenced_byLabel":"Attalus"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q778109","influenced_byLabel":"George Frederick Stout"},{"item":"http://www.wikidata.org/entity/Q706525","itemLabel":"Mario Tronti","influenced_by":"http://www.wikidata.org/entity/Q786572","influenced_byLabel":"Galvano Della Volpe"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q800136","influenced_byLabel":"Gustav Shpet"},{"item":"http://www.wikidata.org/entity/Q1680038","itemLabel":"James Black Baillie","influenced_by":"http://www.wikidata.org/entity/Q822329","influenced_byLabel":"Bernard Bosanquet"},{"item":"http://www.wikidata.org/entity/Q3014631","itemLabel":"Daniel Ross","influenced_by":"http://www.wikidata.org/entity/Q822727","influenced_byLabel":"Bernard Stiegler"},{"item":"http://www.wikidata.org/entity/Q517390","itemLabel":"Chantal Delsol","influenced_by":"http://www.wikidata.org/entity/Q854807","influenced_byLabel":"Christian philosophy"},{"item":"http://www.wikidata.org/entity/Q5371547","itemLabel":"Emile Dantinne","influenced_by":"http://www.wikidata.org/entity/Q841173","influenced_byLabel":"Christian Rosenkreuz"},{"item":"http://www.wikidata.org/entity/Q7297230","itemLabel":"Ray Brassier","influenced_by":"http://www.wikidata.org/entity/Q852886","influenced_byLabel":"François Laruelle"},{"item":"http://www.wikidata.org/entity/Q505528","itemLabel":"Harold Innis","influenced_by":"http://www.wikidata.org/entity/Q919081","influenced_byLabel":"Robert Ezra Park"},{"item":"http://www.wikidata.org/entity/Q47208","itemLabel":"Louis-Claude de Saint-Martin","influenced_by":"http://www.wikidata.org/entity/Q926616","influenced_byLabel":"Martinez de Pasqually"},{"item":"http://www.wikidata.org/entity/Q76526","itemLabel":"E. F. Schumacher","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q84186","itemLabel":"Ivan Illich","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q123413","itemLabel":"Titus Burckhardt","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q1083378","itemLabel":"Carlo Lottieri","influenced_by":"http://www.wikidata.org/entity/Q940847","influenced_byLabel":"Bruno Leoni"},{"item":"http://www.wikidata.org/entity/Q2114825","itemLabel":"Marco Pallis","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q2718078","itemLabel":"Tage Lindbom","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q3170848","itemLabel":"Jean Borella","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q3709773","itemLabel":"Wolfgang Smith","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q5950051","itemLabel":"Huston Smith","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q8018864","itemLabel":"William Stoddart","influenced_by":"http://www.wikidata.org/entity/Q933507","influenced_byLabel":"Traditionalist School"},{"item":"http://www.wikidata.org/entity/Q60176580","itemLabel":"Henri Delaage","influenced_by":"http://www.wikidata.org/entity/Q926616","influenced_byLabel":"Martinez de Pasqually"},{"item":"http://www.wikidata.org/entity/Q80322726","itemLabel":"Mircea Ciobanu","influenced_by":"http://www.wikidata.org/entity/Q956913","influenced_byLabel":"Petre Țuțea"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q969370","influenced_byLabel":"Domenico Maria Novara da Ferrara"},{"item":"http://www.wikidata.org/entity/Q7060","itemLabel":"Michel Onfray","influenced_by":"http://www.wikidata.org/entity/Q972152","influenced_byLabel":"Pierre Hadot"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q972152","influenced_byLabel":"Pierre Hadot"},{"item":"http://www.wikidata.org/entity/Q937610","itemLabel":"Edward Abbey","influenced_by":"http://www.wikidata.org/entity/Q971382","influenced_byLabel":"Aldo Leopold"},{"item":"http://www.wikidata.org/entity/Q1173486","itemLabel":"David Anhaght","influenced_by":"http://www.wikidata.org/entity/Q974775","influenced_byLabel":"Olympiodorus the Younger"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q981959","influenced_byLabel":"Semyon Frank"},{"item":"http://www.wikidata.org/entity/Q4408686","itemLabel":"Beatriz Sarlo","influenced_by":"http://www.wikidata.org/entity/Q965392","influenced_byLabel":"David Viñas"},{"item":"http://www.wikidata.org/entity/Q80322726","itemLabel":"Mircea Ciobanu","influenced_by":"http://www.wikidata.org/entity/Q983262","influenced_byLabel":"Corneliu Baba"},{"item":"http://www.wikidata.org/entity/Q9364","itemLabel":"Jean-Paul Sartre","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q50020","influenced_byLabel":"John Stuart Mill"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q44845","itemLabel":"Peter Sloterdijk","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q57255","itemLabel":"Hans Jonas","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q58853","itemLabel":"Karl-Otto Apel","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q60080","itemLabel":"Wilhelm Dilthey","influenced_by":"http://www.wikidata.org/entity/Q50020","influenced_byLabel":"John Stuart Mill"},{"item":"http://www.wikidata.org/entity/Q61271","itemLabel":"Reinhart Koselleck","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q72074","itemLabel":"Oskar Becker","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q77144","itemLabel":"Leo Strauss","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q48226","influenced_byLabel":"Ralph Waldo Emerson"},{"item":"http://www.wikidata.org/entity/Q125249","itemLabel":"William James","influenced_by":"http://www.wikidata.org/entity/Q48226","influenced_byLabel":"Ralph Waldo Emerson"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q131149","itemLabel":"Henry David Thoreau","influenced_by":"http://www.wikidata.org/entity/Q48226","influenced_byLabel":"Ralph Waldo Emerson"},{"item":"http://www.wikidata.org/entity/Q153034","itemLabel":"Emmanuel Levinas","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q189597","itemLabel":"Philo of Alexandria","influenced_by":"http://www.wikidata.org/entity/Q48235","influenced_byLabel":"stoicism"},{"item":"http://www.wikidata.org/entity/Q193257","itemLabel":"Jean-François Lyotard","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q212639","itemLabel":"Maurice Merleau-Ponty","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q215258","itemLabel":"Richard Rorty","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q235470","itemLabel":"Martha Nussbaum","influenced_by":"http://www.wikidata.org/entity/Q50020","influenced_byLabel":"John Stuart Mill"},{"item":"http://www.wikidata.org/entity/Q257953","itemLabel":"Margaret Fuller","influenced_by":"http://www.wikidata.org/entity/Q48226","influenced_byLabel":"Ralph Waldo Emerson"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q642708","itemLabel":"Giulio Giorello","influenced_by":"http://www.wikidata.org/entity/Q50020","influenced_byLabel":"John Stuart Mill"},{"item":"http://www.wikidata.org/entity/Q664619","itemLabel":"Rémi Brague","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q693290","itemLabel":"Luigi Pareyson","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q971585","itemLabel":"Hubert Dreyfus","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q983648","itemLabel":"Kostas Axelos","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q48226","influenced_byLabel":"Ralph Waldo Emerson"},{"item":"http://www.wikidata.org/entity/Q1984757","itemLabel":"Barbara Cassin","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q2200215","itemLabel":"R.F. Beerling","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q2797629","itemLabel":"Jones Very","influenced_by":"http://www.wikidata.org/entity/Q48226","influenced_byLabel":"Ralph Waldo Emerson"},{"item":"http://www.wikidata.org/entity/Q2939300","itemLabel":"Carlos Astrada","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q3453681","itemLabel":"Ruwen Ogien","influenced_by":"http://www.wikidata.org/entity/Q50020","influenced_byLabel":"John Stuart Mill"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q5935914","itemLabel":"Jorge Rivera Cruchaga","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q19962938","itemLabel":"Francisco Soler Grima","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q60526193","itemLabel":"J. Hunter Guthrie","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q47154","influenced_byLabel":"Lucretius"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q46599","influenced_byLabel":"Mikhail Lermontov"},{"item":"http://www.wikidata.org/entity/Q364975","itemLabel":"Richard Cantillon","influenced_by":"http://www.wikidata.org/entity/Q47434","influenced_byLabel":"Edmund Halley"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q46599","influenced_byLabel":"Mikhail Lermontov"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q46420","influenced_byLabel":"Ibn Arabi"},{"item":"http://www.wikidata.org/entity/Q5371547","itemLabel":"Emile Dantinne","influenced_by":"http://www.wikidata.org/entity/Q47208","influenced_byLabel":"Louis-Claude de Saint-Martin"},{"item":"http://www.wikidata.org/entity/Q60176580","itemLabel":"Henri Delaage","influenced_by":"http://www.wikidata.org/entity/Q47208","influenced_byLabel":"Louis-Claude de Saint-Martin"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q140694","influenced_byLabel":"Alexis de Tocqueville"},{"item":"http://www.wikidata.org/entity/Q61078","itemLabel":"Walter Benjamin","influenced_by":"http://www.wikidata.org/entity/Q151523","influenced_byLabel":"György Lukács"},{"item":"http://www.wikidata.org/entity/Q93996","itemLabel":"Ernst Mach","influenced_by":"http://www.wikidata.org/entity/Q144535","influenced_byLabel":"Herbert Spencer"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q140694","influenced_byLabel":"Alexis de Tocqueville"},{"item":"http://www.wikidata.org/entity/Q313509","itemLabel":"Bernard-Henri Lévy","influenced_by":"http://www.wikidata.org/entity/Q151164","influenced_byLabel":"André Malraux"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q151523","influenced_byLabel":"György Lukács"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q140694","influenced_byLabel":"Alexis de Tocqueville"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q140694","influenced_byLabel":"Alexis de Tocqueville"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q140694","influenced_byLabel":"Alexis de Tocqueville"},{"item":"http://www.wikidata.org/entity/Q742412","itemLabel":"György Márkus","influenced_by":"http://www.wikidata.org/entity/Q151523","influenced_byLabel":"György Lukács"},{"item":"http://www.wikidata.org/entity/Q3513783","itemLabel":"Francis Ellingwood Abbot","influenced_by":"http://www.wikidata.org/entity/Q144535","influenced_byLabel":"Herbert Spencer"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q151722","influenced_byLabel":"Nicolaus Steno"},{"item":"http://www.wikidata.org/entity/Q9364","itemLabel":"Jean-Paul Sartre","influenced_by":"http://www.wikidata.org/entity/Q151820","influenced_byLabel":"Louis-Ferdinand Céline"},{"item":"http://www.wikidata.org/entity/Q9364","itemLabel":"Jean-Paul Sartre","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q84186","itemLabel":"Ivan Illich","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q152388","influenced_byLabel":"Theodor W. Adorno"},{"item":"http://www.wikidata.org/entity/Q313509","itemLabel":"Bernard-Henri Lévy","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q152388","influenced_byLabel":"Theodor W. Adorno"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q516614","itemLabel":"Bracha L. Ettinger","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q517390","itemLabel":"Chantal Delsol","influenced_by":"http://www.wikidata.org/entity/Q153020","influenced_byLabel":"José Ortega y Gasset"},{"item":"http://www.wikidata.org/entity/Q923743","itemLabel":"Simon Critchley","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q153020","influenced_byLabel":"José Ortega y Gasset"},{"item":"http://www.wikidata.org/entity/Q6957555","itemLabel":"Nader El-Bizri","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q7518850","itemLabel":"Simon Glendinning","influenced_by":"http://www.wikidata.org/entity/Q153034","influenced_byLabel":"Emmanuel Levinas"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q152388","influenced_byLabel":"Theodor W. Adorno"},{"item":"http://www.wikidata.org/entity/Q19962938","itemLabel":"Francisco Soler Grima","influenced_by":"http://www.wikidata.org/entity/Q153020","influenced_byLabel":"José Ortega y Gasset"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q154959","influenced_byLabel":"Hugo Grotius"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q154751","influenced_byLabel":"Nicholas of Cusa"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q154751","influenced_byLabel":"Nicholas of Cusa"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q154959","influenced_byLabel":"Hugo Grotius"},{"item":"http://www.wikidata.org/entity/Q36330","itemLabel":"Giordano Bruno","influenced_by":"http://www.wikidata.org/entity/Q154751","influenced_byLabel":"Nicholas of Cusa"},{"item":"http://www.wikidata.org/entity/Q37621","itemLabel":"Thomas Hobbes","influenced_by":"http://www.wikidata.org/entity/Q154959","influenced_byLabel":"Hugo Grotius"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q154145","influenced_byLabel":"Gabriel Marcel"},{"item":"http://www.wikidata.org/entity/Q2332520","itemLabel":"Damaris Masham","influenced_by":"http://www.wikidata.org/entity/Q154751","influenced_byLabel":"Nicholas of Cusa"},{"item":"http://www.wikidata.org/entity/Q317880","itemLabel":"Edgar Morin","influenced_by":"http://www.wikidata.org/entity/Q158030","influenced_byLabel":"Cornelius Castoriadis"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q157155","influenced_byLabel":"Ernest Renan"},{"item":"http://www.wikidata.org/entity/Q572741","itemLabel":"Kwame Anthony Appiah","influenced_by":"http://www.wikidata.org/entity/Q158060","influenced_byLabel":"W.E.B. Du Bois"},{"item":"http://www.wikidata.org/entity/Q3182114","itemLabel":"John Moore","influenced_by":"http://www.wikidata.org/entity/Q159876","influenced_byLabel":"Julia Kristeva"},{"item":"http://www.wikidata.org/entity/Q3592370","itemLabel":"Étienne Tassin","influenced_by":"http://www.wikidata.org/entity/Q157309","influenced_byLabel":"Simone Weil"},{"item":"http://www.wikidata.org/entity/Q5515822","itemLabel":"Gabriel Rockhill","influenced_by":"http://www.wikidata.org/entity/Q158030","influenced_byLabel":"Cornelius Castoriadis"},{"item":"http://www.wikidata.org/entity/Q18692704","itemLabel":"Bérénice Levet","influenced_by":"http://www.wikidata.org/entity/Q157309","influenced_byLabel":"Simone Weil"},{"item":"http://www.wikidata.org/entity/Q171677","itemLabel":"Roger Bacon","influenced_by":"http://www.wikidata.org/entity/Q325650","influenced_byLabel":"William of Sherwood"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q332535","influenced_byLabel":"Sergei Bulgakov"},{"item":"http://www.wikidata.org/entity/Q213393","itemLabel":"John Wesley","influenced_by":"http://www.wikidata.org/entity/Q328804","influenced_byLabel":"John the Evangelist"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q335384","influenced_byLabel":"Gustavo Gutiérrez"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q326459","influenced_byLabel":"Dmitry Merezhkovsky"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q334965","influenced_byLabel":"Charles Péguy"},{"item":"http://www.wikidata.org/entity/Q551761","itemLabel":"Jean Guitton","influenced_by":"http://www.wikidata.org/entity/Q332535","influenced_byLabel":"Sergei Bulgakov"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q348408","influenced_byLabel":"Martianus Capella"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q352465","influenced_byLabel":"Félix Guattari"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q347362","influenced_byLabel":"Fredric Jameson"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q342730","influenced_byLabel":"Antonio Labriola"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q342646","influenced_byLabel":"Michael Dummett"},{"item":"http://www.wikidata.org/entity/Q310341","itemLabel":"Antonio Negri","influenced_by":"http://www.wikidata.org/entity/Q352465","influenced_byLabel":"Félix Guattari"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q342646","influenced_byLabel":"Michael Dummett"},{"item":"http://www.wikidata.org/entity/Q345815","itemLabel":"Pierre Laromiguière","influenced_by":"http://www.wikidata.org/entity/Q351691","influenced_byLabel":"Antoine Destutt de Tracy"},{"item":"http://www.wikidata.org/entity/Q456301","itemLabel":"Chaïm Perelman","influenced_by":"http://www.wikidata.org/entity/Q351318","influenced_byLabel":"Eugène Dupréel"},{"item":"http://www.wikidata.org/entity/Q516614","itemLabel":"Bracha L. Ettinger","influenced_by":"http://www.wikidata.org/entity/Q352465","influenced_byLabel":"Félix Guattari"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q342564","influenced_byLabel":"Titu Maiorescu"},{"item":"http://www.wikidata.org/entity/Q766723","itemLabel":"Rebecca Goldstein","influenced_by":"http://www.wikidata.org/entity/Q350239","influenced_byLabel":"Thomas Nagel"},{"item":"http://www.wikidata.org/entity/Q912704","itemLabel":"Brian Massumi","influenced_by":"http://www.wikidata.org/entity/Q352465","influenced_byLabel":"Félix Guattari"},{"item":"http://www.wikidata.org/entity/Q918655","itemLabel":"Michael Hardt","influenced_by":"http://www.wikidata.org/entity/Q352465","influenced_byLabel":"Félix Guattari"},{"item":"http://www.wikidata.org/entity/Q1083378","itemLabel":"Carlo Lottieri","influenced_by":"http://www.wikidata.org/entity/Q351527","influenced_byLabel":"Gaetano Mosca"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q336769","influenced_byLabel":"Pavel Florensky"},{"item":"http://www.wikidata.org/entity/Q1680038","itemLabel":"James Black Baillie","influenced_by":"http://www.wikidata.org/entity/Q350236","influenced_byLabel":"F. H. Bradley"},{"item":"http://www.wikidata.org/entity/Q3502976","itemLabel":"Suely Rolnik","influenced_by":"http://www.wikidata.org/entity/Q352465","influenced_byLabel":"Félix Guattari"},{"item":"http://www.wikidata.org/entity/Q3763746","itemLabel":"Éric Alliez","influenced_by":"http://www.wikidata.org/entity/Q352465","influenced_byLabel":"Félix Guattari"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q342564","influenced_byLabel":"Titu Maiorescu"},{"item":"http://www.wikidata.org/entity/Q6004524","itemLabel":"Reza Negarestani","influenced_by":"http://www.wikidata.org/entity/Q352465","influenced_byLabel":"Félix Guattari"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q355245","influenced_byLabel":"Henry George"},{"item":"http://www.wikidata.org/entity/Q2054","itemLabel":"Seneca","influenced_by":"http://www.wikidata.org/entity/Q363375","influenced_byLabel":"Publilius Syrus"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q355245","influenced_byLabel":"Henry George"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q360512","influenced_byLabel":"Baltasar Gracián"},{"item":"http://www.wikidata.org/entity/Q11903","itemLabel":"Hypatia","influenced_by":"http://www.wikidata.org/entity/Q354384","influenced_byLabel":"Theon of Alexandria"},{"item":"http://www.wikidata.org/entity/Q76326","itemLabel":"Dietrich Bonhoeffer","influenced_by":"http://www.wikidata.org/entity/Q358561","influenced_byLabel":"Reinhold Niebuhr"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q358497","influenced_byLabel":"Aleksey Khomyakov"},{"item":"http://www.wikidata.org/entity/Q240851","itemLabel":"Gayatri Chakravorty Spivak","influenced_by":"http://www.wikidata.org/entity/Q353754","influenced_byLabel":"Paul de Man"},{"item":"http://www.wikidata.org/entity/Q551475","itemLabel":"Alexander Piatigorsky","influenced_by":"http://www.wikidata.org/entity/Q360084","influenced_byLabel":"Yuri Lotman"},{"item":"http://www.wikidata.org/entity/Q6233842","itemLabel":"John Frame","influenced_by":"http://www.wikidata.org/entity/Q355201","influenced_byLabel":"Alvin Plantinga"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q999259","influenced_byLabel":"ancient Greek philosophy"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q1042892","influenced_byLabel":"James Barry"},{"item":"http://www.wikidata.org/entity/Q313073","itemLabel":"Jonathan Edwards","influenced_by":"http://www.wikidata.org/entity/Q1028344","influenced_byLabel":"Cambridge Platonists"},{"item":"http://www.wikidata.org/entity/Q335112","itemLabel":"Anthony Ashley-Cooper, 3rd Earl of Shaftesbury","influenced_by":"http://www.wikidata.org/entity/Q1028344","influenced_byLabel":"Cambridge Platonists"},{"item":"http://www.wikidata.org/entity/Q379900","itemLabel":"Samuel Alexander","influenced_by":"http://www.wikidata.org/entity/Q1129523","influenced_byLabel":"C. Lloyd Morgan"},{"item":"http://www.wikidata.org/entity/Q971585","itemLabel":"Hubert Dreyfus","influenced_by":"http://www.wikidata.org/entity/Q1157217","influenced_byLabel":"Dagfinn Føllesdal"},{"item":"http://www.wikidata.org/entity/Q4759606","itemLabel":"Andrzej Grzegorczyk","influenced_by":"http://www.wikidata.org/entity/Q1149599","influenced_byLabel":"Czesław Białobrzeski"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q1127836","influenced_byLabel":"Constantin Dobrogeanu-Gherea"},{"item":"http://www.wikidata.org/entity/Q6233842","itemLabel":"John Frame","influenced_by":"http://www.wikidata.org/entity/Q1133986","influenced_byLabel":"Cornelius van Til"},{"item":"http://www.wikidata.org/entity/Q9061","itemLabel":"Karl Marx","influenced_by":"http://www.wikidata.org/entity/Q1170769","influenced_byLabel":"The Essence of Christianity"},{"item":"http://www.wikidata.org/entity/Q9441","itemLabel":"Gautama Buddha","influenced_by":"http://www.wikidata.org/entity/Q1227131","influenced_byLabel":"Dīpankara Buddha"},{"item":"http://www.wikidata.org/entity/Q34787","itemLabel":"Friedrich Engels","influenced_by":"http://www.wikidata.org/entity/Q1170769","influenced_byLabel":"The Essence of Christianity"},{"item":"http://www.wikidata.org/entity/Q452091","itemLabel":"William Whiston","influenced_by":"http://www.wikidata.org/entity/Q1174600","influenced_byLabel":"David Gregory"},{"item":"http://www.wikidata.org/entity/Q4131970","itemLabel":"Piama Gaïdenko","influenced_by":"http://www.wikidata.org/entity/Q1248105","influenced_byLabel":"Aleksei Losev"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q1336951","influenced_byLabel":"Emil Utitz"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q1345582","influenced_byLabel":"Gilbert Simondon"},{"item":"http://www.wikidata.org/entity/Q599197","itemLabel":"Florian Znaniecki","influenced_by":"http://www.wikidata.org/entity/Q1323100","influenced_byLabel":"William Isaac Thomas"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q1345582","influenced_byLabel":"Gilbert Simondon"},{"item":"http://www.wikidata.org/entity/Q13529","itemLabel":"Alfred Marshall","influenced_by":"http://www.wikidata.org/entity/Q1353362","influenced_byLabel":"Jules Dupuit"},{"item":"http://www.wikidata.org/entity/Q41590","itemLabel":"Mircea Eliade","influenced_by":"http://www.wikidata.org/entity/Q1380594","influenced_byLabel":"Nae Ionescu"},{"item":"http://www.wikidata.org/entity/Q271809","itemLabel":"Proclus","influenced_by":"http://www.wikidata.org/entity/Q1373037","influenced_byLabel":"Syrianus"},{"item":"http://www.wikidata.org/entity/Q3398798","itemLabel":"Richard I. Aaron","influenced_by":"http://www.wikidata.org/entity/Q1364954","influenced_byLabel":"William David Ross"},{"item":"http://www.wikidata.org/entity/Q3453681","itemLabel":"Ruwen Ogien","influenced_by":"http://www.wikidata.org/entity/Q1384603","influenced_byLabel":"Jacques Bouveresse"},{"item":"http://www.wikidata.org/entity/Q6143915","itemLabel":"James T. Cushing","influenced_by":"http://www.wikidata.org/entity/Q1370686","influenced_byLabel":"Larry Laudan"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q1479519","influenced_byLabel":"Félix Ravaisson-Mollien"},{"item":"http://www.wikidata.org/entity/Q2303850","itemLabel":"Jules Lachelier","influenced_by":"http://www.wikidata.org/entity/Q1479519","influenced_byLabel":"Félix Ravaisson-Mollien"},{"item":"http://www.wikidata.org/entity/Q3398798","itemLabel":"Richard I. Aaron","influenced_by":"http://www.wikidata.org/entity/Q1423151","influenced_byLabel":"A. C. Ewing"},{"item":"http://www.wikidata.org/entity/Q5628058","itemLabel":"H. B. Acton","influenced_by":"http://www.wikidata.org/entity/Q1447724","influenced_byLabel":"John Niemeyer Findlay"},{"item":"http://www.wikidata.org/entity/Q215022","itemLabel":"Arthur Eddington","influenced_by":"http://www.wikidata.org/entity/Q1627897","influenced_byLabel":"Horace Lamb"},{"item":"http://www.wikidata.org/entity/Q5026527","itemLabel":"Camil Mureșanu","influenced_by":"http://www.wikidata.org/entity/Q1546359","influenced_byLabel":"Greek catholic church"},{"item":"http://www.wikidata.org/entity/Q158060","itemLabel":"W.E.B. Du Bois","influenced_by":"http://www.wikidata.org/entity/Q1766103","influenced_byLabel":"Alexander Crummell"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q1685021","influenced_byLabel":"Jean Marc Ela"},{"item":"http://www.wikidata.org/entity/Q517390","itemLabel":"Chantal Delsol","influenced_by":"http://www.wikidata.org/entity/Q1712243","influenced_byLabel":"Julien Freund"},{"item":"http://www.wikidata.org/entity/Q229264","itemLabel":"Georges-Louis Leclerc, Comte de Buffon","influenced_by":"http://www.wikidata.org/entity/Q1986444","influenced_byLabel":"Nicolas Antoine Boulanger"},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q2010955","influenced_byLabel":"Mulla Sadra"},{"item":"http://www.wikidata.org/entity/Q551475","itemLabel":"Alexander Piatigorsky","influenced_by":"http://www.wikidata.org/entity/Q1968548","influenced_byLabel":"Bidia Dandaron"},{"item":"http://www.wikidata.org/entity/Q4799527","itemLabel":"Arthur Linton Corbin","influenced_by":"http://www.wikidata.org/entity/Q2072796","influenced_byLabel":"Christopher Columbus Langdell"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q2332520","influenced_byLabel":"Damaris Masham"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q2303850","influenced_byLabel":"Jules Lachelier"},{"item":"http://www.wikidata.org/entity/Q335112","itemLabel":"Anthony Ashley-Cooper, 3rd Earl of Shaftesbury","influenced_by":"http://www.wikidata.org/entity/Q2332520","influenced_byLabel":"Damaris Masham"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q2389145","influenced_byLabel":"Bogdan Petriceicu Hasdeu"},{"item":"http://www.wikidata.org/entity/Q192207","itemLabel":"Aurobindo Ghosh","influenced_by":"http://www.wikidata.org/entity/Q2512051","influenced_byLabel":"Vedanta"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q2493613","influenced_byLabel":"Ahmad Sirhindi"},{"item":"http://www.wikidata.org/entity/Q3182114","itemLabel":"John Moore","influenced_by":"http://www.wikidata.org/entity/Q2458048","influenced_byLabel":"Fredy Perlman"},{"item":"http://www.wikidata.org/entity/Q5950051","itemLabel":"Huston Smith","influenced_by":"http://www.wikidata.org/entity/Q2512051","influenced_byLabel":"Vedanta"},{"item":"http://www.wikidata.org/entity/Q46420","itemLabel":"Ibn Arabi","influenced_by":"http://www.wikidata.org/entity/Q2719051","influenced_byLabel":"Ibn Sab'in"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q2716613","influenced_byLabel":"Ferdinand Alquié"},{"item":"http://www.wikidata.org/entity/Q3035015","itemLabel":"Dominique Bourg","influenced_by":"http://www.wikidata.org/entity/Q2714332","influenced_byLabel":"Phenomenology of Perception"},{"item":"http://www.wikidata.org/entity/Q20004312","itemLabel":"Jordi Graupera i Garcia-Milà","influenced_by":"http://www.wikidata.org/entity/Q2707309","influenced_byLabel":"Richard J. Bernstein"},{"item":"http://www.wikidata.org/entity/Q101638","itemLabel":"Mary Wollstonecraft","influenced_by":"http://www.wikidata.org/entity/Q3047162","influenced_byLabel":"Joseph Johnson"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q3063591","influenced_byLabel":"Fabien Eboussi Boulaga"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q3059990","influenced_byLabel":"Eugène Lerminier"},{"item":"http://www.wikidata.org/entity/Q38481872","itemLabel":"Yves Bonnardel","influenced_by":"http://www.wikidata.org/entity/Q2941824","influenced_byLabel":"Catherine Baker"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q3170058","influenced_byLabel":"Jean-Toussaint Desanti"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q3288822","influenced_byLabel":"Marcel Conche"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q3188708","influenced_byLabel":"Jules Lagneau"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q3165457","influenced_byLabel":"Jean-François Bayart"},{"item":"http://www.wikidata.org/entity/Q456301","itemLabel":"Chaïm Perelman","influenced_by":"http://www.wikidata.org/entity/Q3288643","influenced_byLabel":"Marcel Barzin"},{"item":"http://www.wikidata.org/entity/Q517390","itemLabel":"Chantal Delsol","influenced_by":"http://www.wikidata.org/entity/Q3311076","influenced_byLabel":"Michel Villey"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q3124002","influenced_byLabel":"Gérard Granel"},{"item":"http://www.wikidata.org/entity/Q1173590","itemLabel":"David Malet Armstrong","influenced_by":"http://www.wikidata.org/entity/Q3296918","influenced_byLabel":"John Anderson"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q3478100","influenced_byLabel":"Wasil ibn Ata"},{"item":"http://www.wikidata.org/entity/Q323245","itemLabel":"Antoine Augustin Cournot","influenced_by":"http://www.wikidata.org/entity/Q3339958","influenced_byLabel":"Nicolas-François Canard"},{"item":"http://www.wikidata.org/entity/Q352465","itemLabel":"Félix Guattari","influenced_by":"http://www.wikidata.org/entity/Q3502976","influenced_byLabel":"Suely Rolnik"},{"item":"http://www.wikidata.org/entity/Q861595","itemLabel":"François Gény","influenced_by":"http://www.wikidata.org/entity/Q3421137","influenced_byLabel":"Raymond Saleilles"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q3525030","influenced_byLabel":"Thomas Davidson"},{"item":"http://www.wikidata.org/entity/Q3398798","itemLabel":"Richard I. Aaron","influenced_by":"http://www.wikidata.org/entity/Q3498726","influenced_byLabel":"Harold Arthur Prichard"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q3595922","influenced_byLabel":"Thomas Walker Arnold"},{"item":"http://www.wikidata.org/entity/Q947456","itemLabel":"Sidney Hook","influenced_by":"http://www.wikidata.org/entity/Q3863186","influenced_byLabel":"Morris Raphael Cohen"},{"item":"http://www.wikidata.org/entity/Q972869","itemLabel":"Estanislao Zuleta","influenced_by":"http://www.wikidata.org/entity/Q3850939","influenced_byLabel":"Fernando González"},{"item":"http://www.wikidata.org/entity/Q1680038","itemLabel":"James Black Baillie","influenced_by":"http://www.wikidata.org/entity/Q3817456","influenced_byLabel":"Andrew Seth Pringle-Pattison"},{"item":"http://www.wikidata.org/entity/Q3398798","itemLabel":"Richard I. Aaron","influenced_by":"http://www.wikidata.org/entity/Q3817476","influenced_byLabel":"John Cook Wilson"},{"item":"http://www.wikidata.org/entity/Q4017966","itemLabel":"Walter Maturi","influenced_by":"http://www.wikidata.org/entity/Q3764859","influenced_byLabel":"Gioacchino Volpe"},{"item":"http://www.wikidata.org/entity/Q4444882","itemLabel":"V. S.  Stepin","influenced_by":"http://www.wikidata.org/entity/Q3737203","influenced_byLabel":"Georgy Shchedrovitsky"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q3588560","influenced_byLabel":"Émile Hennequin"},{"item":"http://www.wikidata.org/entity/Q96276386","itemLabel":"Carmen Cozma","influenced_by":"http://www.wikidata.org/entity/Q4467048","influenced_byLabel":"Anna-Teresa Tymieniecka"},{"item":"http://www.wikidata.org/entity/Q97384440","itemLabel":"Marlies de Munck","influenced_by":"http://www.wikidata.org/entity/Q4153311","influenced_byLabel":"Lydia Goehr"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q4953061","influenced_byLabel":"Božidar Debenjak"},{"item":"http://www.wikidata.org/entity/Q1680038","itemLabel":"James Black Baillie","influenced_by":"http://www.wikidata.org/entity/Q4718531","influenced_byLabel":"Alexander Campbell Fraser"},{"item":"http://www.wikidata.org/entity/Q4765569","itemLabel":"Anita L. Allen","influenced_by":"http://www.wikidata.org/entity/Q4939864","influenced_byLabel":"Sissela Bok"},{"item":"http://www.wikidata.org/entity/Q16976772","itemLabel":"Lluís Carreras i Mas","influenced_by":"http://www.wikidata.org/entity/Q4893825","influenced_byLabel":"Josep Torras i Bages"},{"item":"http://www.wikidata.org/entity/Q2915527","itemLabel":"Monroe Beardsley","influenced_by":"http://www.wikidata.org/entity/Q5342062","influenced_byLabel":"Edward Bullough"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q5609051","influenced_byLabel":"Grigore Tocilescu"},{"item":"http://www.wikidata.org/entity/Q1196186","itemLabel":"John Shelby Spong","influenced_by":"http://www.wikidata.org/entity/Q5893298","influenced_byLabel":"Honest to God"},{"item":"http://www.wikidata.org/entity/Q1680038","itemLabel":"James Black Baillie","influenced_by":"http://www.wikidata.org/entity/Q6129301","influenced_byLabel":"James Balfour"},{"item":"http://www.wikidata.org/entity/Q6233842","itemLabel":"John Frame","influenced_by":"http://www.wikidata.org/entity/Q5584986","influenced_byLabel":"Gordon Clark"},{"item":"http://www.wikidata.org/entity/Q24064055","itemLabel":"Rafael Ángel Herra","influenced_by":"http://www.wikidata.org/entity/Q5784486","influenced_byLabel":"Constantino Láscaris Comneno"},{"item":"http://www.wikidata.org/entity/Q333922","itemLabel":"William Whewell","influenced_by":"http://www.wikidata.org/entity/Q6235869","influenced_byLabel":"John Gough"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q6456452","influenced_byLabel":"L. Frank"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q7322195","influenced_byLabel":"Riazuddin"},{"item":"http://www.wikidata.org/entity/Q155845","itemLabel":"Chinua Achebe","influenced_by":"http://www.wikidata.org/entity/Q7081956","influenced_byLabel":"Okey Ndibe"},{"item":"http://www.wikidata.org/entity/Q1680038","itemLabel":"James Black Baillie","influenced_by":"http://www.wikidata.org/entity/Q7519803","influenced_byLabel":"Simon Somerville Laurie"},{"item":"http://www.wikidata.org/entity/Q4147967","itemLabel":"Iain Hamilton Grant","influenced_by":"http://www.wikidata.org/entity/Q7027450","influenced_byLabel":"Nick Land"},{"item":"http://www.wikidata.org/entity/Q6004524","itemLabel":"Reza Negarestani","influenced_by":"http://www.wikidata.org/entity/Q7027450","influenced_byLabel":"Nick Land"},{"item":"http://www.wikidata.org/entity/Q6004524","itemLabel":"Reza Negarestani","influenced_by":"http://www.wikidata.org/entity/Q7297230","influenced_byLabel":"Ray Brassier"},{"item":"http://www.wikidata.org/entity/Q7297230","itemLabel":"Ray Brassier","influenced_by":"http://www.wikidata.org/entity/Q7027450","influenced_byLabel":"Nick Land"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q8016608","influenced_byLabel":"William Pars"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q12725495","influenced_byLabel":"Constantin Dimitrescu-Iași"},{"item":"http://www.wikidata.org/entity/Q4725710","itemLabel":"Alice Ambrose","influenced_by":"http://www.wikidata.org/entity/Q15428838","influenced_byLabel":"Morris Lazerowitz"},{"item":"http://www.wikidata.org/entity/Q2024702","itemLabel":"Seyid Yahya Bakuvi","influenced_by":"http://www.wikidata.org/entity/Q16377081","influenced_byLabel":"Ömər Xəlvəti"},{"item":"http://www.wikidata.org/entity/Q3035015","itemLabel":"Dominique Bourg","influenced_by":"http://www.wikidata.org/entity/Q16039375","influenced_byLabel":"Avant que nature meure"},{"item":"http://www.wikidata.org/entity/Q25973","itemLabel":"Hermann Hesse","influenced_by":"http://www.wikidata.org/entity/Q19523829","influenced_byLabel":"Buddhism as a religion"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q23751882","influenced_byLabel":"Tillie S. Pine"},{"item":"http://www.wikidata.org/entity/Q55197970","itemLabel":"Q55197970","influenced_by":"http://www.wikidata.org/entity/Q55197968","influenced_byLabel":"Q55197968"},{"item":"http://www.wikidata.org/entity/Q505528","itemLabel":"Harold Innis","influenced_by":"http://www.wikidata.org/entity/Q75135621","influenced_byLabel":"James Ten Broeke"},{"item":"http://www.wikidata.org/entity/Q17486589","itemLabel":"Lorin Morgan-Richards","influenced_by":"http://www.wikidata.org/entity/Q58756760","influenced_byLabel":"Elliott Oring"}];


const musicianStudents = [{"item":"http://www.wikidata.org/entity/Q374582","itemLabel":"Antoine Elwart","influenced_by":"http://www.wikidata.org/entity/Q1151","influenced_byLabel":"Hector Berlioz"},{"item":"http://www.wikidata.org/entity/Q573715","itemLabel":"Cécile Stanislas Xavier de Girardin","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q46096","itemLabel":"Felix Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q58857","influenced_byLabel":"Carl Friedrich Zelter"},{"item":"http://www.wikidata.org/entity/Q105237","itemLabel":"Giacomo Meyerbeer","influenced_by":"http://www.wikidata.org/entity/Q58857","influenced_byLabel":"Carl Friedrich Zelter"},{"item":"http://www.wikidata.org/entity/Q5993116","itemLabel":"Olallo Morales","influenced_by":"http://www.wikidata.org/entity/Q57358","influenced_byLabel":"Hans Pfitzner"},{"item":"http://www.wikidata.org/entity/Q451180","itemLabel":"Grace Bumbry","influenced_by":"http://www.wikidata.org/entity/Q60303","influenced_byLabel":"Lotte Lehmann"},{"item":"http://www.wikidata.org/entity/Q4800560","itemLabel":"Arthur W. Lehman","influenced_by":"http://www.wikidata.org/entity/Q59765","influenced_byLabel":"Simone Mantia"},{"item":"http://www.wikidata.org/entity/Q7176812","itemLabel":"Peter Schmalfuss","influenced_by":"http://www.wikidata.org/entity/Q61028","influenced_byLabel":"Walter Gieseking"},{"item":"http://www.wikidata.org/entity/Q132238","itemLabel":"Immanuel Faisst","influenced_by":"http://www.wikidata.org/entity/Q62376","influenced_byLabel":"Siegfried Wilhelm Dehn"},{"item":"http://www.wikidata.org/entity/Q181885","itemLabel":"Mikhail Glinka","influenced_by":"http://www.wikidata.org/entity/Q62376","influenced_byLabel":"Siegfried Wilhelm Dehn"},{"item":"http://www.wikidata.org/entity/Q311791","itemLabel":"Nikolai Rubinstein","influenced_by":"http://www.wikidata.org/entity/Q62376","influenced_byLabel":"Siegfried Wilhelm Dehn"},{"item":"http://www.wikidata.org/entity/Q366147","itemLabel":"Hans Richter","influenced_by":"http://www.wikidata.org/entity/Q84821","influenced_byLabel":"Carl Heissler"},{"item":"http://www.wikidata.org/entity/Q77177","itemLabel":"George Enescu","influenced_by":"http://www.wikidata.org/entity/Q78606","influenced_byLabel":"Robert Fuchs"},{"item":"http://www.wikidata.org/entity/Q128085","itemLabel":"Georg Solti","influenced_by":"http://www.wikidata.org/entity/Q78532","influenced_byLabel":"Ernő Dohnányi"},{"item":"http://www.wikidata.org/entity/Q156898","itemLabel":"Alma Mahler","influenced_by":"http://www.wikidata.org/entity/Q78524","influenced_byLabel":"Alexander von Zemlinsky"},{"item":"http://www.wikidata.org/entity/Q1000563","itemLabel":"György Ferenczy","influenced_by":"http://www.wikidata.org/entity/Q78532","influenced_byLabel":"Ernő Dohnányi"},{"item":"http://www.wikidata.org/entity/Q4428525","itemLabel":"Georges Solchany","influenced_by":"http://www.wikidata.org/entity/Q78532","influenced_byLabel":"Ernő Dohnányi"},{"item":"http://www.wikidata.org/entity/Q84821","itemLabel":"Carl Heissler","influenced_by":"http://www.wikidata.org/entity/Q78808","influenced_byLabel":"Georg Hellmesberger"},{"item":"http://www.wikidata.org/entity/Q159551","itemLabel":"Ignaz Moscheles","influenced_by":"http://www.wikidata.org/entity/Q79023","influenced_byLabel":"Bedřich Diviš Weber"},{"item":"http://www.wikidata.org/entity/Q489454","itemLabel":"Leopold Hofmann","influenced_by":"http://www.wikidata.org/entity/Q79104","influenced_byLabel":"Georg Christoph Wagenseil"},{"item":"http://www.wikidata.org/entity/Q694070","itemLabel":"Felix Mottl","influenced_by":"http://www.wikidata.org/entity/Q81752","influenced_byLabel":"Anton Bruckner"},{"item":"http://www.wikidata.org/entity/Q94911543","itemLabel":"Erich Hiller","influenced_by":"http://www.wikidata.org/entity/Q81752","influenced_byLabel":"Anton Bruckner"},{"item":"http://www.wikidata.org/entity/Q128085","itemLabel":"Georg Solti","influenced_by":"http://www.wikidata.org/entity/Q83326","influenced_byLabel":"Béla Bartók"},{"item":"http://www.wikidata.org/entity/Q364179","itemLabel":"Fritz Reiner","influenced_by":"http://www.wikidata.org/entity/Q83326","influenced_byLabel":"Béla Bartók"},{"item":"http://www.wikidata.org/entity/Q152768","itemLabel":"Daniel Barenboim","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q160325","itemLabel":"John Eliot Gardiner","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q189729","itemLabel":"Philip Glass","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q262078","itemLabel":"İdil Biret","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q296828","itemLabel":"Jacques Ibert","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q12254682","itemLabel":"Baikune de Alba Egiluz","influenced_by":"http://www.wikidata.org/entity/Q139453","influenced_byLabel":"Francisco Escudero"},{"item":"http://www.wikidata.org/entity/Q65924685","itemLabel":"Johan Willgrén","influenced_by":"http://www.wikidata.org/entity/Q133832","influenced_byLabel":"Georg Schnéevoigt"},{"item":"http://www.wikidata.org/entity/Q507940","itemLabel":"Vladimir Cosma","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q544469","itemLabel":"Pierre Henry","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q732252","itemLabel":"Laurence Rosenthal","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q746182","itemLabel":"Egberto Gismonti","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q851613","itemLabel":"Beveridge Webster","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q1103858","itemLabel":"Cláudio Santoro","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q3420761","itemLabel":"Raymond Cicurel","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q4934165","itemLabel":"Bob Telson","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q6213319","itemLabel":"Joel Cohen","influenced_by":"http://www.wikidata.org/entity/Q140619","influenced_byLabel":"Nadia Boulanger"},{"item":"http://www.wikidata.org/entity/Q221450","itemLabel":"Luciano Berio","influenced_by":"http://www.wikidata.org/entity/Q17575","influenced_byLabel":"Luigi Dallapiccola"},{"item":"http://www.wikidata.org/entity/Q1393945","itemLabel":"Joseph Abaco","influenced_by":"http://www.wikidata.org/entity/Q26931","influenced_byLabel":"Evaristo Felice Dall'Abaco"},{"item":"http://www.wikidata.org/entity/Q122998","itemLabel":"Pauline Viardot","influenced_by":"http://www.wikidata.org/entity/Q41309","influenced_byLabel":"Franz Liszt"},{"item":"http://www.wikidata.org/entity/Q153643","itemLabel":"Heinrich Schütz","influenced_by":"http://www.wikidata.org/entity/Q34624","influenced_byLabel":"Giovanni Gabrieli"},{"item":"http://www.wikidata.org/entity/Q375024","itemLabel":"István Thomán","influenced_by":"http://www.wikidata.org/entity/Q41309","influenced_byLabel":"Franz Liszt"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q64767640","itemLabel":"Q64767640","influenced_by":"http://www.wikidata.org/entity/Q41309","influenced_byLabel":"Franz Liszt"},{"item":"http://www.wikidata.org/entity/Q132238","itemLabel":"Immanuel Faisst","influenced_by":"http://www.wikidata.org/entity/Q46096","influenced_byLabel":"Felix Mendelssohn"},{"item":"http://www.wikidata.org/entity/Q5277866","itemLabel":"Dina Schneidermann","influenced_by":"http://www.wikidata.org/entity/Q47120","influenced_byLabel":"David Oistrakh"},{"item":"http://www.wikidata.org/entity/Q1339","itemLabel":"Johann Sebastian Bach","influenced_by":"http://www.wikidata.org/entity/Q48345","influenced_byLabel":"Johann Christoph Bach II"},{"item":"http://www.wikidata.org/entity/Q41309","itemLabel":"Franz Liszt","influenced_by":"http://www.wikidata.org/entity/Q51088","influenced_byLabel":"Antonio Salieri"},{"item":"http://www.wikidata.org/entity/Q156023","itemLabel":"Franz Xaver Wolfgang Mozart","influenced_by":"http://www.wikidata.org/entity/Q51088","influenced_byLabel":"Antonio Salieri"},{"item":"http://www.wikidata.org/entity/Q582713","itemLabel":"Simon Sechter","influenced_by":"http://www.wikidata.org/entity/Q51088","influenced_byLabel":"Antonio Salieri"},{"item":"http://www.wikidata.org/entity/Q28144547","itemLabel":"Andreas Ehrenfried Forstmeyer","influenced_by":"http://www.wikidata.org/entity/Q49698","influenced_byLabel":"Johann Alexander Döderlein"},{"item":"http://www.wikidata.org/entity/Q55004","itemLabel":"Kurt Weill","influenced_by":"http://www.wikidata.org/entity/Q55010","influenced_byLabel":"Engelbert Humperdinck"},{"item":"http://www.wikidata.org/entity/Q377768","itemLabel":"Bernard Foccroulle","influenced_by":"http://www.wikidata.org/entity/Q51584","influenced_byLabel":"Gustav Leonhardt"},{"item":"http://www.wikidata.org/entity/Q1370295","itemLabel":"Pierre Hantaï","influenced_by":"http://www.wikidata.org/entity/Q51584","influenced_byLabel":"Gustav Leonhardt"},{"item":"http://www.wikidata.org/entity/Q1442851","itemLabel":"Frank Agsteribbe","influenced_by":"http://www.wikidata.org/entity/Q51584","influenced_byLabel":"Gustav Leonhardt"},{"item":"http://www.wikidata.org/entity/Q1543003","itemLabel":"Léon Berben","influenced_by":"http://www.wikidata.org/entity/Q51584","influenced_byLabel":"Gustav Leonhardt"},{"item":"http://www.wikidata.org/entity/Q2414155","itemLabel":"Skip Sempé","influenced_by":"http://www.wikidata.org/entity/Q51584","influenced_byLabel":"Gustav Leonhardt"},{"item":"http://www.wikidata.org/entity/Q2982659","itemLabel":"Colin Tilney","influenced_by":"http://www.wikidata.org/entity/Q51584","influenced_byLabel":"Gustav Leonhardt"},{"item":"http://www.wikidata.org/entity/Q3371608","itemLabel":"Paul Lacombe","influenced_by":"http://www.wikidata.org/entity/Q56158","influenced_byLabel":"Georges Bizet"},{"item":"http://www.wikidata.org/entity/Q57285","itemLabel":"Wilhelm Furtwängler","influenced_by":"http://www.wikidata.org/entity/Q57210","influenced_byLabel":"Arthur Nikisch"},{"item":"http://www.wikidata.org/entity/Q1521457","itemLabel":"Waldemar Klink","influenced_by":"http://www.wikidata.org/entity/Q57244","influenced_byLabel":"Paul Hindemith"},{"item":"http://www.wikidata.org/entity/Q1939469","itemLabel":"Mitch Leigh","influenced_by":"http://www.wikidata.org/entity/Q57244","influenced_byLabel":"Paul Hindemith"},{"item":"http://www.wikidata.org/entity/Q1511","itemLabel":"Richard Wagner","influenced_by":"http://www.wikidata.org/entity/Q65815","influenced_byLabel":"Christian Theodor Weinlig"},{"item":"http://www.wikidata.org/entity/Q2451955","itemLabel":"Yves Rechsteiner","influenced_by":"http://www.wikidata.org/entity/Q66717","influenced_byLabel":"Andreas Staier"},{"item":"http://www.wikidata.org/entity/Q56863474","itemLabel":"Q56863474","influenced_by":"http://www.wikidata.org/entity/Q66891","influenced_byLabel":"Friedrich Grützmacher"},{"item":"http://www.wikidata.org/entity/Q354250","itemLabel":"Hubert Parry","influenced_by":"http://www.wikidata.org/entity/Q67963","influenced_byLabel":"Edward Dannreuther"},{"item":"http://www.wikidata.org/entity/Q709361","itemLabel":"Arthur Fiedler","influenced_by":"http://www.wikidata.org/entity/Q70128","influenced_byLabel":"Willy Hess"},{"item":"http://www.wikidata.org/entity/Q4431189","itemLabel":"Tossy Spivakovsky","influenced_by":"http://www.wikidata.org/entity/Q70128","influenced_byLabel":"Willy Hess"},{"item":"http://www.wikidata.org/entity/Q6036803","itemLabel":"Edmund Passy","influenced_by":"http://www.wikidata.org/entity/Q70158","influenced_byLabel":"Joachim Nicolas Eggert"},{"item":"http://www.wikidata.org/entity/Q2162826","itemLabel":"Roland Kayn","influenced_by":"http://www.wikidata.org/entity/Q71198","influenced_byLabel":"Josef Rufer"},{"item":"http://www.wikidata.org/entity/Q191408","itemLabel":"Francis Poulenc","influenced_by":"http://www.wikidata.org/entity/Q72543","influenced_byLabel":"Charles Koechlin"},{"item":"http://www.wikidata.org/entity/Q78526","itemLabel":"Nikolaus Harnoncourt","influenced_by":"http://www.wikidata.org/entity/Q75300","influenced_byLabel":"Paul Grümmer"},{"item":"http://www.wikidata.org/entity/Q672800","itemLabel":"August Wenzinger","influenced_by":"http://www.wikidata.org/entity/Q75300","influenced_byLabel":"Paul Grümmer"},{"item":"http://www.wikidata.org/entity/Q4390061","itemLabel":"Siegfried Rapp","influenced_by":"http://www.wikidata.org/entity/Q75451","influenced_byLabel":"Robert Teichmüller"},{"item":"http://www.wikidata.org/entity/Q19629154","itemLabel":"Christian Gavillet","influenced_by":"http://www.wikidata.org/entity/Q77060","influenced_byLabel":"Dietrich Fischer-Dieskau"},{"item":"http://www.wikidata.org/entity/Q7302","itemLabel":"George Frideric Handel","influenced_by":"http://www.wikidata.org/entity/Q77368","influenced_byLabel":"Friedrich Wilhelm Zachow"},{"item":"http://www.wikidata.org/entity/Q75300","itemLabel":"Paul Grümmer","influenced_by":"http://www.wikidata.org/entity/Q77222","influenced_byLabel":"Julius Klengel"},{"item":"http://www.wikidata.org/entity/Q325059","itemLabel":"Ruben Liljefors","influenced_by":"http://www.wikidata.org/entity/Q77222","influenced_byLabel":"Julius Klengel"},{"item":"http://www.wikidata.org/entity/Q11959058","itemLabel":"Arne Melsom","influenced_by":"http://www.wikidata.org/entity/Q77222","influenced_byLabel":"Julius Klengel"},{"item":"http://www.wikidata.org/entity/Q30092902","itemLabel":"James Messeas","influenced_by":"http://www.wikidata.org/entity/Q77222","influenced_byLabel":"Julius Klengel"},{"item":"http://www.wikidata.org/entity/Q7315","itemLabel":"Pyotr Ilyich Tchaikovsky","influenced_by":"http://www.wikidata.org/entity/Q87567","influenced_byLabel":"Anton Rubinstein"},{"item":"http://www.wikidata.org/entity/Q57244","itemLabel":"Paul Hindemith","influenced_by":"http://www.wikidata.org/entity/Q87447","influenced_byLabel":"Adolf Rebner"},{"item":"http://www.wikidata.org/entity/Q7314","itemLabel":"Igor Stravinsky","influenced_by":"http://www.wikidata.org/entity/Q93227","influenced_byLabel":"Nikolai Rimsky-Korsakov"},{"item":"http://www.wikidata.org/entity/Q132238","itemLabel":"Immanuel Faisst","influenced_by":"http://www.wikidata.org/entity/Q96179","influenced_byLabel":"Carl August Haupt"},{"item":"http://www.wikidata.org/entity/Q243837","itemLabel":"Ottorino Respighi","influenced_by":"http://www.wikidata.org/entity/Q93227","influenced_byLabel":"Nikolai Rimsky-Korsakov"},{"item":"http://www.wikidata.org/entity/Q918647","itemLabel":"Nikolai Tcherepnin","influenced_by":"http://www.wikidata.org/entity/Q93227","influenced_byLabel":"Nikolai Rimsky-Korsakov"},{"item":"http://www.wikidata.org/entity/Q2000816","itemLabel":"Théodore Akimenko","influenced_by":"http://www.wikidata.org/entity/Q93227","influenced_byLabel":"Nikolai Rimsky-Korsakov"},{"item":"http://www.wikidata.org/entity/Q2549218","itemLabel":"Kōmei Abe","influenced_by":"http://www.wikidata.org/entity/Q96985","influenced_byLabel":"Klaus Pringsheim"},{"item":"http://www.wikidata.org/entity/Q6381680","itemLabel":"Kazuo Yamada","influenced_by":"http://www.wikidata.org/entity/Q96985","influenced_byLabel":"Klaus Pringsheim"},{"item":"http://www.wikidata.org/entity/Q1178","itemLabel":"Maurice Ravel","influenced_by":"http://www.wikidata.org/entity/Q104919","influenced_byLabel":"Gabriel Fauré"},{"item":"http://www.wikidata.org/entity/Q72543","itemLabel":"Charles Koechlin","influenced_by":"http://www.wikidata.org/entity/Q104919","influenced_byLabel":"Gabriel Fauré"},{"item":"http://www.wikidata.org/entity/Q77177","itemLabel":"George Enescu","influenced_by":"http://www.wikidata.org/entity/Q104919","influenced_byLabel":"Gabriel Fauré"},{"item":"http://www.wikidata.org/entity/Q16635752","itemLabel":"Lucien Garban","influenced_by":"http://www.wikidata.org/entity/Q104919","influenced_byLabel":"Gabriel Fauré"},{"item":"http://www.wikidata.org/entity/Q254","itemLabel":"Wolfgang Amadeus Mozart","influenced_by":"http://www.wikidata.org/entity/Q106641","influenced_byLabel":"Johann Christian Bach"},{"item":"http://www.wikidata.org/entity/Q207947","itemLabel":"Ralph Vaughan Williams","influenced_by":"http://www.wikidata.org/entity/Q106434","influenced_byLabel":"Max Bruch"},{"item":"http://www.wikidata.org/entity/Q239214","itemLabel":"Karl Goldmark","influenced_by":"http://www.wikidata.org/entity/Q113506","influenced_byLabel":"Gottfried von Preyer"},{"item":"http://www.wikidata.org/entity/Q325059","itemLabel":"Ruben Liljefors","influenced_by":"http://www.wikidata.org/entity/Q110158","influenced_byLabel":"Paul Homeyer"},{"item":"http://www.wikidata.org/entity/Q672800","itemLabel":"August Wenzinger","influenced_by":"http://www.wikidata.org/entity/Q112171","influenced_byLabel":"Emanuel Feuermann"},{"item":"http://www.wikidata.org/entity/Q262078","itemLabel":"İdil Biret","influenced_by":"http://www.wikidata.org/entity/Q116057","influenced_byLabel":"Alfred Cortot"},{"item":"http://www.wikidata.org/entity/Q223258","itemLabel":"Bohuslav Martinů","influenced_by":"http://www.wikidata.org/entity/Q123164","influenced_byLabel":"Arthur Honegger"},{"item":"http://www.wikidata.org/entity/Q52717740","itemLabel":"Luigi de Baillou","influenced_by":"http://www.wikidata.org/entity/Q120697","influenced_byLabel":"Nicolas Capron"},{"item":"http://www.wikidata.org/entity/Q1483651","itemLabel":"Toshio Hosokawa","influenced_by":"http://www.wikidata.org/entity/Q124092","influenced_byLabel":"Klaus Huber"},{"item":"http://www.wikidata.org/entity/Q52257448","itemLabel":"Sébastien Marq","influenced_by":"http://www.wikidata.org/entity/Q280180","influenced_byLabel":"Kees Boeke"},{"item":"http://www.wikidata.org/entity/Q83326","itemLabel":"Béla Bartók","influenced_by":"http://www.wikidata.org/entity/Q289763","influenced_byLabel":"László Erkel"},{"item":"http://www.wikidata.org/entity/Q214436","itemLabel":"August Ferdinand Anacker","influenced_by":"http://www.wikidata.org/entity/Q289660","influenced_byLabel":"Johann Gottfried Schicht"},{"item":"http://www.wikidata.org/entity/Q296828","itemLabel":"Jacques Ibert","influenced_by":"http://www.wikidata.org/entity/Q286316","influenced_byLabel":"Emile Pessard"},{"item":"http://www.wikidata.org/entity/Q365557","itemLabel":"Rodolphus Agricola","influenced_by":"http://www.wikidata.org/entity/Q287485","influenced_byLabel":"Theodoros Gaza"},{"item":"http://www.wikidata.org/entity/Q19629154","itemLabel":"Christian Gavillet","influenced_by":"http://www.wikidata.org/entity/Q290464","influenced_byLabel":"Régine Crespin"},{"item":"http://www.wikidata.org/entity/Q1376058","itemLabel":"Francesco Soriano","influenced_by":"http://www.wikidata.org/entity/Q179277","influenced_byLabel":"Giovanni da Palestrina"},{"item":"http://www.wikidata.org/entity/Q2833280","itemLabel":"Alexandra Grot","influenced_by":"http://www.wikidata.org/entity/Q179547","influenced_byLabel":"András Adorján"},{"item":"http://www.wikidata.org/entity/Q16467670","itemLabel":"Gita Sarabhai","influenced_by":"http://www.wikidata.org/entity/Q180727","influenced_byLabel":"John Cage"},{"item":"http://www.wikidata.org/entity/Q762","itemLabel":"Leonardo da Vinci","influenced_by":"http://www.wikidata.org/entity/Q183458","influenced_byLabel":"Andrea Verrocchio"},{"item":"http://www.wikidata.org/entity/Q189729","itemLabel":"Philip Glass","influenced_by":"http://www.wikidata.org/entity/Q186264","influenced_byLabel":"Darius Milhaud"},{"item":"http://www.wikidata.org/entity/Q262791","itemLabel":"Steve Reich","influenced_by":"http://www.wikidata.org/entity/Q186264","influenced_byLabel":"Darius Milhaud"},{"item":"http://www.wikidata.org/entity/Q435034","itemLabel":"Georges Delerue","influenced_by":"http://www.wikidata.org/entity/Q186264","influenced_byLabel":"Darius Milhaud"},{"item":"http://www.wikidata.org/entity/Q1684779","itemLabel":"Jean-Claude Touche","influenced_by":"http://www.wikidata.org/entity/Q183256","influenced_byLabel":"Maurice Duruflé"},{"item":"http://www.wikidata.org/entity/Q2000816","itemLabel":"Théodore Akimenko","influenced_by":"http://www.wikidata.org/entity/Q185040","influenced_byLabel":"Mily Balakirev"},{"item":"http://www.wikidata.org/entity/Q20051319","itemLabel":"Alain Kremski","influenced_by":"http://www.wikidata.org/entity/Q186264","influenced_byLabel":"Darius Milhaud"},{"item":"http://www.wikidata.org/entity/Q60830660","itemLabel":"Jean-Albert Villard","influenced_by":"http://www.wikidata.org/entity/Q183256","influenced_byLabel":"Maurice Duruflé"},{"item":"http://www.wikidata.org/entity/Q207951","itemLabel":"Léo Delibes","influenced_by":"http://www.wikidata.org/entity/Q189544","influenced_byLabel":"Adolphe Adam"},{"item":"http://www.wikidata.org/entity/Q72543","itemLabel":"Charles Koechlin","influenced_by":"http://www.wikidata.org/entity/Q194436","influenced_byLabel":"Jules Massenet"},{"item":"http://www.wikidata.org/entity/Q77177","itemLabel":"George Enescu","influenced_by":"http://www.wikidata.org/entity/Q194436","influenced_byLabel":"Jules Massenet"},{"item":"http://www.wikidata.org/entity/Q105237","itemLabel":"Giacomo Meyerbeer","influenced_by":"http://www.wikidata.org/entity/Q193673","influenced_byLabel":"Muzio Clementi"},{"item":"http://www.wikidata.org/entity/Q159551","itemLabel":"Ignaz Moscheles","influenced_by":"http://www.wikidata.org/entity/Q193673","influenced_byLabel":"Muzio Clementi"},{"item":"http://www.wikidata.org/entity/Q209684","itemLabel":"John Field","influenced_by":"http://www.wikidata.org/entity/Q193673","influenced_byLabel":"Muzio Clementi"},{"item":"http://www.wikidata.org/entity/Q740641","itemLabel":"Witold Małcużyński","influenced_by":"http://www.wikidata.org/entity/Q191957","influenced_byLabel":"Ignacy Jan Paderewski"},{"item":"http://www.wikidata.org/entity/Q354250","itemLabel":"Hubert Parry","influenced_by":"http://www.wikidata.org/entity/Q201164","influenced_byLabel":"William Sterndale Bennett"},{"item":"http://www.wikidata.org/entity/Q1420733","itemLabel":"Jean-Claude Casadesus","influenced_by":"http://www.wikidata.org/entity/Q202302","influenced_byLabel":"Pierre Dervaux"},{"item":"http://www.wikidata.org/entity/Q3369456","itemLabel":"Patrick Fournillier","influenced_by":"http://www.wikidata.org/entity/Q202302","influenced_byLabel":"Pierre Dervaux"},{"item":"http://www.wikidata.org/entity/Q7311","itemLabel":"Giacomo Puccini","influenced_by":"http://www.wikidata.org/entity/Q207390","influenced_byLabel":"Amilcare Ponchielli"},{"item":"http://www.wikidata.org/entity/Q151593","itemLabel":"Olivier Messiaen","influenced_by":"http://www.wikidata.org/entity/Q205606","influenced_byLabel":"Maurice Emmanuel"},{"item":"http://www.wikidata.org/entity/Q208375","itemLabel":"William Byrd","influenced_by":"http://www.wikidata.org/entity/Q207789","influenced_byLabel":"Thomas Tallis"},{"item":"http://www.wikidata.org/entity/Q181885","itemLabel":"Mikhail Glinka","influenced_by":"http://www.wikidata.org/entity/Q209684","influenced_byLabel":"John Field"},{"item":"http://www.wikidata.org/entity/Q221497","itemLabel":"Xenophilus","influenced_by":"http://www.wikidata.org/entity/Q212338","influenced_byLabel":"Philolaus"},{"item":"http://www.wikidata.org/entity/Q437058","itemLabel":"Ruth Laredo","influenced_by":"http://www.wikidata.org/entity/Q208537","influenced_byLabel":"Pau Casals"},{"item":"http://www.wikidata.org/entity/Q6036803","itemLabel":"Edmund Passy","influenced_by":"http://www.wikidata.org/entity/Q209684","influenced_byLabel":"John Field"},{"item":"http://www.wikidata.org/entity/Q156193","itemLabel":"Pierre Boulez","influenced_by":"http://www.wikidata.org/entity/Q151593","influenced_byLabel":"Olivier Messiaen"},{"item":"http://www.wikidata.org/entity/Q216924","itemLabel":"Glenn Gould","influenced_by":"http://www.wikidata.org/entity/Q144491","influenced_byLabel":"Alberto Guerrero"},{"item":"http://www.wikidata.org/entity/Q236438","itemLabel":"Cécile Chaminade","influenced_by":"http://www.wikidata.org/entity/Q150445","influenced_byLabel":"Camille Saint-Saëns"},{"item":"http://www.wikidata.org/entity/Q28222206","itemLabel":"Linus Roth","influenced_by":"http://www.wikidata.org/entity/Q144664","influenced_byLabel":"Zakhar Bron"},{"item":"http://www.wikidata.org/entity/Q128085","itemLabel":"Georg Solti","influenced_by":"http://www.wikidata.org/entity/Q153008","influenced_byLabel":"Zoltán Kodály"},{"item":"http://www.wikidata.org/entity/Q156023","itemLabel":"Franz Xaver Wolfgang Mozart","influenced_by":"http://www.wikidata.org/entity/Q151953","influenced_byLabel":"Johann Nepomuk Hummel"},{"item":"http://www.wikidata.org/entity/Q509102","itemLabel":"Evelyn Lear","influenced_by":"http://www.wikidata.org/entity/Q152505","influenced_byLabel":"Leonard Bernstein"},{"item":"http://www.wikidata.org/entity/Q961302","itemLabel":"Tamás Vásáry","influenced_by":"http://www.wikidata.org/entity/Q153008","influenced_byLabel":"Zoltán Kodály"},{"item":"http://www.wikidata.org/entity/Q3339352","itemLabel":"Nguyen-Thien Dao","influenced_by":"http://www.wikidata.org/entity/Q151593","influenced_byLabel":"Olivier Messiaen"},{"item":"http://www.wikidata.org/entity/Q1339","itemLabel":"Johann Sebastian Bach","influenced_by":"http://www.wikidata.org/entity/Q153637","influenced_byLabel":"Dietrich Buxtehude"},{"item":"http://www.wikidata.org/entity/Q1483651","itemLabel":"Toshio Hosokawa","influenced_by":"http://www.wikidata.org/entity/Q153611","influenced_byLabel":"Isang Yun"},{"item":"http://www.wikidata.org/entity/Q1740593","itemLabel":"Walter Dahn","influenced_by":"http://www.wikidata.org/entity/Q153965","influenced_byLabel":"Joseph Beuys"},{"item":"http://www.wikidata.org/entity/Q5503930","itemLabel":"Friedrich Werner","influenced_by":"http://www.wikidata.org/entity/Q153643","influenced_byLabel":"Heinrich Schütz"},{"item":"http://www.wikidata.org/entity/Q78475","itemLabel":"Alban Berg","influenced_by":"http://www.wikidata.org/entity/Q154770","influenced_byLabel":"Arnold Schoenberg"},{"item":"http://www.wikidata.org/entity/Q78704","itemLabel":"Hanns Eisler","influenced_by":"http://www.wikidata.org/entity/Q154770","influenced_byLabel":"Arnold Schoenberg"},{"item":"http://www.wikidata.org/entity/Q151593","itemLabel":"Olivier Messiaen","influenced_by":"http://www.wikidata.org/entity/Q154949","influenced_byLabel":"Jean Gallon"},{"item":"http://www.wikidata.org/entity/Q180727","itemLabel":"John Cage","influenced_by":"http://www.wikidata.org/entity/Q154770","influenced_byLabel":"Arnold Schoenberg"},{"item":"http://www.wikidata.org/entity/Q190933","itemLabel":"Anton Webern","influenced_by":"http://www.wikidata.org/entity/Q154770","influenced_byLabel":"Arnold Schoenberg"},{"item":"http://www.wikidata.org/entity/Q116185","itemLabel":"Michel Tabachnik","influenced_by":"http://www.wikidata.org/entity/Q156193","influenced_byLabel":"Pierre Boulez"},{"item":"http://www.wikidata.org/entity/Q1420733","itemLabel":"Jean-Claude Casadesus","influenced_by":"http://www.wikidata.org/entity/Q156193","influenced_byLabel":"Pierre Boulez"},{"item":"http://www.wikidata.org/entity/Q46096","itemLabel":"Felix Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q159551","influenced_byLabel":"Ignaz Moscheles"},{"item":"http://www.wikidata.org/entity/Q79023","itemLabel":"Bedřich Diviš Weber","influenced_by":"http://www.wikidata.org/entity/Q159551","influenced_byLabel":"Ignaz Moscheles"},{"item":"http://www.wikidata.org/entity/Q262078","itemLabel":"İdil Biret","influenced_by":"http://www.wikidata.org/entity/Q159946","influenced_byLabel":"Wilhelm Kempff"},{"item":"http://www.wikidata.org/entity/Q312698","itemLabel":"Frederick Delius","influenced_by":"http://www.wikidata.org/entity/Q159569","influenced_byLabel":"Carl Reinecke"},{"item":"http://www.wikidata.org/entity/Q511817","itemLabel":"Andris Nelsons","influenced_by":"http://www.wikidata.org/entity/Q158340","influenced_byLabel":"Mariss Jansons"},{"item":"http://www.wikidata.org/entity/Q709178","itemLabel":"Jenő Hubay","influenced_by":"http://www.wikidata.org/entity/Q159976","influenced_byLabel":"Joseph Joachim"},{"item":"http://www.wikidata.org/entity/Q3498494","itemLabel":"Michael Maybrick","influenced_by":"http://www.wikidata.org/entity/Q159569","influenced_byLabel":"Carl Reinecke"},{"item":"http://www.wikidata.org/entity/Q73855434","itemLabel":"Eri Mantani","influenced_by":"http://www.wikidata.org/entity/Q157785","influenced_byLabel":"Vladimir Ashkenazy"},{"item":"http://www.wikidata.org/entity/Q152768","itemLabel":"Daniel Barenboim","influenced_by":"http://www.wikidata.org/entity/Q160223","influenced_byLabel":"Claudio Arrau"},{"item":"http://www.wikidata.org/entity/Q549442","itemLabel":"Helmut Lachenmann","influenced_by":"http://www.wikidata.org/entity/Q160451","influenced_byLabel":"Luigi Nono"},{"item":"http://www.wikidata.org/entity/Q10326942","itemLabel":"Martinho Lutero Galati","influenced_by":"http://www.wikidata.org/entity/Q160451","influenced_byLabel":"Luigi Nono"},{"item":"http://www.wikidata.org/entity/Q1192","itemLabel":"Jean-Baptiste Lully","influenced_by":"http://www.wikidata.org/entity/Q176390","influenced_byLabel":"François Roberday"},{"item":"http://www.wikidata.org/entity/Q23765788","itemLabel":"Lea Birringer","influenced_by":"http://www.wikidata.org/entity/Q321636","influenced_byLabel":"Igor Ozim"},{"item":"http://www.wikidata.org/entity/Q30429422","itemLabel":"Deno Geanakoplos","influenced_by":"http://www.wikidata.org/entity/Q319741","influenced_byLabel":"Dimitri Mitropoulos"},{"item":"http://www.wikidata.org/entity/Q189729","itemLabel":"Philip Glass","influenced_by":"http://www.wikidata.org/entity/Q323568","influenced_byLabel":"William Bergsma"},{"item":"http://www.wikidata.org/entity/Q508953","itemLabel":"Arthur Bliss","influenced_by":"http://www.wikidata.org/entity/Q323117","influenced_byLabel":"Cyril Rootham"},{"item":"http://www.wikidata.org/entity/Q6240680","itemLabel":"Ingvar Wieslander","influenced_by":"http://www.wikidata.org/entity/Q322673","influenced_byLabel":"Eugène Bigot"},{"item":"http://www.wikidata.org/entity/Q21088137","itemLabel":"Yasuko Uyama-Bouvard","influenced_by":"http://www.wikidata.org/entity/Q323797","influenced_byLabel":"Michel Chapuis"},{"item":"http://www.wikidata.org/entity/Q78808","itemLabel":"Georg Hellmesberger","influenced_by":"http://www.wikidata.org/entity/Q324490","influenced_byLabel":"Emanuel Aloys Förster"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q329253","influenced_byLabel":"Henning Mankell"},{"item":"http://www.wikidata.org/entity/Q19725531","itemLabel":"Kei Koito","influenced_by":"http://www.wikidata.org/entity/Q327719","influenced_byLabel":"Luigi Ferdinando Tagliavini"},{"item":"http://www.wikidata.org/entity/Q57139","itemLabel":"Max Reger","influenced_by":"http://www.wikidata.org/entity/Q213539","influenced_byLabel":"Hugo Riemann"},{"item":"http://www.wikidata.org/entity/Q214436","itemLabel":"August Ferdinand Anacker","influenced_by":"http://www.wikidata.org/entity/Q213906","influenced_byLabel":"Friedrich Schneider"},{"item":"http://www.wikidata.org/entity/Q437058","itemLabel":"Ruth Laredo","influenced_by":"http://www.wikidata.org/entity/Q213545","influenced_byLabel":"Rudolf Serkin"},{"item":"http://www.wikidata.org/entity/Q5927953","itemLabel":"Otto Kyndel","influenced_by":"http://www.wikidata.org/entity/Q213762","influenced_byLabel":"Henri Marteau"},{"item":"http://www.wikidata.org/entity/Q41309","itemLabel":"Franz Liszt","influenced_by":"http://www.wikidata.org/entity/Q215333","influenced_byLabel":"Carl Czerny"},{"item":"http://www.wikidata.org/entity/Q44086","itemLabel":"Carl Orff","influenced_by":"http://www.wikidata.org/entity/Q214359","influenced_byLabel":"Hermann Zilcher"},{"item":"http://www.wikidata.org/entity/Q151593","itemLabel":"Olivier Messiaen","influenced_by":"http://www.wikidata.org/entity/Q215161","influenced_byLabel":"Charles-Marie Widor"},{"item":"http://www.wikidata.org/entity/Q232035","itemLabel":"Francesca Caccini","influenced_by":"http://www.wikidata.org/entity/Q215308","influenced_byLabel":"Giulio Caccini"},{"item":"http://www.wikidata.org/entity/Q362340","itemLabel":"Theodor Leschetizky","influenced_by":"http://www.wikidata.org/entity/Q215333","influenced_byLabel":"Carl Czerny"},{"item":"http://www.wikidata.org/entity/Q6381680","itemLabel":"Kazuo Yamada","influenced_by":"http://www.wikidata.org/entity/Q214404","influenced_byLabel":"Joseph Rosenstock"},{"item":"http://www.wikidata.org/entity/Q19999318","itemLabel":"Ernst Wilhelm Fritsch","influenced_by":"http://www.wikidata.org/entity/Q215083","influenced_byLabel":"Ferdinand David"},{"item":"http://www.wikidata.org/entity/Q96776","itemLabel":"Friedrich Wilhelm Berner","influenced_by":"http://www.wikidata.org/entity/Q216090","influenced_byLabel":"Daniel Gottlob Türk"},{"item":"http://www.wikidata.org/entity/Q151593","itemLabel":"Olivier Messiaen","influenced_by":"http://www.wikidata.org/entity/Q215556","influenced_byLabel":"Paul Dukas"},{"item":"http://www.wikidata.org/entity/Q879352","itemLabel":"Bjarne Brustad","influenced_by":"http://www.wikidata.org/entity/Q215739","influenced_byLabel":"Carl Flesch"},{"item":"http://www.wikidata.org/entity/Q945633","itemLabel":"George Benjamin","influenced_by":"http://www.wikidata.org/entity/Q215847","influenced_byLabel":"Alexander Goehr"},{"item":"http://www.wikidata.org/entity/Q64003234","itemLabel":"Maggy Breittmayer","influenced_by":"http://www.wikidata.org/entity/Q215739","influenced_byLabel":"Carl Flesch"},{"item":"http://www.wikidata.org/entity/Q94921482","itemLabel":"Josef Doppler","influenced_by":"http://www.wikidata.org/entity/Q216602","influenced_byLabel":"Franz Anton Schubert"},{"item":"http://www.wikidata.org/entity/Q55004","itemLabel":"Kurt Weill","influenced_by":"http://www.wikidata.org/entity/Q219551","influenced_byLabel":"Ferruccio Busoni"},{"item":"http://www.wikidata.org/entity/Q6015904","itemLabel":"Conrad Nordqvist","influenced_by":"http://www.wikidata.org/entity/Q217044","influenced_byLabel":"Franz Berwald"},{"item":"http://www.wikidata.org/entity/Q945633","itemLabel":"George Benjamin","influenced_by":"http://www.wikidata.org/entity/Q235500","influenced_byLabel":"Yvonne Loriod"},{"item":"http://www.wikidata.org/entity/Q1233831","itemLabel":"Ralph Gibson","influenced_by":"http://www.wikidata.org/entity/Q230673","influenced_byLabel":"Dorothea Lange"},{"item":"http://www.wikidata.org/entity/Q3379703","itemLabel":"Philippe Delacour","influenced_by":"http://www.wikidata.org/entity/Q237139","influenced_byLabel":"Marie-Claire Alain"},{"item":"http://www.wikidata.org/entity/Q175586","itemLabel":"Pierre Amoyal","influenced_by":"http://www.wikidata.org/entity/Q243472","influenced_byLabel":"Jascha Heifetz"},{"item":"http://www.wikidata.org/entity/Q5993116","itemLabel":"Olallo Morales","influenced_by":"http://www.wikidata.org/entity/Q241494","influenced_byLabel":"Teresa Carreño"},{"item":"http://www.wikidata.org/entity/Q215556","itemLabel":"Paul Dukas","influenced_by":"http://www.wikidata.org/entity/Q259121","influenced_byLabel":"Théodore Dubois"},{"item":"http://www.wikidata.org/entity/Q325059","itemLabel":"Ruben Liljefors","influenced_by":"http://www.wikidata.org/entity/Q264047","influenced_byLabel":"Ivar Hedenblad"},{"item":"http://www.wikidata.org/entity/Q425612","itemLabel":"Christoph Bach","influenced_by":"http://www.wikidata.org/entity/Q252919","influenced_byLabel":"Johannes Bach"},{"item":"http://www.wikidata.org/entity/Q515310","itemLabel":"Karel Halíř","influenced_by":"http://www.wikidata.org/entity/Q252556","influenced_byLabel":"Antonín Bennewitz"},{"item":"http://www.wikidata.org/entity/Q2004683","itemLabel":"Carolus Luython","influenced_by":"http://www.wikidata.org/entity/Q277029","influenced_byLabel":"Philippe de Monte"},{"item":"http://www.wikidata.org/entity/Q1339","itemLabel":"Johann Sebastian Bach","influenced_by":"http://www.wikidata.org/entity/Q309470","influenced_byLabel":"Johann Ambrosius Bach"},{"item":"http://www.wikidata.org/entity/Q288581","itemLabel":"Ernest Gillet","influenced_by":"http://www.wikidata.org/entity/Q304620","influenced_byLabel":"Louis Niedermeyer"},{"item":"http://www.wikidata.org/entity/Q9695","itemLabel":"Henry Purcell","influenced_by":"http://www.wikidata.org/entity/Q311110","influenced_byLabel":"John Blow"},{"item":"http://www.wikidata.org/entity/Q41309","itemLabel":"Franz Liszt","influenced_by":"http://www.wikidata.org/entity/Q311387","influenced_byLabel":"Anton Reicha"},{"item":"http://www.wikidata.org/entity/Q180278","itemLabel":"Charles Gounod","influenced_by":"http://www.wikidata.org/entity/Q311387","influenced_byLabel":"Anton Reicha"},{"item":"http://www.wikidata.org/entity/Q183087","itemLabel":"Alessandro Scarlatti","influenced_by":"http://www.wikidata.org/entity/Q312686","influenced_byLabel":"Giacomo Carissimi"},{"item":"http://www.wikidata.org/entity/Q223258","itemLabel":"Bohuslav Martinů","influenced_by":"http://www.wikidata.org/entity/Q312700","influenced_byLabel":"Josef Suk"},{"item":"http://www.wikidata.org/entity/Q442198","itemLabel":"Louise Farrenc","influenced_by":"http://www.wikidata.org/entity/Q311387","influenced_byLabel":"Anton Reicha"},{"item":"http://www.wikidata.org/entity/Q1779","itemLabel":"Louis Armstrong","influenced_by":"http://www.wikidata.org/entity/Q313368","influenced_byLabel":"King Oliver"},{"item":"http://www.wikidata.org/entity/Q7349","itemLabel":"Joseph Haydn","influenced_by":"http://www.wikidata.org/entity/Q312788","influenced_byLabel":"Nicola Porpora"},{"item":"http://www.wikidata.org/entity/Q187192","itemLabel":"Erik Satie","influenced_by":"http://www.wikidata.org/entity/Q313584","influenced_byLabel":"Vincent d'Indy"},{"item":"http://www.wikidata.org/entity/Q194638","itemLabel":"Arnold Dolmetsch","influenced_by":"http://www.wikidata.org/entity/Q312790","influenced_byLabel":"Henri Vieuxtemps"},{"item":"http://www.wikidata.org/entity/Q215120","itemLabel":"Cole Porter","influenced_by":"http://www.wikidata.org/entity/Q313584","influenced_byLabel":"Vincent d'Indy"},{"item":"http://www.wikidata.org/entity/Q223258","itemLabel":"Bohuslav Martinů","influenced_by":"http://www.wikidata.org/entity/Q313376","influenced_byLabel":"Albert Roussel"},{"item":"http://www.wikidata.org/entity/Q19507654","itemLabel":"Julia Klumpke","influenced_by":"http://www.wikidata.org/entity/Q312857","influenced_byLabel":"Eugène Ysaÿe"},{"item":"http://www.wikidata.org/entity/Q156023","itemLabel":"Franz Xaver Wolfgang Mozart","influenced_by":"http://www.wikidata.org/entity/Q314164","influenced_byLabel":"Johann Georg Albrechtsberger"},{"item":"http://www.wikidata.org/entity/Q185312","itemLabel":"Giovanni Battista Pergolesi","influenced_by":"http://www.wikidata.org/entity/Q314221","influenced_byLabel":"Francesco Durante"},{"item":"http://www.wikidata.org/entity/Q209684","itemLabel":"John Field","influenced_by":"http://www.wikidata.org/entity/Q314164","influenced_byLabel":"Johann Georg Albrechtsberger"},{"item":"http://www.wikidata.org/entity/Q310687","itemLabel":"Niccolò Piccinni","influenced_by":"http://www.wikidata.org/entity/Q314221","influenced_byLabel":"Francesco Durante"},{"item":"http://www.wikidata.org/entity/Q151593","itemLabel":"Olivier Messiaen","influenced_by":"http://www.wikidata.org/entity/Q315879","influenced_byLabel":"Marcel Dupré"},{"item":"http://www.wikidata.org/entity/Q310687","itemLabel":"Niccolò Piccinni","influenced_by":"http://www.wikidata.org/entity/Q316735","influenced_byLabel":"Leonardo Leo"},{"item":"http://www.wikidata.org/entity/Q1684779","itemLabel":"Jean-Claude Touche","influenced_by":"http://www.wikidata.org/entity/Q315879","influenced_byLabel":"Marcel Dupré"},{"item":"http://www.wikidata.org/entity/Q5563663","itemLabel":"Giovanni Andrea Fioroni","influenced_by":"http://www.wikidata.org/entity/Q316735","influenced_byLabel":"Leonardo Leo"},{"item":"http://www.wikidata.org/entity/Q1203","itemLabel":"John Lennon","influenced_by":"http://www.wikidata.org/entity/Q317427","influenced_byLabel":"Donovan"},{"item":"http://www.wikidata.org/entity/Q57244","itemLabel":"Paul Hindemith","influenced_by":"http://www.wikidata.org/entity/Q317523","influenced_byLabel":"Bernhard Sekles"},{"item":"http://www.wikidata.org/entity/Q63485943","itemLabel":"Carmen Studer","influenced_by":"http://www.wikidata.org/entity/Q316920","influenced_byLabel":"Felix Weingartner"},{"item":"http://www.wikidata.org/entity/Q41309","itemLabel":"Franz Liszt","influenced_by":"http://www.wikidata.org/entity/Q350325","influenced_byLabel":"Adam Liszt"},{"item":"http://www.wikidata.org/entity/Q294225","itemLabel":"Enrique Granados","influenced_by":"http://www.wikidata.org/entity/Q351394","influenced_byLabel":"Felip Pedrell"},{"item":"http://www.wikidata.org/entity/Q2000816","itemLabel":"Théodore Akimenko","influenced_by":"http://www.wikidata.org/entity/Q348282","influenced_byLabel":"Anatoly Lyadov"},{"item":"http://www.wikidata.org/entity/Q20512883","itemLabel":"Vardan Sargsyan","influenced_by":"http://www.wikidata.org/entity/Q351670","influenced_byLabel":"Komitas"},{"item":"http://www.wikidata.org/entity/Q207947","itemLabel":"Ralph Vaughan Williams","influenced_by":"http://www.wikidata.org/entity/Q354250","influenced_byLabel":"Hubert Parry"},{"item":"http://www.wikidata.org/entity/Q323117","itemLabel":"Cyril Rootham","influenced_by":"http://www.wikidata.org/entity/Q354250","influenced_byLabel":"Hubert Parry"},{"item":"http://www.wikidata.org/entity/Q15434980","itemLabel":"Airelle Besson","influenced_by":"http://www.wikidata.org/entity/Q356179","influenced_byLabel":"Roger Guérin"},{"item":"http://www.wikidata.org/entity/Q170348","itemLabel":"Paul Wittgenstein","influenced_by":"http://www.wikidata.org/entity/Q362340","influenced_byLabel":"Theodor Leschetizky"},{"item":"http://www.wikidata.org/entity/Q553959","itemLabel":"Nikolai Zverev","influenced_by":"http://www.wikidata.org/entity/Q362139","influenced_byLabel":"Adolf von Henselt"},{"item":"http://www.wikidata.org/entity/Q947291","itemLabel":"Vasily Safonov","influenced_by":"http://www.wikidata.org/entity/Q362340","influenced_byLabel":"Theodor Leschetizky"},{"item":"http://www.wikidata.org/entity/Q94932471","itemLabel":"Karl Alt","influenced_by":"http://www.wikidata.org/entity/Q361662","influenced_byLabel":"Adolph Friedrich Hesse"},{"item":"http://www.wikidata.org/entity/Q57285","itemLabel":"Wilhelm Furtwängler","influenced_by":"http://www.wikidata.org/entity/Q365555","influenced_byLabel":"Josef Rheinberger"},{"item":"http://www.wikidata.org/entity/Q48184","itemLabel":"György Kurtág","influenced_by":"http://www.wikidata.org/entity/Q367539","influenced_byLabel":"Ferenc Farkas"},{"item":"http://www.wikidata.org/entity/Q200867","itemLabel":"Gustav Holst","influenced_by":"http://www.wikidata.org/entity/Q368264","influenced_byLabel":"Charles Villiers Stanford"},{"item":"http://www.wikidata.org/entity/Q207947","itemLabel":"Ralph Vaughan Williams","influenced_by":"http://www.wikidata.org/entity/Q368264","influenced_byLabel":"Charles Villiers Stanford"},{"item":"http://www.wikidata.org/entity/Q323117","itemLabel":"Cyril Rootham","influenced_by":"http://www.wikidata.org/entity/Q368264","influenced_byLabel":"Charles Villiers Stanford"},{"item":"http://www.wikidata.org/entity/Q1391355","itemLabel":"Mischa Elman","influenced_by":"http://www.wikidata.org/entity/Q368583","influenced_byLabel":"Leopold Auer"},{"item":"http://www.wikidata.org/entity/Q15485187","itemLabel":"Nigel Clarke","influenced_by":"http://www.wikidata.org/entity/Q370878","influenced_byLabel":"Paul Patterson"},{"item":"http://www.wikidata.org/entity/Q83326","itemLabel":"Béla Bartók","influenced_by":"http://www.wikidata.org/entity/Q371740","influenced_byLabel":"Hans von Koessler"},{"item":"http://www.wikidata.org/entity/Q83326","itemLabel":"Béla Bartók","influenced_by":"http://www.wikidata.org/entity/Q375024","influenced_byLabel":"István Thomán"},{"item":"http://www.wikidata.org/entity/Q735560","itemLabel":"Imre Ungár","influenced_by":"http://www.wikidata.org/entity/Q375024","influenced_byLabel":"István Thomán"},{"item":"http://www.wikidata.org/entity/Q1000563","itemLabel":"György Ferenczy","influenced_by":"http://www.wikidata.org/entity/Q375024","influenced_byLabel":"István Thomán"},{"item":"http://www.wikidata.org/entity/Q2735112","itemLabel":"William Babell","influenced_by":"http://www.wikidata.org/entity/Q371825","influenced_byLabel":"Johann Christoph Pepusch"},{"item":"http://www.wikidata.org/entity/Q77311750","itemLabel":"Albin Nedler","influenced_by":"http://www.wikidata.org/entity/Q384159","influenced_byLabel":"Rami Yacoub"},{"item":"http://www.wikidata.org/entity/Q48184","itemLabel":"György Kurtág","influenced_by":"http://www.wikidata.org/entity/Q389262","influenced_byLabel":"Pál Kadosa"},{"item":"http://www.wikidata.org/entity/Q533113","itemLabel":"Sándor Svéd","influenced_by":"http://www.wikidata.org/entity/Q426361","influenced_byLabel":"Mario Sammarco"},{"item":"http://www.wikidata.org/entity/Q503672","itemLabel":"Magnus Lindberg","influenced_by":"http://www.wikidata.org/entity/Q433592","influenced_byLabel":"Einojuhani Rautavaara"},{"item":"http://www.wikidata.org/entity/Q3369456","itemLabel":"Patrick Fournillier","influenced_by":"http://www.wikidata.org/entity/Q433480","influenced_byLabel":"Louis Fourestier"},{"item":"http://www.wikidata.org/entity/Q5042363","itemLabel":"Carlos Mena","influenced_by":"http://www.wikidata.org/entity/Q433939","influenced_byLabel":"René Jacobs"},{"item":"http://www.wikidata.org/entity/Q9726","itemLabel":"Gioachino Rossini","influenced_by":"http://www.wikidata.org/entity/Q434726","influenced_byLabel":"Stanislao Mattei"},{"item":"http://www.wikidata.org/entity/Q180727","itemLabel":"John Cage","influenced_by":"http://www.wikidata.org/entity/Q434610","influenced_byLabel":"Henry Cowell"},{"item":"http://www.wikidata.org/entity/Q1268","itemLabel":"Frédéric Chopin","influenced_by":"http://www.wikidata.org/entity/Q443519","influenced_byLabel":"Wojciech Żywny"},{"item":"http://www.wikidata.org/entity/Q7351","itemLabel":"Robert Schumann","influenced_by":"http://www.wikidata.org/entity/Q440809","influenced_byLabel":"Friedrich Wieck"},{"item":"http://www.wikidata.org/entity/Q452081","itemLabel":"Pierre Jamet","influenced_by":"http://www.wikidata.org/entity/Q442337","influenced_byLabel":"Lily Laskine"},{"item":"http://www.wikidata.org/entity/Q3025551","itemLabel":"Devy Erlih","influenced_by":"http://www.wikidata.org/entity/Q445802","influenced_byLabel":"Jules Boucherit"},{"item":"http://www.wikidata.org/entity/Q21088137","itemLabel":"Yasuko Uyama-Bouvard","influenced_by":"http://www.wikidata.org/entity/Q446103","influenced_byLabel":"Huguette Dreyfus"},{"item":"http://www.wikidata.org/entity/Q29578373","itemLabel":"Jocelyne Cuiller","influenced_by":"http://www.wikidata.org/entity/Q446103","influenced_byLabel":"Huguette Dreyfus"},{"item":"http://www.wikidata.org/entity/Q74392220","itemLabel":"Dominique Ferran","influenced_by":"http://www.wikidata.org/entity/Q445121","influenced_byLabel":"Ton Koopman"},{"item":"http://www.wikidata.org/entity/Q1192","itemLabel":"Jean-Baptiste Lully","influenced_by":"http://www.wikidata.org/entity/Q450147","influenced_byLabel":"Nicolas Métru"},{"item":"http://www.wikidata.org/entity/Q53098208","itemLabel":"Frédérique Cambreling","influenced_by":"http://www.wikidata.org/entity/Q452081","influenced_byLabel":"Pierre Jamet"},{"item":"http://www.wikidata.org/entity/Q46096","itemLabel":"Felix Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q452414","influenced_byLabel":"Ludwig Berger"},{"item":"http://www.wikidata.org/entity/Q27882102","itemLabel":"Sofia Grigorievna Rubinstein","influenced_by":"http://www.wikidata.org/entity/Q456028","influenced_byLabel":"Henriette Nissen-Saloman"},{"item":"http://www.wikidata.org/entity/Q7311","itemLabel":"Giacomo Puccini","influenced_by":"http://www.wikidata.org/entity/Q461296","influenced_byLabel":"Antonio Bazzini"},{"item":"http://www.wikidata.org/entity/Q46096","itemLabel":"Felix Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q460587","influenced_byLabel":"Marie Bigot"},{"item":"http://www.wikidata.org/entity/Q1483651","itemLabel":"Toshio Hosokawa","influenced_by":"http://www.wikidata.org/entity/Q462291","influenced_byLabel":"Brian Ferneyhough"},{"item":"http://www.wikidata.org/entity/Q3665510","itemLabel":"Cesare Pollini","influenced_by":"http://www.wikidata.org/entity/Q461296","influenced_byLabel":"Antonio Bazzini"},{"item":"http://www.wikidata.org/entity/Q49285863","itemLabel":"Ingeborg Uggla-Rosén","influenced_by":"http://www.wikidata.org/entity/Q463065","influenced_byLabel":"André Lhote"},{"item":"http://www.wikidata.org/entity/Q1233831","itemLabel":"Ralph Gibson","influenced_by":"http://www.wikidata.org/entity/Q467574","influenced_byLabel":"Robert Frank"},{"item":"http://www.wikidata.org/entity/Q1268","itemLabel":"Frédéric Chopin","influenced_by":"http://www.wikidata.org/entity/Q471647","influenced_byLabel":"Józef Elsner"},{"item":"http://www.wikidata.org/entity/Q2004683","itemLabel":"Carolus Luython","influenced_by":"http://www.wikidata.org/entity/Q473422","influenced_byLabel":"Jacobus Vaet"},{"item":"http://www.wikidata.org/entity/Q16183509","itemLabel":"Gudbrand Bøhn","influenced_by":"http://www.wikidata.org/entity/Q482750","influenced_byLabel":"Ana Chumachenco"},{"item":"http://www.wikidata.org/entity/Q28222206","itemLabel":"Linus Roth","influenced_by":"http://www.wikidata.org/entity/Q482750","influenced_byLabel":"Ana Chumachenco"},{"item":"http://www.wikidata.org/entity/Q56863474","itemLabel":"Q56863474","influenced_by":"http://www.wikidata.org/entity/Q481019","influenced_byLabel":"Friedrich August Kummer"},{"item":"http://www.wikidata.org/entity/Q94943441","itemLabel":"Johann Andreas Grabau","influenced_by":"http://www.wikidata.org/entity/Q481019","influenced_byLabel":"Friedrich August Kummer"},{"item":"http://www.wikidata.org/entity/Q1779","itemLabel":"Louis Armstrong","influenced_by":"http://www.wikidata.org/entity/Q487021","influenced_byLabel":"Bunk Johnson"},{"item":"http://www.wikidata.org/entity/Q152768","itemLabel":"Daniel Barenboim","influenced_by":"http://www.wikidata.org/entity/Q503355","influenced_byLabel":"Igor Markevitch"},{"item":"http://www.wikidata.org/entity/Q345927","itemLabel":"Peter Kooy","influenced_by":"http://www.wikidata.org/entity/Q503650","influenced_byLabel":"Max van Egmond"},{"item":"http://www.wikidata.org/entity/Q2062832","itemLabel":"Nikolai Karetnikov","influenced_by":"http://www.wikidata.org/entity/Q504286","influenced_byLabel":"Vissarion Shebalin"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q497831","influenced_byLabel":"Andreas Hallén"},{"item":"http://www.wikidata.org/entity/Q7024721","itemLabel":"Shalom Ronli-Riklis","influenced_by":"http://www.wikidata.org/entity/Q503355","influenced_byLabel":"Igor Markevitch"},{"item":"http://www.wikidata.org/entity/Q472114","itemLabel":"Radu Lupu","influenced_by":"http://www.wikidata.org/entity/Q506613","influenced_byLabel":"Heinrich Neuhaus"},{"item":"http://www.wikidata.org/entity/Q3180496","itemLabel":"Johann August Just","influenced_by":"http://www.wikidata.org/entity/Q505543","influenced_byLabel":"Johann Kirnberger"},{"item":"http://www.wikidata.org/entity/Q6782364","itemLabel":"Masahiro Andoh","influenced_by":"http://www.wikidata.org/entity/Q504996","influenced_byLabel":"Masayuki Takayanagi"},{"item":"http://www.wikidata.org/entity/Q7294","itemLabel":"Johannes Brahms","influenced_by":"http://www.wikidata.org/entity/Q509843","influenced_byLabel":"Eduard Marxsen"},{"item":"http://www.wikidata.org/entity/Q72543","itemLabel":"Charles Koechlin","influenced_by":"http://www.wikidata.org/entity/Q518773","influenced_byLabel":"André Gedalge"},{"item":"http://www.wikidata.org/entity/Q77177","itemLabel":"George Enescu","influenced_by":"http://www.wikidata.org/entity/Q518773","influenced_byLabel":"André Gedalge"},{"item":"http://www.wikidata.org/entity/Q296828","itemLabel":"Jacques Ibert","influenced_by":"http://www.wikidata.org/entity/Q518773","influenced_byLabel":"André Gedalge"},{"item":"http://www.wikidata.org/entity/Q825094","itemLabel":"Bernhard Gmelin","influenced_by":"http://www.wikidata.org/entity/Q522054","influenced_byLabel":"André Navarra"},{"item":"http://www.wikidata.org/entity/Q1892818","itemLabel":"Marc Steckar","influenced_by":"http://www.wikidata.org/entity/Q520430","influenced_byLabel":"André Lafosse"},{"item":"http://www.wikidata.org/entity/Q3084801","itemLabel":"François Guye","influenced_by":"http://www.wikidata.org/entity/Q522054","influenced_byLabel":"André Navarra"},{"item":"http://www.wikidata.org/entity/Q19629154","itemLabel":"Christian Gavillet","influenced_by":"http://www.wikidata.org/entity/Q520796","influenced_byLabel":"Niels-Henning Ørsted Pedersen"},{"item":"http://www.wikidata.org/entity/Q19945015","itemLabel":"François Cupis","influenced_by":"http://www.wikidata.org/entity/Q517573","influenced_byLabel":"Martin Berteau"},{"item":"http://www.wikidata.org/entity/Q362639","itemLabel":"Ferdinand Hérold","influenced_by":"http://www.wikidata.org/entity/Q523581","influenced_byLabel":"François-Joseph Fétis"},{"item":"http://www.wikidata.org/entity/Q374582","itemLabel":"Antoine Elwart","influenced_by":"http://www.wikidata.org/entity/Q523581","influenced_byLabel":"François-Joseph Fétis"},{"item":"http://www.wikidata.org/entity/Q3121215","itemLabel":"Gustave Huberti","influenced_by":"http://www.wikidata.org/entity/Q523581","influenced_byLabel":"François-Joseph Fétis"},{"item":"http://www.wikidata.org/entity/Q3380434","itemLabel":"Philippe Muller","influenced_by":"http://www.wikidata.org/entity/Q522054","influenced_byLabel":"André Navarra"},{"item":"http://www.wikidata.org/entity/Q1339","itemLabel":"Johann Sebastian Bach","influenced_by":"http://www.wikidata.org/entity/Q528445","influenced_byLabel":"Johann Ludwig Bach"},{"item":"http://www.wikidata.org/entity/Q1238235","itemLabel":"Dominique Lacasa","influenced_by":"http://www.wikidata.org/entity/Q531954","influenced_byLabel":"Judy Niemack"},{"item":"http://www.wikidata.org/entity/Q2451955","itemLabel":"Yves Rechsteiner","influenced_by":"http://www.wikidata.org/entity/Q530997","influenced_byLabel":"Jesper Christensen"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q530664","influenced_byLabel":"Rudolf Maria Breithaupt"},{"item":"http://www.wikidata.org/entity/Q19629154","itemLabel":"Christian Gavillet","influenced_by":"http://www.wikidata.org/entity/Q530997","influenced_byLabel":"Jesper Christensen"},{"item":"http://www.wikidata.org/entity/Q41309","itemLabel":"Franz Liszt","influenced_by":"http://www.wikidata.org/entity/Q533022","influenced_byLabel":"Ferdinando Paer"},{"item":"http://www.wikidata.org/entity/Q128085","itemLabel":"Georg Solti","influenced_by":"http://www.wikidata.org/entity/Q535323","influenced_byLabel":"Leo Weiner"},{"item":"http://www.wikidata.org/entity/Q1000563","itemLabel":"György Ferenczy","influenced_by":"http://www.wikidata.org/entity/Q535323","influenced_byLabel":"Leo Weiner"},{"item":"http://www.wikidata.org/entity/Q3514305","itemLabel":"Takenori Nemoto","influenced_by":"http://www.wikidata.org/entity/Q535257","influenced_byLabel":"Henriette Puig-Roget"},{"item":"http://www.wikidata.org/entity/Q57244","itemLabel":"Paul Hindemith","influenced_by":"http://www.wikidata.org/entity/Q537538","influenced_byLabel":"Arnold Mendelssohn"},{"item":"http://www.wikidata.org/entity/Q74392220","itemLabel":"Dominique Ferran","influenced_by":"http://www.wikidata.org/entity/Q544223","influenced_byLabel":"Xavier Darasse"},{"item":"http://www.wikidata.org/entity/Q254","itemLabel":"Wolfgang Amadeus Mozart","influenced_by":"http://www.wikidata.org/entity/Q550279","influenced_byLabel":"Johann Schobert"},{"item":"http://www.wikidata.org/entity/Q325059","itemLabel":"Ruben Liljefors","influenced_by":"http://www.wikidata.org/entity/Q547227","influenced_byLabel":"Salomon Jadassohn"},{"item":"http://www.wikidata.org/entity/Q1398795","itemLabel":"Fausto Romitelli","influenced_by":"http://www.wikidata.org/entity/Q550236","influenced_byLabel":"Franco Donatoni"},{"item":"http://www.wikidata.org/entity/Q4030","itemLabel":"Duke Ellington","influenced_by":"http://www.wikidata.org/entity/Q645393","influenced_byLabel":"Willie \"Big Eyes\" Smith"},{"item":"http://www.wikidata.org/entity/Q381726","itemLabel":"Leif Segerstam","influenced_by":"http://www.wikidata.org/entity/Q651112","influenced_byLabel":"Joonas Kokkonen"},{"item":"http://www.wikidata.org/entity/Q672800","itemLabel":"August Wenzinger","influenced_by":"http://www.wikidata.org/entity/Q650161","influenced_byLabel":"Philipp Jarnach"},{"item":"http://www.wikidata.org/entity/Q48184","itemLabel":"György Kurtág","influenced_by":"http://www.wikidata.org/entity/Q665460","influenced_byLabel":"Sándor Veress"},{"item":"http://www.wikidata.org/entity/Q58857","itemLabel":"Carl Friedrich Zelter","influenced_by":"http://www.wikidata.org/entity/Q675033","influenced_byLabel":"Carl Friedrich Christian Fasch"},{"item":"http://www.wikidata.org/entity/Q6968907","itemLabel":"Nathan Berg","influenced_by":"http://www.wikidata.org/entity/Q668978","influenced_byLabel":"Vera Rózsa"},{"item":"http://www.wikidata.org/entity/Q19356992","itemLabel":"Stepan Rostomyan","influenced_by":"http://www.wikidata.org/entity/Q666763","influenced_byLabel":"Avet Terterian"},{"item":"http://www.wikidata.org/entity/Q24647238","itemLabel":"León Simar","influenced_by":"http://www.wikidata.org/entity/Q674550","influenced_byLabel":"Armand Marsick"},{"item":"http://www.wikidata.org/entity/Q67132208","itemLabel":"Totis Karalivanos","influenced_by":"http://www.wikidata.org/entity/Q674550","influenced_byLabel":"Armand Marsick"},{"item":"http://www.wikidata.org/entity/Q153637","itemLabel":"Dietrich Buxtehude","influenced_by":"http://www.wikidata.org/entity/Q686557","influenced_byLabel":"Johann Theile"},{"item":"http://www.wikidata.org/entity/Q2451955","itemLabel":"Yves Rechsteiner","influenced_by":"http://www.wikidata.org/entity/Q679671","influenced_byLabel":"Guy Bovet"},{"item":"http://www.wikidata.org/entity/Q239214","itemLabel":"Karl Goldmark","influenced_by":"http://www.wikidata.org/entity/Q695079","influenced_byLabel":"Leopold Jansa"},{"item":"http://www.wikidata.org/entity/Q362340","itemLabel":"Theodor Leschetizky","influenced_by":"http://www.wikidata.org/entity/Q688395","influenced_byLabel":"Julius Schulhoff"},{"item":"http://www.wikidata.org/entity/Q490381","itemLabel":"Michael Haydn","influenced_by":"http://www.wikidata.org/entity/Q691733","influenced_byLabel":"Georg Reutter II"},{"item":"http://www.wikidata.org/entity/Q73855434","itemLabel":"Eri Mantani","influenced_by":"http://www.wikidata.org/entity/Q695717","influenced_byLabel":"Jörg Demus"},{"item":"http://www.wikidata.org/entity/Q77177","itemLabel":"George Enescu","influenced_by":"http://www.wikidata.org/entity/Q698074","influenced_byLabel":"Joseph Hellmesberger"},{"item":"http://www.wikidata.org/entity/Q78808","itemLabel":"Georg Hellmesberger","influenced_by":"http://www.wikidata.org/entity/Q700771","influenced_byLabel":"Joseph Böhm"},{"item":"http://www.wikidata.org/entity/Q84821","itemLabel":"Carl Heissler","influenced_by":"http://www.wikidata.org/entity/Q698074","influenced_byLabel":"Joseph Hellmesberger"},{"item":"http://www.wikidata.org/entity/Q84821","itemLabel":"Carl Heissler","influenced_by":"http://www.wikidata.org/entity/Q700771","influenced_byLabel":"Joseph Böhm"},{"item":"http://www.wikidata.org/entity/Q156023","itemLabel":"Franz Xaver Wolfgang Mozart","influenced_by":"http://www.wikidata.org/entity/Q698066","influenced_byLabel":"Sigismund von Neukomm"},{"item":"http://www.wikidata.org/entity/Q239214","itemLabel":"Karl Goldmark","influenced_by":"http://www.wikidata.org/entity/Q700771","influenced_byLabel":"Joseph Böhm"},{"item":"http://www.wikidata.org/entity/Q694070","itemLabel":"Felix Mottl","influenced_by":"http://www.wikidata.org/entity/Q698074","influenced_byLabel":"Joseph Hellmesberger"},{"item":"http://www.wikidata.org/entity/Q57285","itemLabel":"Wilhelm Furtwängler","influenced_by":"http://www.wikidata.org/entity/Q704926","influenced_byLabel":"Max von Schillings"},{"item":"http://www.wikidata.org/entity/Q122998","itemLabel":"Pauline Viardot","influenced_by":"http://www.wikidata.org/entity/Q704645","influenced_byLabel":"Manuel García"},{"item":"http://www.wikidata.org/entity/Q311791","itemLabel":"Nikolai Rubinstein","influenced_by":"http://www.wikidata.org/entity/Q706082","influenced_byLabel":"Theodor Kullak"},{"item":"http://www.wikidata.org/entity/Q1376058","itemLabel":"Francesco Soriano","influenced_by":"http://www.wikidata.org/entity/Q706287","influenced_byLabel":"Giovanni Maria Nanino"},{"item":"http://www.wikidata.org/entity/Q79023","itemLabel":"Bedřich Diviš Weber","influenced_by":"http://www.wikidata.org/entity/Q708557","influenced_byLabel":"Georg Joseph Vogler"},{"item":"http://www.wikidata.org/entity/Q105237","itemLabel":"Giacomo Meyerbeer","influenced_by":"http://www.wikidata.org/entity/Q708557","influenced_byLabel":"Georg Joseph Vogler"},{"item":"http://www.wikidata.org/entity/Q3638094","itemLabel":"Benedetto Neri","influenced_by":"http://www.wikidata.org/entity/Q708209","influenced_byLabel":"Nicola Sala"},{"item":"http://www.wikidata.org/entity/Q21535025","itemLabel":"Staffan Norlind","influenced_by":"http://www.wikidata.org/entity/Q708482","influenced_byLabel":"Othon Friesz"},{"item":"http://www.wikidata.org/entity/Q7314","itemLabel":"Igor Stravinsky","influenced_by":"http://www.wikidata.org/entity/Q708738","influenced_byLabel":"Vasily Kalafati"},{"item":"http://www.wikidata.org/entity/Q447350","itemLabel":"Jelly d'Arányi","influenced_by":"http://www.wikidata.org/entity/Q709178","influenced_byLabel":"Jenő Hubay"},{"item":"http://www.wikidata.org/entity/Q983555","itemLabel":"Hanuš Wihan","influenced_by":"http://www.wikidata.org/entity/Q708593","influenced_byLabel":"Karl Davydov"},{"item":"http://www.wikidata.org/entity/Q83430050","itemLabel":"Juliette Gaultier de la Vérendrye","influenced_by":"http://www.wikidata.org/entity/Q709178","influenced_byLabel":"Jenő Hubay"},{"item":"http://www.wikidata.org/entity/Q96656589","itemLabel":"Jane Parker-Smith","influenced_by":"http://www.wikidata.org/entity/Q551533","influenced_byLabel":"Jean Langlais"},{"item":"http://www.wikidata.org/entity/Q191408","itemLabel":"Francis Poulenc","influenced_by":"http://www.wikidata.org/entity/Q554188","influenced_byLabel":"Ricard Viñes"},{"item":"http://www.wikidata.org/entity/Q2451343","itemLabel":"Lūcija Garūta","influenced_by":"http://www.wikidata.org/entity/Q553252","influenced_byLabel":"Jāzeps Vītols"},{"item":"http://www.wikidata.org/entity/Q3938913","itemLabel":"Roberto Lupi","influenced_by":"http://www.wikidata.org/entity/Q556560","influenced_byLabel":"Arrigo Pedrollo"},{"item":"http://www.wikidata.org/entity/Q374582","itemLabel":"Antoine Elwart","influenced_by":"http://www.wikidata.org/entity/Q559659","influenced_byLabel":"Jean-François Le Sueur"},{"item":"http://www.wikidata.org/entity/Q62376","itemLabel":"Siegfried Wilhelm Dehn","influenced_by":"http://www.wikidata.org/entity/Q566522","influenced_byLabel":"Bernhard Klein"},{"item":"http://www.wikidata.org/entity/Q549442","itemLabel":"Helmut Lachenmann","influenced_by":"http://www.wikidata.org/entity/Q565484","influenced_byLabel":"Johann Nepomuk David"},{"item":"http://www.wikidata.org/entity/Q694070","itemLabel":"Felix Mottl","influenced_by":"http://www.wikidata.org/entity/Q569463","influenced_byLabel":"Felix Otto Dessoff"},{"item":"http://www.wikidata.org/entity/Q1554875","itemLabel":"Gunter Damisch","influenced_by":"http://www.wikidata.org/entity/Q563515","influenced_byLabel":"Arnulf Rainer"},{"item":"http://www.wikidata.org/entity/Q74392220","itemLabel":"Dominique Ferran","influenced_by":"http://www.wikidata.org/entity/Q563321","influenced_byLabel":"Kenneth Gilbert"},{"item":"http://www.wikidata.org/entity/Q94841652","itemLabel":"Hugo Hamann","influenced_by":"http://www.wikidata.org/entity/Q566457","influenced_byLabel":"Hans Sitt"},{"item":"http://www.wikidata.org/entity/Q94847951","itemLabel":"Leo Schwarz","influenced_by":"http://www.wikidata.org/entity/Q566457","influenced_byLabel":"Hans Sitt"},{"item":"http://www.wikidata.org/entity/Q782832","itemLabel":"Carlo Alfredo Piatti","influenced_by":"http://www.wikidata.org/entity/Q571562","influenced_byLabel":"Bernhard Molique"},{"item":"http://www.wikidata.org/entity/Q6265358","itemLabel":"John Zundel","influenced_by":"http://www.wikidata.org/entity/Q571562","influenced_byLabel":"Bernhard Molique"},{"item":"http://www.wikidata.org/entity/Q4700","itemLabel":"Claude Debussy","influenced_by":"http://www.wikidata.org/entity/Q586181","influenced_byLabel":"Antoine François Marmontel"},{"item":"http://www.wikidata.org/entity/Q81752","itemLabel":"Anton Bruckner","influenced_by":"http://www.wikidata.org/entity/Q582713","influenced_byLabel":"Simon Sechter"},{"item":"http://www.wikidata.org/entity/Q362340","itemLabel":"Theodor Leschetizky","influenced_by":"http://www.wikidata.org/entity/Q582713","influenced_byLabel":"Simon Sechter"},{"item":"http://www.wikidata.org/entity/Q57285","itemLabel":"Wilhelm Furtwängler","influenced_by":"http://www.wikidata.org/entity/Q588230","influenced_byLabel":"Anton Beer-Walbrunn"},{"item":"http://www.wikidata.org/entity/Q72543","itemLabel":"Charles Koechlin","influenced_by":"http://www.wikidata.org/entity/Q587023","influenced_byLabel":"Antoine Taudou"},{"item":"http://www.wikidata.org/entity/Q15434980","itemLabel":"Airelle Besson","influenced_by":"http://www.wikidata.org/entity/Q592440","influenced_byLabel":"Daniel Humair"},{"item":"http://www.wikidata.org/entity/Q24809594","itemLabel":"Ronan Khalil","influenced_by":"http://www.wikidata.org/entity/Q590410","influenced_byLabel":"Christophe Rousset"},{"item":"http://www.wikidata.org/entity/Q276038","itemLabel":"Riccardo Muti","influenced_by":"http://www.wikidata.org/entity/Q599279","influenced_byLabel":"Antonino Votto"},{"item":"http://www.wikidata.org/entity/Q323195","itemLabel":"Pieter-Jan Belder","influenced_by":"http://www.wikidata.org/entity/Q603270","influenced_byLabel":"Bob van Asperen"},{"item":"http://www.wikidata.org/entity/Q349491","itemLabel":"Alberto Zedda","influenced_by":"http://www.wikidata.org/entity/Q599279","influenced_byLabel":"Antonino Votto"},{"item":"http://www.wikidata.org/entity/Q1712499","itemLabel":"Julius Berger","influenced_by":"http://www.wikidata.org/entity/Q602560","influenced_byLabel":"Antonio Janigro"},{"item":"http://www.wikidata.org/entity/Q60297622","itemLabel":"Jordi Reguant Danés","influenced_by":"http://www.wikidata.org/entity/Q603270","influenced_byLabel":"Bob van Asperen"},{"item":"http://www.wikidata.org/entity/Q70150","itemLabel":"Maria Kliegel","influenced_by":"http://www.wikidata.org/entity/Q617920","influenced_byLabel":"János Starker"},{"item":"http://www.wikidata.org/entity/Q5929922","itemLabel":"Jesús Bola","influenced_by":"http://www.wikidata.org/entity/Q610544","influenced_byLabel":"Antón García Abril"},{"item":"http://www.wikidata.org/entity/Q6429875","itemLabel":"Enrique Muñoz Rubio","influenced_by":"http://www.wikidata.org/entity/Q610544","influenced_byLabel":"Antón García Abril"},{"item":"http://www.wikidata.org/entity/Q19918214","itemLabel":"Władysław Górski","influenced_by":"http://www.wikidata.org/entity/Q618892","influenced_byLabel":"Apollinaire de Kontski"},{"item":"http://www.wikidata.org/entity/Q47209219","itemLabel":"Q47209219","influenced_by":"http://www.wikidata.org/entity/Q609387","influenced_byLabel":"Ants Laikmaa"},{"item":"http://www.wikidata.org/entity/Q5546857","itemLabel":"Per-Gunnar Alldahl","influenced_by":"http://www.wikidata.org/entity/Q629243","influenced_byLabel":"Ingvar Lidholm"},{"item":"http://www.wikidata.org/entity/Q6202527","itemLabel":"Knut Sönstevold","influenced_by":"http://www.wikidata.org/entity/Q638929","influenced_byLabel":"Miklós Maros"},{"item":"http://www.wikidata.org/entity/Q185312","itemLabel":"Giovanni Battista Pergolesi","influenced_by":"http://www.wikidata.org/entity/Q1339827","influenced_byLabel":"Gaetano Greco"},{"item":"http://www.wikidata.org/entity/Q3771261","itemLabel":"Giuseppe Porsile","influenced_by":"http://www.wikidata.org/entity/Q1339827","influenced_byLabel":"Gaetano Greco"},{"item":"http://www.wikidata.org/entity/Q105875","itemLabel":"Herbie Hancock","influenced_by":"http://www.wikidata.org/entity/Q1348509","influenced_byLabel":"Vittorio Giannini"},{"item":"http://www.wikidata.org/entity/Q1279223","itemLabel":"Eberhard Metternich","influenced_by":"http://www.wikidata.org/entity/Q1351264","influenced_byLabel":"Eric Ericson"},{"item":"http://www.wikidata.org/entity/Q1696955","itemLabel":"Johanna Irmscher","influenced_by":"http://www.wikidata.org/entity/Q1351264","influenced_byLabel":"Eric Ericson"},{"item":"http://www.wikidata.org/entity/Q1903429","itemLabel":"Martin Berger","influenced_by":"http://www.wikidata.org/entity/Q1351264","influenced_byLabel":"Eric Ericson"},{"item":"http://www.wikidata.org/entity/Q6240680","itemLabel":"Ingvar Wieslander","influenced_by":"http://www.wikidata.org/entity/Q1347677","influenced_byLabel":"Tony Aubin"},{"item":"http://www.wikidata.org/entity/Q537022","itemLabel":"Marion Verbruggen","influenced_by":"http://www.wikidata.org/entity/Q711810","influenced_byLabel":"Frans Brüggen"},{"item":"http://www.wikidata.org/entity/Q1961157","itemLabel":"Marijke Miessen","influenced_by":"http://www.wikidata.org/entity/Q711810","influenced_byLabel":"Frans Brüggen"},{"item":"http://www.wikidata.org/entity/Q2084910","itemLabel":"Walter van Hauwe","influenced_by":"http://www.wikidata.org/entity/Q711810","influenced_byLabel":"Frans Brüggen"},{"item":"http://www.wikidata.org/entity/Q28039475","itemLabel":"Mark Fromm","influenced_by":"http://www.wikidata.org/entity/Q712049","influenced_byLabel":"Leonardo Balada"},{"item":"http://www.wikidata.org/entity/Q67132208","itemLabel":"Totis Karalivanos","influenced_by":"http://www.wikidata.org/entity/Q712762","influenced_byLabel":"Manolis Kalomiris"},{"item":"http://www.wikidata.org/entity/Q21535025","itemLabel":"Staffan Norlind","influenced_by":"http://www.wikidata.org/entity/Q716732","influenced_byLabel":"Carl Wilhelmson"},{"item":"http://www.wikidata.org/entity/Q209684","itemLabel":"John Field","influenced_by":"http://www.wikidata.org/entity/Q718406","influenced_byLabel":"Tommaso Giordani"},{"item":"http://www.wikidata.org/entity/Q4349720","itemLabel":"Sequeira Costa","influenced_by":"http://www.wikidata.org/entity/Q721465","influenced_byLabel":"José Vianna da Motta"},{"item":"http://www.wikidata.org/entity/Q62739","itemLabel":"Christian Zacharias","influenced_by":"http://www.wikidata.org/entity/Q725456","influenced_byLabel":"Vlado Perlemuter"},{"item":"http://www.wikidata.org/entity/Q18880107","itemLabel":"Margaret Read","influenced_by":"http://www.wikidata.org/entity/Q724969","influenced_byLabel":"Donald Tovey"},{"item":"http://www.wikidata.org/entity/Q215556","itemLabel":"Paul Dukas","influenced_by":"http://www.wikidata.org/entity/Q727341","influenced_byLabel":"Ernest Guiraud"},{"item":"http://www.wikidata.org/entity/Q5570962","itemLabel":"Ignácz Caroly Beôrecz","influenced_by":"http://www.wikidata.org/entity/Q730008","influenced_byLabel":"Bruno Liljefors"},{"item":"http://www.wikidata.org/entity/Q83309","itemLabel":"Johann Strauss II","influenced_by":"http://www.wikidata.org/entity/Q733099","influenced_byLabel":"Joseph Drechsler"},{"item":"http://www.wikidata.org/entity/Q354250","itemLabel":"Hubert Parry","influenced_by":"http://www.wikidata.org/entity/Q746420","influenced_byLabel":"Samuel Sebastian Wesley"},{"item":"http://www.wikidata.org/entity/Q5740785","itemLabel":"Hermann Kotzschmar","influenced_by":"http://www.wikidata.org/entity/Q747254","influenced_byLabel":"Ernst Julius Otto"},{"item":"http://www.wikidata.org/entity/Q24647238","itemLabel":"León Simar","influenced_by":"http://www.wikidata.org/entity/Q746748","influenced_byLabel":"Sylvain Dupuis"},{"item":"http://www.wikidata.org/entity/Q243837","itemLabel":"Ottorino Respighi","influenced_by":"http://www.wikidata.org/entity/Q769966","influenced_byLabel":"Giuseppe Martucci"},{"item":"http://www.wikidata.org/entity/Q959789","itemLabel":"Josef Proksch","influenced_by":"http://www.wikidata.org/entity/Q768095","influenced_byLabel":"Jan Antonín Koželuh"},{"item":"http://www.wikidata.org/entity/Q98598301","itemLabel":"Q98598301","influenced_by":"http://www.wikidata.org/entity/Q783464","influenced_byLabel":"Ernesto Cavallini"},{"item":"http://www.wikidata.org/entity/Q21535025","itemLabel":"Staffan Norlind","influenced_by":"http://www.wikidata.org/entity/Q792080","influenced_byLabel":"Axel Ebbe"},{"item":"http://www.wikidata.org/entity/Q325059","itemLabel":"Ruben Liljefors","influenced_by":"http://www.wikidata.org/entity/Q826804","influenced_byLabel":"Hermann Ludwig Kutzschbach"},{"item":"http://www.wikidata.org/entity/Q365557","itemLabel":"Rodolphus Agricola","influenced_by":"http://www.wikidata.org/entity/Q810966","influenced_byLabel":"Battista Guarino"},{"item":"http://www.wikidata.org/entity/Q62050086","itemLabel":"Olivier Pirotte","influenced_by":"http://www.wikidata.org/entity/Q816847","influenced_byLabel":"Benedetto Luti"},{"item":"http://www.wikidata.org/entity/Q15616790","itemLabel":"Hege Waldeland","influenced_by":"http://www.wikidata.org/entity/Q883730","influenced_byLabel":"Erling Blöndal Bengtsson"},{"item":"http://www.wikidata.org/entity/Q80204983","itemLabel":"Q80204983","influenced_by":"http://www.wikidata.org/entity/Q876342","influenced_byLabel":"Fritz Neumeyer"},{"item":"http://www.wikidata.org/entity/Q47490953","itemLabel":"Christopher Thomas","influenced_by":"http://www.wikidata.org/entity/Q902649","influenced_byLabel":"David Klöcker Ehrenstrahl"},{"item":"http://www.wikidata.org/entity/Q46992312","itemLabel":"Tony Blomdahl","influenced_by":"http://www.wikidata.org/entity/Q920770","influenced_byLabel":"Sven-David Sandström"},{"item":"http://www.wikidata.org/entity/Q1779","itemLabel":"Louis Armstrong","influenced_by":"http://www.wikidata.org/entity/Q1001073","influenced_byLabel":"Buddie Petit"},{"item":"http://www.wikidata.org/entity/Q3169469","itemLabel":"Kees Otten","influenced_by":"http://www.wikidata.org/entity/Q1037501","influenced_byLabel":"Carl Dolmetsch"},{"item":"http://www.wikidata.org/entity/Q73808012","itemLabel":"Kai Rapsch","influenced_by":"http://www.wikidata.org/entity/Q1016436","influenced_byLabel":"Burkhard Glaetzner"},{"item":"http://www.wikidata.org/entity/Q963003","itemLabel":"Robert Thurston Dart","influenced_by":"http://www.wikidata.org/entity/Q1066297","influenced_byLabel":"Charles Van den Borren"},{"item":"http://www.wikidata.org/entity/Q22915648","itemLabel":"Arthur Olaf Andersen","influenced_by":"http://www.wikidata.org/entity/Q1065471","influenced_byLabel":"Charles Martin Loeffler"},{"item":"http://www.wikidata.org/entity/Q715155","itemLabel":"Peter Frankl","influenced_by":"http://www.wikidata.org/entity/Q1103126","influenced_byLabel":"Ilona Kabos"},{"item":"http://www.wikidata.org/entity/Q19629154","itemLabel":"Christian Gavillet","influenced_by":"http://www.wikidata.org/entity/Q1175237","influenced_byLabel":"Dave Liebman"},{"item":"http://www.wikidata.org/entity/Q12281204","itemLabel":"Ivan Staykov","influenced_by":"http://www.wikidata.org/entity/Q1225831","influenced_byLabel":"Dimitar Nenov"},{"item":"http://www.wikidata.org/entity/Q787201","itemLabel":"Alireza Ghorbani","influenced_by":"http://www.wikidata.org/entity/Q1238247","influenced_byLabel":"Mohammad-Reza Shajarian"},{"item":"http://www.wikidata.org/entity/Q189729","itemLabel":"Philip Glass","influenced_by":"http://www.wikidata.org/entity/Q1269450","influenced_byLabel":"Vincent Persichetti"},{"item":"http://www.wikidata.org/entity/Q1821872","itemLabel":"Levi Yitzchok of Berditchev","influenced_by":"http://www.wikidata.org/entity/Q1253011","influenced_byLabel":"Dov Ber of Mezeritch"},{"item":"http://www.wikidata.org/entity/Q20509482","itemLabel":"Q20509482","influenced_by":"http://www.wikidata.org/entity/Q1283947","influenced_byLabel":"Edgar Hovhannisyan"},{"item":"http://www.wikidata.org/entity/Q6761282","itemLabel":"Maria Jane Williams","influenced_by":"http://www.wikidata.org/entity/Q937452","influenced_byLabel":"Elias Parish Alvars"},{"item":"http://www.wikidata.org/entity/Q9695","itemLabel":"Henry Purcell","influenced_by":"http://www.wikidata.org/entity/Q941345","influenced_byLabel":"Pelham Humfrey"},{"item":"http://www.wikidata.org/entity/Q1451270","itemLabel":"François d'Agincourt","influenced_by":"http://www.wikidata.org/entity/Q944492","influenced_byLabel":"Nicolas Lebègue"},{"item":"http://www.wikidata.org/entity/Q309648","itemLabel":"Charles Ives","influenced_by":"http://www.wikidata.org/entity/Q957738","influenced_byLabel":"Horatio Parker"},{"item":"http://www.wikidata.org/entity/Q504291","itemLabel":"Alberto Ponce","influenced_by":"http://www.wikidata.org/entity/Q957563","influenced_byLabel":"Emilio Pujol"},{"item":"http://www.wikidata.org/entity/Q17391642","itemLabel":"Carles Trepat","influenced_by":"http://www.wikidata.org/entity/Q957563","influenced_byLabel":"Emilio Pujol"},{"item":"http://www.wikidata.org/entity/Q165706","itemLabel":"Rodion Shchedrin","influenced_by":"http://www.wikidata.org/entity/Q963055","influenced_byLabel":"Yuri Shaporin"},{"item":"http://www.wikidata.org/entity/Q457010","itemLabel":"Igor Kipnis","influenced_by":"http://www.wikidata.org/entity/Q963003","influenced_byLabel":"Robert Thurston Dart"},{"item":"http://www.wikidata.org/entity/Q5993605","itemLabel":"Manuel Manrique de Lara y Berry","influenced_by":"http://www.wikidata.org/entity/Q964682","influenced_byLabel":"Ruperto Chapí"},{"item":"http://www.wikidata.org/entity/Q60297622","itemLabel":"Jordi Reguant Danés","influenced_by":"http://www.wikidata.org/entity/Q965256","influenced_byLabel":"Alan Curtis"},{"item":"http://www.wikidata.org/entity/Q470619","itemLabel":"Inspectah Deck","influenced_by":"http://www.wikidata.org/entity/Q969016","influenced_byLabel":"Cappadonna"},{"item":"http://www.wikidata.org/entity/Q553959","itemLabel":"Nikolai Zverev","influenced_by":"http://www.wikidata.org/entity/Q968109","influenced_byLabel":"Alexandre Dubuque"},{"item":"http://www.wikidata.org/entity/Q6240680","itemLabel":"Ingvar Wieslander","influenced_by":"http://www.wikidata.org/entity/Q968672","influenced_byLabel":"Lars-Erik Larsson"},{"item":"http://www.wikidata.org/entity/Q29578373","itemLabel":"Jocelyne Cuiller","influenced_by":"http://www.wikidata.org/entity/Q974717","influenced_byLabel":"Samson François"},{"item":"http://www.wikidata.org/entity/Q1290210","itemLabel":"Eduard Toldrà","influenced_by":"http://www.wikidata.org/entity/Q981481","influenced_byLabel":"Lluís Millet"},{"item":"http://www.wikidata.org/entity/Q94901826","itemLabel":"Emanuel Storch","influenced_by":"http://www.wikidata.org/entity/Q994926","influenced_byLabel":"Josef Hrabě"},{"item":"http://www.wikidata.org/entity/Q212512","itemLabel":"Hariprasad Chaurasia","influenced_by":"http://www.wikidata.org/entity/Q2440940","influenced_byLabel":"Annapurna Devi"},{"item":"http://www.wikidata.org/entity/Q674739","itemLabel":"Alexander Mackenzie","influenced_by":"http://www.wikidata.org/entity/Q2443056","influenced_byLabel":"Prosper Sainton"},{"item":"http://www.wikidata.org/entity/Q24809594","itemLabel":"Ronan Khalil","influenced_by":"http://www.wikidata.org/entity/Q2462092","influenced_byLabel":"Pascal Dubreuil"},{"item":"http://www.wikidata.org/entity/Q7317","itemLabel":"Giuseppe Verdi","influenced_by":"http://www.wikidata.org/entity/Q2526926","influenced_byLabel":"Vincenzo Lavigna"},{"item":"http://www.wikidata.org/entity/Q183087","itemLabel":"Alessandro Scarlatti","influenced_by":"http://www.wikidata.org/entity/Q2526825","influenced_byLabel":"Vincenzo Amato"},{"item":"http://www.wikidata.org/entity/Q1267054","itemLabel":"Ziryab","influenced_by":"http://www.wikidata.org/entity/Q2481412","influenced_byLabel":"Ishaq al-Mawsili"},{"item":"http://www.wikidata.org/entity/Q18018618","itemLabel":"Barbara Probst-Polášek","influenced_by":"http://www.wikidata.org/entity/Q2501791","influenced_byLabel":"Ursula Peter"},{"item":"http://www.wikidata.org/entity/Q19691944","itemLabel":"Branko Ivanković","influenced_by":"http://www.wikidata.org/entity/Q2478801","influenced_byLabel":"Uroš Lajovic"},{"item":"http://www.wikidata.org/entity/Q24647238","itemLabel":"León Simar","influenced_by":"http://www.wikidata.org/entity/Q2489960","influenced_byLabel":"Carl Smulders"},{"item":"http://www.wikidata.org/entity/Q94916386","itemLabel":"Ludwig Haase","influenced_by":"http://www.wikidata.org/entity/Q2507238","influenced_byLabel":"Giovanni Battista Polledro"},{"item":"http://www.wikidata.org/entity/Q2361757","itemLabel":"Aygün Kazimova","influenced_by":"http://www.wikidata.org/entity/Q2564419","influenced_byLabel":"Eldar Mansurov"},{"item":"http://www.wikidata.org/entity/Q6202527","itemLabel":"Knut Sönstevold","influenced_by":"http://www.wikidata.org/entity/Q2561672","influenced_byLabel":"Werner Kaegi"},{"item":"http://www.wikidata.org/entity/Q1125383","itemLabel":"Antonio Pappano","influenced_by":"http://www.wikidata.org/entity/Q1556190","influenced_byLabel":"Gustav Meier"},{"item":"http://www.wikidata.org/entity/Q5993116","itemLabel":"Olallo Morales","influenced_by":"http://www.wikidata.org/entity/Q1599103","influenced_byLabel":"Heinrich Urban"},{"item":"http://www.wikidata.org/entity/Q194638","itemLabel":"Arnold Dolmetsch","influenced_by":"http://www.wikidata.org/entity/Q1606875","influenced_byLabel":"Henry Holmes"},{"item":"http://www.wikidata.org/entity/Q15434980","itemLabel":"Airelle Besson","influenced_by":"http://www.wikidata.org/entity/Q1628257","influenced_byLabel":"Riccardo Del Fra"},{"item":"http://www.wikidata.org/entity/Q60297622","itemLabel":"Jordi Reguant Danés","influenced_by":"http://www.wikidata.org/entity/Q1682366","influenced_byLabel":"Jan Willem Jansen"},{"item":"http://www.wikidata.org/entity/Q5916637","itemLabel":"Sigurd von Koch","influenced_by":"http://www.wikidata.org/entity/Q1688549","influenced_byLabel":"Karl Kämpf"},{"item":"http://www.wikidata.org/entity/Q64282","itemLabel":"Antonio Angeleri","influenced_by":"http://www.wikidata.org/entity/Q1351579","influenced_byLabel":"Francesco Pollini"},{"item":"http://www.wikidata.org/entity/Q77177","itemLabel":"George Enescu","influenced_by":"http://www.wikidata.org/entity/Q1356601","influenced_byLabel":"Martin Pierre Marsick"},{"item":"http://www.wikidata.org/entity/Q465311","itemLabel":"Yuja Wang","influenced_by":"http://www.wikidata.org/entity/Q1356487","influenced_byLabel":"Leon Fleisher"},{"item":"http://www.wikidata.org/entity/Q1451270","itemLabel":"François d'Agincourt","influenced_by":"http://www.wikidata.org/entity/Q1355872","influenced_byLabel":"Jacques Boyvin"},{"item":"http://www.wikidata.org/entity/Q28061859","itemLabel":"Hiroko Sasaki","influenced_by":"http://www.wikidata.org/entity/Q1356487","influenced_byLabel":"Leon Fleisher"},{"item":"http://www.wikidata.org/entity/Q1192","itemLabel":"Jean-Baptiste Lully","influenced_by":"http://www.wikidata.org/entity/Q1361183","influenced_byLabel":"Nicolas Gigault"},{"item":"http://www.wikidata.org/entity/Q312857","itemLabel":"Eugène Ysaÿe","influenced_by":"http://www.wikidata.org/entity/Q1358737","influenced_byLabel":"Lambert Massart"},{"item":"http://www.wikidata.org/entity/Q1178","itemLabel":"Maurice Ravel","influenced_by":"http://www.wikidata.org/entity/Q1373421","influenced_byLabel":"Eugène Anthiome"},{"item":"http://www.wikidata.org/entity/Q1268","itemLabel":"Frédéric Chopin","influenced_by":"http://www.wikidata.org/entity/Q1364373","influenced_byLabel":"Wilhelm Würfel"},{"item":"http://www.wikidata.org/entity/Q253845","itemLabel":"Hélène Grimaud","influenced_by":"http://www.wikidata.org/entity/Q1365596","influenced_byLabel":"Jacques Rouvier"},{"item":"http://www.wikidata.org/entity/Q947291","itemLabel":"Vasily Safonov","influenced_by":"http://www.wikidata.org/entity/Q1367651","influenced_byLabel":"Louis Brassin"},{"item":"http://www.wikidata.org/entity/Q2833280","itemLabel":"Alexandra Grot","influenced_by":"http://www.wikidata.org/entity/Q1369119","influenced_byLabel":"Pierre-Yves Artaud"},{"item":"http://www.wikidata.org/entity/Q7210458","itemLabel":"Václav Snítil","influenced_by":"http://www.wikidata.org/entity/Q1375563","influenced_byLabel":"Jaroslav Kocián"},{"item":"http://www.wikidata.org/entity/Q328532","itemLabel":"Paul Zukofsky","influenced_by":"http://www.wikidata.org/entity/Q1382535","influenced_byLabel":"Ivan Galamian"},{"item":"http://www.wikidata.org/entity/Q442337","itemLabel":"Lily Laskine","influenced_by":"http://www.wikidata.org/entity/Q1383914","influenced_byLabel":"Alphonse Hasselmans"},{"item":"http://www.wikidata.org/entity/Q557525","itemLabel":"Marcel Tournier","influenced_by":"http://www.wikidata.org/entity/Q1383914","influenced_byLabel":"Alphonse Hasselmans"},{"item":"http://www.wikidata.org/entity/Q16457","itemLabel":"Claudia Barainsky","influenced_by":"http://www.wikidata.org/entity/Q1400225","influenced_byLabel":"Ingrid Figur"},{"item":"http://www.wikidata.org/entity/Q215120","itemLabel":"Cole Porter","influenced_by":"http://www.wikidata.org/entity/Q1426421","influenced_byLabel":"Pietro Yon"},{"item":"http://www.wikidata.org/entity/Q718368","itemLabel":"Ruggiero Ricci","influenced_by":"http://www.wikidata.org/entity/Q1403108","influenced_byLabel":"Louis Persinger"},{"item":"http://www.wikidata.org/entity/Q2342114","itemLabel":"Stella Doufexis","influenced_by":"http://www.wikidata.org/entity/Q1400225","influenced_byLabel":"Ingrid Figur"},{"item":"http://www.wikidata.org/entity/Q18965725","itemLabel":"Sonya Monosoff","influenced_by":"http://www.wikidata.org/entity/Q1403108","influenced_byLabel":"Louis Persinger"},{"item":"http://www.wikidata.org/entity/Q64767999","itemLabel":"José Espeita García-Arista","influenced_by":"http://www.wikidata.org/entity/Q1406785","influenced_byLabel":"Higinio Anglés"},{"item":"http://www.wikidata.org/entity/Q311791","itemLabel":"Nikolai Rubinstein","influenced_by":"http://www.wikidata.org/entity/Q1449611","influenced_byLabel":"Franz Xaver Gebel"},{"item":"http://www.wikidata.org/entity/Q150445","itemLabel":"Camille Saint-Saëns","influenced_by":"http://www.wikidata.org/entity/Q1450915","influenced_byLabel":"François Benoist"},{"item":"http://www.wikidata.org/entity/Q296828","itemLabel":"Jacques Ibert","influenced_by":"http://www.wikidata.org/entity/Q1460425","influenced_byLabel":"Paul Vidal"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q1460425","influenced_byLabel":"Paul Vidal"},{"item":"http://www.wikidata.org/entity/Q15434980","itemLabel":"Airelle Besson","influenced_by":"http://www.wikidata.org/entity/Q1451075","influenced_byLabel":"François Jeanneau"},{"item":"http://www.wikidata.org/entity/Q74241643","itemLabel":"László Ujházy","influenced_by":"http://www.wikidata.org/entity/Q1461396","influenced_byLabel":"Károly Váczi"},{"item":"http://www.wikidata.org/entity/Q3022888","itemLabel":"Denis Raisin Dadre","influenced_by":"http://www.wikidata.org/entity/Q1489247","influenced_byLabel":"Gabriel Garrido"},{"item":"http://www.wikidata.org/entity/Q97502978","itemLabel":"Q97502978","influenced_by":"http://www.wikidata.org/entity/Q3154657","influenced_byLabel":"Irène Popard"},{"item":"http://www.wikidata.org/entity/Q67587","itemLabel":"Bernhard Cossmann","influenced_by":"http://www.wikidata.org/entity/Q1730761","influenced_byLabel":"Karl Drexler"},{"item":"http://www.wikidata.org/entity/Q322111","itemLabel":"Philippe Pierlot","influenced_by":"http://www.wikidata.org/entity/Q1766760","influenced_byLabel":"Wieland Kuijken"},{"item":"http://www.wikidata.org/entity/Q1339","itemLabel":"Johann Sebastian Bach","influenced_by":"http://www.wikidata.org/entity/Q1862395","influenced_byLabel":"Johann Christoph Bach III"},{"item":"http://www.wikidata.org/entity/Q46096","itemLabel":"Felix Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q1810407","influenced_byLabel":"Lea Mendelssohn Bartholdy"},{"item":"http://www.wikidata.org/entity/Q50186","itemLabel":"François Couperin","influenced_by":"http://www.wikidata.org/entity/Q1858637","influenced_byLabel":"Jacques Thomelin"},{"item":"http://www.wikidata.org/entity/Q817376","itemLabel":"Benjamin Alard","influenced_by":"http://www.wikidata.org/entity/Q1872001","influenced_byLabel":"Louis Thiry"},{"item":"http://www.wikidata.org/entity/Q18759689","itemLabel":"Frank Christoph Schnitzler","influenced_by":"http://www.wikidata.org/entity/Q1870969","influenced_byLabel":"Lothar Schall"},{"item":"http://www.wikidata.org/entity/Q4700","itemLabel":"Claude Debussy","influenced_by":"http://www.wikidata.org/entity/Q1934522","influenced_byLabel":"Albert Lavignac"},{"item":"http://www.wikidata.org/entity/Q151593","itemLabel":"Olivier Messiaen","influenced_by":"http://www.wikidata.org/entity/Q1934922","influenced_byLabel":"Noël Gallon"},{"item":"http://www.wikidata.org/entity/Q1554875","itemLabel":"Gunter Damisch","influenced_by":"http://www.wikidata.org/entity/Q1914043","influenced_byLabel":"Maximilian Melcher"},{"item":"http://www.wikidata.org/entity/Q28039475","itemLabel":"Mark Fromm","influenced_by":"http://www.wikidata.org/entity/Q1964489","influenced_byLabel":"Nancy Galbraith"},{"item":"http://www.wikidata.org/entity/Q52257448","itemLabel":"Sébastien Marq","influenced_by":"http://www.wikidata.org/entity/Q1961157","influenced_byLabel":"Marijke Miessen"},{"item":"http://www.wikidata.org/entity/Q1178","itemLabel":"Maurice Ravel","influenced_by":"http://www.wikidata.org/entity/Q1995861","influenced_byLabel":"Charles-Wilfrid de Bériot"},{"item":"http://www.wikidata.org/entity/Q53068","itemLabel":"Claudio Monteverdi","influenced_by":"http://www.wikidata.org/entity/Q1995396","influenced_byLabel":"Marc'Antonio Ingegneri"},{"item":"http://www.wikidata.org/entity/Q207947","itemLabel":"Ralph Vaughan Williams","influenced_by":"http://www.wikidata.org/entity/Q1992128","influenced_byLabel":"Walter Parratt"},{"item":"http://www.wikidata.org/entity/Q215556","itemLabel":"Paul Dukas","influenced_by":"http://www.wikidata.org/entity/Q1995898","influenced_byLabel":"Georges Mathias"},{"item":"http://www.wikidata.org/entity/Q294225","itemLabel":"Enrique Granados","influenced_by":"http://www.wikidata.org/entity/Q1995861","influenced_byLabel":"Charles-Wilfrid de Bériot"},{"item":"http://www.wikidata.org/entity/Q323117","itemLabel":"Cyril Rootham","influenced_by":"http://www.wikidata.org/entity/Q1992128","influenced_byLabel":"Walter Parratt"},{"item":"http://www.wikidata.org/entity/Q6240680","itemLabel":"Ingvar Wieslander","influenced_by":"http://www.wikidata.org/entity/Q1993141","influenced_byLabel":"Tor Mann"},{"item":"http://www.wikidata.org/entity/Q81752","itemLabel":"Anton Bruckner","influenced_by":"http://www.wikidata.org/entity/Q2039537","influenced_byLabel":"Otto Kitzler"},{"item":"http://www.wikidata.org/entity/Q294225","itemLabel":"Enrique Granados","influenced_by":"http://www.wikidata.org/entity/Q2025221","influenced_byLabel":"Joan Baptista  Pujol"},{"item":"http://www.wikidata.org/entity/Q19356992","itemLabel":"Stepan Rostomyan","influenced_by":"http://www.wikidata.org/entity/Q2033471","influenced_byLabel":"Ghazaros Saryan"},{"item":"http://www.wikidata.org/entity/Q62376","itemLabel":"Siegfried Wilhelm Dehn","influenced_by":"http://www.wikidata.org/entity/Q2063165","influenced_byLabel":"Paul Anton Wineberger"},{"item":"http://www.wikidata.org/entity/Q25478765","itemLabel":"Kiril Ilievski","influenced_by":"http://www.wikidata.org/entity/Q2051861","influenced_byLabel":"Parashkev Hadjiev"},{"item":"http://www.wikidata.org/entity/Q2849837","itemLabel":"Angèle Dubeau","influenced_by":"http://www.wikidata.org/entity/Q2082014","influenced_byLabel":"Ștefan Gheorghiu"},{"item":"http://www.wikidata.org/entity/Q52257448","itemLabel":"Sébastien Marq","influenced_by":"http://www.wikidata.org/entity/Q2084910","influenced_byLabel":"Walter van Hauwe"},{"item":"http://www.wikidata.org/entity/Q52259706","itemLabel":"Pierre Hamon","influenced_by":"http://www.wikidata.org/entity/Q2084910","influenced_byLabel":"Walter van Hauwe"},{"item":"http://www.wikidata.org/entity/Q168039","itemLabel":"Philippe Herreweghe","influenced_by":"http://www.wikidata.org/entity/Q2123121","influenced_byLabel":"Gabriël Verschraegen"},{"item":"http://www.wikidata.org/entity/Q316427","itemLabel":"Morton Feldman","influenced_by":"http://www.wikidata.org/entity/Q2143377","influenced_byLabel":"Wallingford Riegger"},{"item":"http://www.wikidata.org/entity/Q328800","itemLabel":"Gheorghe Zamfir","influenced_by":"http://www.wikidata.org/entity/Q2121801","influenced_byLabel":"Fănică Luca"},{"item":"http://www.wikidata.org/entity/Q12739020","itemLabel":"Radu Simion","influenced_by":"http://www.wikidata.org/entity/Q2121801","influenced_byLabel":"Fănică Luca"},{"item":"http://www.wikidata.org/entity/Q50186","itemLabel":"François Couperin","influenced_by":"http://www.wikidata.org/entity/Q2187815","influenced_byLabel":"Charles Couperin"},{"item":"http://www.wikidata.org/entity/Q362106","itemLabel":"Boris Christoff","influenced_by":"http://www.wikidata.org/entity/Q2261719","influenced_byLabel":"Riccardo Stracciari"},{"item":"http://www.wikidata.org/entity/Q533113","itemLabel":"Sándor Svéd","influenced_by":"http://www.wikidata.org/entity/Q2261719","influenced_byLabel":"Riccardo Stracciari"},{"item":"http://www.wikidata.org/entity/Q55842967","itemLabel":"Bernard Diamant","influenced_by":"http://www.wikidata.org/entity/Q2238279","influenced_byLabel":"Marius van 't Kruijs"},{"item":"http://www.wikidata.org/entity/Q9695","itemLabel":"Henry Purcell","influenced_by":"http://www.wikidata.org/entity/Q2281698","influenced_byLabel":"Henry Cooke"},{"item":"http://www.wikidata.org/entity/Q552272","itemLabel":"Antonio Bertali","influenced_by":"http://www.wikidata.org/entity/Q2338352","influenced_byLabel":"Stefano Bernardi"},{"item":"http://www.wikidata.org/entity/Q1382535","itemLabel":"Ivan Galamian","influenced_by":"http://www.wikidata.org/entity/Q2353641","influenced_byLabel":"Lucien Capet"},{"item":"http://www.wikidata.org/entity/Q64356052","itemLabel":"Bertha Webb","influenced_by":"http://www.wikidata.org/entity/Q2362136","influenced_byLabel":"Camilla Urso"},{"item":"http://www.wikidata.org/entity/Q1871508","itemLabel":"Louis Bailly","influenced_by":"http://www.wikidata.org/entity/Q2430607","influenced_byLabel":"Théophile Laforge"},{"item":"http://www.wikidata.org/entity/Q74392220","itemLabel":"Dominique Ferran","influenced_by":"http://www.wikidata.org/entity/Q2424360","influenced_byLabel":"Antoine Geoffroy-Dechaume"},{"item":"http://www.wikidata.org/entity/Q93341","itemLabel":"Miles Davis","influenced_by":"http://www.wikidata.org/entity/Q2580837","influenced_byLabel":"William Vacchiano"},{"item":"http://www.wikidata.org/entity/Q25483625","itemLabel":"Q25483625","influenced_by":"http://www.wikidata.org/entity/Q2587180","influenced_byLabel":"Vladimir Avramov"},{"item":"http://www.wikidata.org/entity/Q72301547","itemLabel":"Devendra Murdeshwar","influenced_by":"http://www.wikidata.org/entity/Q2602611","influenced_byLabel":"Pannalal Ghosh"},{"item":"http://www.wikidata.org/entity/Q366355","itemLabel":"Van Cliburn","influenced_by":"http://www.wikidata.org/entity/Q2633099","influenced_byLabel":"Rosina Lhévinne"},{"item":"http://www.wikidata.org/entity/Q65924685","itemLabel":"Johan Willgrén","influenced_by":"http://www.wikidata.org/entity/Q2626742","influenced_byLabel":"Adolf Fredrik Leander"},{"item":"http://www.wikidata.org/entity/Q311791","itemLabel":"Nikolai Rubinstein","influenced_by":"http://www.wikidata.org/entity/Q2642338","influenced_byLabel":"Alexander Villoing"},{"item":"http://www.wikidata.org/entity/Q7293491","itemLabel":"Ransom Wilson","influenced_by":"http://www.wikidata.org/entity/Q2670080","influenced_byLabel":"Julius Baker"},{"item":"http://www.wikidata.org/entity/Q7315","itemLabel":"Pyotr Ilyich Tchaikovsky","influenced_by":"http://www.wikidata.org/entity/Q2717812","influenced_byLabel":"Nikolai Zaremba"},{"item":"http://www.wikidata.org/entity/Q947291","itemLabel":"Vasily Safonov","influenced_by":"http://www.wikidata.org/entity/Q2717812","influenced_byLabel":"Nikolai Zaremba"},{"item":"http://www.wikidata.org/entity/Q468356","itemLabel":"Ali Akbar Khan","influenced_by":"http://www.wikidata.org/entity/Q2837826","influenced_byLabel":"Allauddin Khan"},{"item":"http://www.wikidata.org/entity/Q2834895","itemLabel":"Alfred-Alexandre Quentin","influenced_by":"http://www.wikidata.org/entity/Q2853868","influenced_byLabel":"Antoine Dieppo"},{"item":"http://www.wikidata.org/entity/Q2839378","itemLabel":"Aloÿs Fornerod","influenced_by":"http://www.wikidata.org/entity/Q2871410","influenced_byLabel":"Auguste Sérieyx"},{"item":"http://www.wikidata.org/entity/Q711810","itemLabel":"Frans Brüggen","influenced_by":"http://www.wikidata.org/entity/Q3169469","influenced_byLabel":"Kees Otten"},{"item":"http://www.wikidata.org/entity/Q19900926","itemLabel":"Louis-Félix-Achille Dien","influenced_by":"http://www.wikidata.org/entity/Q3184766","influenced_byLabel":"Joseph Clavel"},{"item":"http://www.wikidata.org/entity/Q81752","itemLabel":"Anton Bruckner","influenced_by":"http://www.wikidata.org/entity/Q3229812","influenced_byLabel":"Leopold von Zenetti"},{"item":"http://www.wikidata.org/entity/Q65946388","itemLabel":"Gabriella Swallow","influenced_by":"http://www.wikidata.org/entity/Q3191020","influenced_byLabel":"Jérôme Pernoo"},{"item":"http://www.wikidata.org/entity/Q2830383","itemLabel":"Alain de Chambure","influenced_by":"http://www.wikidata.org/entity/Q3292062","influenced_byLabel":"Marie-Louise Gigout-Boëllmann"},{"item":"http://www.wikidata.org/entity/Q18221358","itemLabel":"Étienne Walhain","influenced_by":"http://www.wikidata.org/entity/Q3263030","influenced_byLabel":"Louis Robilliard"},{"item":"http://www.wikidata.org/entity/Q45347437","itemLabel":"Philippe Laval","influenced_by":"http://www.wikidata.org/entity/Q3309692","influenced_byLabel":"Michel Fusté-Lambezat"},{"item":"http://www.wikidata.org/entity/Q65104611","itemLabel":"Juan Balaguer y Capella","influenced_by":"http://www.wikidata.org/entity/Q3298428","influenced_byLabel":"Mateu Ferrer i Oller"},{"item":"http://www.wikidata.org/entity/Q28222206","itemLabel":"Linus Roth","influenced_by":"http://www.wikidata.org/entity/Q3340200","influenced_byLabel":"Nicolas Chumachenco"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q3023067","influenced_byLabel":"Denise Mégevand"},{"item":"http://www.wikidata.org/entity/Q106099","itemLabel":"Jeanne Moreau","influenced_by":"http://www.wikidata.org/entity/Q3022976","influenced_byLabel":"Denis d'Inès"},{"item":"http://www.wikidata.org/entity/Q5676621","itemLabel":"John Ravn","influenced_by":"http://www.wikidata.org/entity/Q3049203","influenced_byLabel":"Egill Jacobsen"},{"item":"http://www.wikidata.org/entity/Q7317","itemLabel":"Giuseppe Verdi","influenced_by":"http://www.wikidata.org/entity/Q3068736","influenced_byLabel":"Ferdinando Provesi"},{"item":"http://www.wikidata.org/entity/Q817376","itemLabel":"Benjamin Alard","influenced_by":"http://www.wikidata.org/entity/Q3085439","influenced_byLabel":"François Ménissier"},{"item":"http://www.wikidata.org/entity/Q15434980","itemLabel":"Airelle Besson","influenced_by":"http://www.wikidata.org/entity/Q3085912","influenced_byLabel":"François Théberge"},{"item":"http://www.wikidata.org/entity/Q24647238","itemLabel":"León Simar","influenced_by":"http://www.wikidata.org/entity/Q3085653","influenced_byLabel":"François Rasse des Noeux"},{"item":"http://www.wikidata.org/entity/Q15303891","itemLabel":"Bahaa Ronda","influenced_by":"http://www.wikidata.org/entity/Q3125812","influenced_byLabel":"Hajj Ahmed Piro"},{"item":"http://www.wikidata.org/entity/Q53098208","itemLabel":"Frédérique Cambreling","influenced_by":"http://www.wikidata.org/entity/Q3123911","influenced_byLabel":"Gérard Devos"},{"item":"http://www.wikidata.org/entity/Q64762677","itemLabel":"Jan Jakub Bokun","influenced_by":"http://www.wikidata.org/entity/Q3121700","influenced_byLabel":"Guy Dangain"},{"item":"http://www.wikidata.org/entity/Q168039","itemLabel":"Philippe Herreweghe","influenced_by":"http://www.wikidata.org/entity/Q3153486","influenced_byLabel":"Marcel Gazelle"},{"item":"http://www.wikidata.org/entity/Q965301","itemLabel":"Scott Ross","influenced_by":"http://www.wikidata.org/entity/Q3142793","influenced_byLabel":"Huguette Grémy-Chauliac"},{"item":"http://www.wikidata.org/entity/Q15434980","itemLabel":"Airelle Besson","influenced_by":"http://www.wikidata.org/entity/Q3385218","influenced_byLabel":"Pierre Gillet"},{"item":"http://www.wikidata.org/entity/Q23988995","itemLabel":"Jérôme Zetterquist","influenced_by":"http://www.wikidata.org/entity/Q3379013","influenced_byLabel":"Fritz Lindström"},{"item":"http://www.wikidata.org/entity/Q28045360","itemLabel":"Andrew M. Boss","influenced_by":"http://www.wikidata.org/entity/Q3424329","influenced_byLabel":"Dan Welcher"},{"item":"http://www.wikidata.org/entity/Q64767999","itemLabel":"José Espeita García-Arista","influenced_by":"http://www.wikidata.org/entity/Q3523741","influenced_byLabel":"Joaquín Zamacois"},{"item":"http://www.wikidata.org/entity/Q208537","itemLabel":"Pau Casals","influenced_by":"http://www.wikidata.org/entity/Q3557653","influenced_byLabel":"Víctor Mirecki Larramat"},{"item":"http://www.wikidata.org/entity/Q21088137","itemLabel":"Yasuko Uyama-Bouvard","influenced_by":"http://www.wikidata.org/entity/Q3580037","influenced_byLabel":"Edouard Souberbielle"},{"item":"http://www.wikidata.org/entity/Q60830660","itemLabel":"Jean-Albert Villard","influenced_by":"http://www.wikidata.org/entity/Q3580037","influenced_byLabel":"Edouard Souberbielle"},{"item":"http://www.wikidata.org/entity/Q160058","itemLabel":"Maurizio Pollini","influenced_by":"http://www.wikidata.org/entity/Q3659952","influenced_byLabel":"Carlo Vidusso"},{"item":"http://www.wikidata.org/entity/Q181885","itemLabel":"Mikhail Glinka","influenced_by":"http://www.wikidata.org/entity/Q3749608","influenced_byLabel":"Francesco Basili"},{"item":"http://www.wikidata.org/entity/Q29419597","itemLabel":"Rosa Rimoch","influenced_by":"http://www.wikidata.org/entity/Q3739263","influenced_byLabel":"Fanny Anitùa"},{"item":"http://www.wikidata.org/entity/Q504969","itemLabel":"Alessandro Moreschi","influenced_by":"http://www.wikidata.org/entity/Q3756925","influenced_byLabel":"Gaetano Capocci"},{"item":"http://www.wikidata.org/entity/Q43439895","itemLabel":"Gaspar Espinosa de los Monteros y Jiménez","influenced_by":"http://www.wikidata.org/entity/Q3818102","influenced_byLabel":"Hilarión Eslava"},{"item":"http://www.wikidata.org/entity/Q62050086","itemLabel":"Olivier Pirotte","influenced_by":"http://www.wikidata.org/entity/Q3903707","influenced_byLabel":"Pietro Bianchi"},{"item":"http://www.wikidata.org/entity/Q3875860","itemLabel":"Niccolò Fabi","influenced_by":"http://www.wikidata.org/entity/Q3938576","influenced_byLabel":"Roberto Antonelli"},{"item":"http://www.wikidata.org/entity/Q3945947","itemLabel":"Salvatore Auteri Manzocchi","influenced_by":"http://www.wikidata.org/entity/Q3983927","influenced_byLabel":"Teodulo Mabellini"},{"item":"http://www.wikidata.org/entity/Q5826555","itemLabel":"John Jacobsson","influenced_by":"http://www.wikidata.org/entity/Q4065295","influenced_byLabel":"Richard Andersson"},{"item":"http://www.wikidata.org/entity/Q5916637","itemLabel":"Sigurd von Koch","influenced_by":"http://www.wikidata.org/entity/Q4065295","influenced_byLabel":"Richard Andersson"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q4103084","influenced_byLabel":"Madeleine de Valmalète"},{"item":"http://www.wikidata.org/entity/Q4441857","itemLabel":"Q4441857","influenced_by":"http://www.wikidata.org/entity/Q4105273","influenced_byLabel":"Karl Friedrich (Theodor) Waterstraat"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q4110974","influenced_byLabel":"Victor Wiklund"},{"item":"http://www.wikidata.org/entity/Q2717812","itemLabel":"Nikolai Zaremba","influenced_by":"http://www.wikidata.org/entity/Q4137199","influenced_byLabel":"Anton Gerke"},{"item":"http://www.wikidata.org/entity/Q12576047","itemLabel":"Q12576047","influenced_by":"http://www.wikidata.org/entity/Q4131692","influenced_byLabel":"Q4131692"},{"item":"http://www.wikidata.org/entity/Q65964261","itemLabel":"Bojana Sovilj","influenced_by":"http://www.wikidata.org/entity/Q4139410","influenced_byLabel":"Liv Glaser"},{"item":"http://www.wikidata.org/entity/Q84821","itemLabel":"Carl Heissler","influenced_by":"http://www.wikidata.org/entity/Q4171146","influenced_byLabel":"Matthias Durst"},{"item":"http://www.wikidata.org/entity/Q2833280","itemLabel":"Alexandra Grot","influenced_by":"http://www.wikidata.org/entity/Q4147096","influenced_byLabel":"Albert Gofman"},{"item":"http://www.wikidata.org/entity/Q19999318","itemLabel":"Ernst Wilhelm Fritsch","influenced_by":"http://www.wikidata.org/entity/Q4167584","influenced_byLabel":"Raimund Dreyschock"},{"item":"http://www.wikidata.org/entity/Q6216934","itemLabel":"Gunnar Turesson","influenced_by":"http://www.wikidata.org/entity/Q4191659","influenced_byLabel":"Lars Zetterquist"},{"item":"http://www.wikidata.org/entity/Q5933154","itemLabel":"Franz von Lampe","influenced_by":"http://www.wikidata.org/entity/Q5565931","influenced_byLabel":"Charles Barkel"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q5620987","influenced_byLabel":"Gustaf Hägg"},{"item":"http://www.wikidata.org/entity/Q27042167","itemLabel":"Q27042167","influenced_by":"http://www.wikidata.org/entity/Q5616375","influenced_byLabel":"Bertil Damm"},{"item":"http://www.wikidata.org/entity/Q5867395","itemLabel":"Francisco Salanova Alfonso","influenced_by":"http://www.wikidata.org/entity/Q5721417","influenced_byLabel":"Bartolomé Raga"},{"item":"http://www.wikidata.org/entity/Q57139","itemLabel":"Max Reger","influenced_by":"http://www.wikidata.org/entity/Q5746691","influenced_byLabel":"Albert Fuchs"},{"item":"http://www.wikidata.org/entity/Q1388181","itemLabel":"Johannes Bach","influenced_by":"http://www.wikidata.org/entity/Q5756629","influenced_byLabel":"Caspar Bach"},{"item":"http://www.wikidata.org/entity/Q5873737","itemLabel":"Gabriela Martínez","influenced_by":"http://www.wikidata.org/entity/Q5749589","influenced_byLabel":"Carlos Alberto Rufino"},{"item":"http://www.wikidata.org/entity/Q21535025","itemLabel":"Staffan Norlind","influenced_by":"http://www.wikidata.org/entity/Q5746452","influenced_byLabel":"Jonas Fröding"},{"item":"http://www.wikidata.org/entity/Q65199353","itemLabel":"Niloofar Mohebbi","influenced_by":"http://www.wikidata.org/entity/Q5758213","influenced_byLabel":"Siavash Zahiraddini"},{"item":"http://www.wikidata.org/entity/Q6386173","itemLabel":"Antonio Gallego Gallego","influenced_by":"http://www.wikidata.org/entity/Q5857868","influenced_byLabel":"Federico Sopeña"},{"item":"http://www.wikidata.org/entity/Q9076231","itemLabel":"Sergio Pérez","influenced_by":"http://www.wikidata.org/entity/Q5830774","influenced_byLabel":"Emil Friedman"},{"item":"http://www.wikidata.org/entity/Q15624500","itemLabel":"Ellen Nisbeth","influenced_by":"http://www.wikidata.org/entity/Q5803099","influenced_byLabel":"Peter Herresthal"},{"item":"http://www.wikidata.org/entity/Q37008191","itemLabel":"Ernst Widegren","influenced_by":"http://www.wikidata.org/entity/Q5826930","influenced_byLabel":"Wilhelm Jaensson"},{"item":"http://www.wikidata.org/entity/Q2635023","itemLabel":"Ali Rahbari","influenced_by":"http://www.wikidata.org/entity/Q5909022","influenced_byLabel":"Hossein Dehlavi"},{"item":"http://www.wikidata.org/entity/Q2580837","itemLabel":"William Vacchiano","influenced_by":"http://www.wikidata.org/entity/Q4525466","influenced_byLabel":"Max Schlossberg"},{"item":"http://www.wikidata.org/entity/Q5347995","itemLabel":"Egil Monn-Iversen","influenced_by":"http://www.wikidata.org/entity/Q4581517","influenced_byLabel":"Robert Levin"},{"item":"http://www.wikidata.org/entity/Q5676621","itemLabel":"John Ravn","influenced_by":"http://www.wikidata.org/entity/Q4588009","influenced_byLabel":"Palle Nielsen"},{"item":"http://www.wikidata.org/entity/Q6202527","itemLabel":"Knut Sönstevold","influenced_by":"http://www.wikidata.org/entity/Q4531446","influenced_byLabel":"Karl Öhlberger"},{"item":"http://www.wikidata.org/entity/Q6419266","itemLabel":"Q6419266","influenced_by":"http://www.wikidata.org/entity/Q4532373","influenced_byLabel":"Xenia Erdeli"},{"item":"http://www.wikidata.org/entity/Q180727","itemLabel":"John Cage","influenced_by":"http://www.wikidata.org/entity/Q4684407","influenced_byLabel":"Adolph Weiss"},{"item":"http://www.wikidata.org/entity/Q5543868","itemLabel":"Tor Ahlberg","influenced_by":"http://www.wikidata.org/entity/Q4724381","influenced_byLabel":"Algot Haquinius"},{"item":"http://www.wikidata.org/entity/Q152880","itemLabel":"Iannis Xenakis","influenced_by":"http://www.wikidata.org/entity/Q4791085","influenced_byLabel":"Aristotelis Koundouroff"},{"item":"http://www.wikidata.org/entity/Q64767999","itemLabel":"José Espeita García-Arista","influenced_by":"http://www.wikidata.org/entity/Q4776178","influenced_byLabel":"Antoni Massana"},{"item":"http://www.wikidata.org/entity/Q945691","itemLabel":"Geoffrey Holder","influenced_by":"http://www.wikidata.org/entity/Q4947181","influenced_byLabel":"Boscoe Holder"},{"item":"http://www.wikidata.org/entity/Q51132069","itemLabel":"Gunnar Wihlborg","influenced_by":"http://www.wikidata.org/entity/Q4976498","influenced_byLabel":"Anna Sahlström"},{"item":"http://www.wikidata.org/entity/Q77311750","itemLabel":"Albin Nedler","influenced_by":"http://www.wikidata.org/entity/Q5040121","influenced_byLabel":"Carl Falk"},{"item":"http://www.wikidata.org/entity/Q97377962","itemLabel":"Jean-Baptiste Van Dorne","influenced_by":"http://www.wikidata.org/entity/Q5069286","influenced_byLabel":"Martin van Dorne"},{"item":"http://www.wikidata.org/entity/Q28045360","itemLabel":"Andrew M. Boss","influenced_by":"http://www.wikidata.org/entity/Q5294440","influenced_byLabel":"Donald Grantham"},{"item":"http://www.wikidata.org/entity/Q93341","itemLabel":"Miles Davis","influenced_by":"http://www.wikidata.org/entity/Q5368321","influenced_byLabel":"Elwood Buchanan"},{"item":"http://www.wikidata.org/entity/Q28039475","itemLabel":"Mark Fromm","influenced_by":"http://www.wikidata.org/entity/Q5387115","influenced_byLabel":"Eric Moe"},{"item":"http://www.wikidata.org/entity/Q83309","itemLabel":"Johann Strauss II","influenced_by":"http://www.wikidata.org/entity/Q5492679","influenced_byLabel":"Franz Amon"},{"item":"http://www.wikidata.org/entity/Q180727","itemLabel":"John Cage","influenced_by":"http://www.wikidata.org/entity/Q5433951","influenced_byLabel":"Fannie Charles Dillon"},{"item":"http://www.wikidata.org/entity/Q194638","itemLabel":"Arnold Dolmetsch","influenced_by":"http://www.wikidata.org/entity/Q5497415","influenced_byLabel":"Frederick Bridge"},{"item":"http://www.wikidata.org/entity/Q1395790","itemLabel":"Francesco Antonio Vallotti","influenced_by":"http://www.wikidata.org/entity/Q5479173","influenced_byLabel":"Francesco Antonio Calegari"},{"item":"http://www.wikidata.org/entity/Q21535888","itemLabel":"Joseph Bradley","influenced_by":"http://www.wikidata.org/entity/Q5497415","influenced_byLabel":"Frederick Bridge"},{"item":"http://www.wikidata.org/entity/Q354250","itemLabel":"Hubert Parry","influenced_by":"http://www.wikidata.org/entity/Q5541104","influenced_byLabel":"George Job Elvey"},{"item":"http://www.wikidata.org/entity/Q6216934","itemLabel":"Gunnar Turesson","influenced_by":"http://www.wikidata.org/entity/Q5553000","influenced_byLabel":"Ture Ander"},{"item":"http://www.wikidata.org/entity/Q46096","itemLabel":"Felix Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q4255225","influenced_byLabel":"Franz Lauska"},{"item":"http://www.wikidata.org/entity/Q105237","itemLabel":"Giacomo Meyerbeer","influenced_by":"http://www.wikidata.org/entity/Q4255225","influenced_byLabel":"Franz Lauska"},{"item":"http://www.wikidata.org/entity/Q4952148","itemLabel":"Hanna Hallberg-Norlind","influenced_by":"http://www.wikidata.org/entity/Q4252341","influenced_byLabel":"August Lagergren"},{"item":"http://www.wikidata.org/entity/Q5916637","itemLabel":"Sigurd von Koch","influenced_by":"http://www.wikidata.org/entity/Q4261948","influenced_byLabel":"Johan Lindegren"},{"item":"http://www.wikidata.org/entity/Q181885","itemLabel":"Mikhail Glinka","influenced_by":"http://www.wikidata.org/entity/Q4274803","influenced_byLabel":"Charles Meyer"},{"item":"http://www.wikidata.org/entity/Q943463","itemLabel":"Richard Tucker","influenced_by":"http://www.wikidata.org/entity/Q4334036","influenced_byLabel":"Paul Shearer Althouse"},{"item":"http://www.wikidata.org/entity/Q1382535","itemLabel":"Ivan Galamian","influenced_by":"http://www.wikidata.org/entity/Q4304714","influenced_byLabel":"Konstantin G. Mostras"},{"item":"http://www.wikidata.org/entity/Q28664550","itemLabel":"Tina Lerner","influenced_by":"http://www.wikidata.org/entity/Q4341199","influenced_byLabel":"Louis Pabst"},{"item":"http://www.wikidata.org/entity/Q95223729","itemLabel":"Kurt Hering","influenced_by":"http://www.wikidata.org/entity/Q4378552","influenced_byLabel":"Karl Prill"},{"item":"http://www.wikidata.org/entity/Q213545","itemLabel":"Rudolf Serkin","influenced_by":"http://www.wikidata.org/entity/Q4395080","influenced_byLabel":"Richard Robert"},{"item":"http://www.wikidata.org/entity/Q310638","itemLabel":"George Szell","influenced_by":"http://www.wikidata.org/entity/Q4395080","influenced_byLabel":"Richard Robert"},{"item":"http://www.wikidata.org/entity/Q323937","itemLabel":"Vitaly Margulis","influenced_by":"http://www.wikidata.org/entity/Q4404337","influenced_byLabel":"Samary Savshinsky"},{"item":"http://www.wikidata.org/entity/Q4535437","itemLabel":"Yuta","influenced_by":"http://www.wikidata.org/entity/Q4409128","influenced_byLabel":"Yury Saulsky"},{"item":"http://www.wikidata.org/entity/Q262078","itemLabel":"İdil Biret","influenced_by":"http://www.wikidata.org/entity/Q4482623","influenced_byLabel":"Mithat Fenmen"},{"item":"http://www.wikidata.org/entity/Q511817","itemLabel":"Andris Nelsons","influenced_by":"http://www.wikidata.org/entity/Q4458238","influenced_byLabel":"Aleksandr Titov"},{"item":"http://www.wikidata.org/entity/Q549442","itemLabel":"Helmut Lachenmann","influenced_by":"http://www.wikidata.org/entity/Q4469352","influenced_byLabel":"Jürgen Uhde"},{"item":"http://www.wikidata.org/entity/Q11836663","itemLabel":"Szabolcs Esztényi","influenced_by":"http://www.wikidata.org/entity/Q4463721","influenced_byLabel":"Margerita Trombini-Kazuro"},{"item":"http://www.wikidata.org/entity/Q51132069","itemLabel":"Gunnar Wihlborg","influenced_by":"http://www.wikidata.org/entity/Q4458075","influenced_byLabel":"Stina Tirén"},{"item":"http://www.wikidata.org/entity/Q19999318","itemLabel":"Ernst Wilhelm Fritsch","influenced_by":"http://www.wikidata.org/entity/Q4497294","influenced_byLabel":"Friedrich Hermann"},{"item":"http://www.wikidata.org/entity/Q94841652","itemLabel":"Hugo Hamann","influenced_by":"http://www.wikidata.org/entity/Q4497294","influenced_byLabel":"Friedrich Hermann"},{"item":"http://www.wikidata.org/entity/Q12280665","itemLabel":"Ivaylo Kraychovski","influenced_by":"http://www.wikidata.org/entity/Q12293737","influenced_byLabel":"Simeon Venkov"},{"item":"http://www.wikidata.org/entity/Q25483625","itemLabel":"Q25483625","influenced_by":"http://www.wikidata.org/entity/Q12295513","influenced_byLabel":"Stoi͡an Dzhudzhev"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q5993116","influenced_byLabel":"Olallo Morales"},{"item":"http://www.wikidata.org/entity/Q5929922","itemLabel":"Jesús Bola","influenced_by":"http://www.wikidata.org/entity/Q5992616","influenced_byLabel":"Manuel Castillo"},{"item":"http://www.wikidata.org/entity/Q6011915","itemLabel":"Svante Nilsson","influenced_by":"http://www.wikidata.org/entity/Q5953336","influenced_byLabel":"Adolf Lindberg"},{"item":"http://www.wikidata.org/entity/Q46992312","itemLabel":"Tony Blomdahl","influenced_by":"http://www.wikidata.org/entity/Q5969124","influenced_byLabel":"Ole Lützow-Holm"},{"item":"http://www.wikidata.org/entity/Q7024721","itemLabel":"Shalom Ronli-Riklis","influenced_by":"http://www.wikidata.org/entity/Q6001076","influenced_byLabel":"Ilona Vincze-Kraus"},{"item":"http://www.wikidata.org/entity/Q263185","itemLabel":"Rosalyn Tureck","influenced_by":"http://www.wikidata.org/entity/Q6148690","influenced_byLabel":"Jan Chiapusso"},{"item":"http://www.wikidata.org/entity/Q5950411","itemLabel":"Juan José Ocón","influenced_by":"http://www.wikidata.org/entity/Q6148413","influenced_byLabel":"Tomás Aragüés"},{"item":"http://www.wikidata.org/entity/Q6011915","itemLabel":"Svante Nilsson","influenced_by":"http://www.wikidata.org/entity/Q6145450","influenced_byLabel":"Sven Kulle"},{"item":"http://www.wikidata.org/entity/Q37008191","itemLabel":"Ernst Widegren","influenced_by":"http://www.wikidata.org/entity/Q6176562","influenced_byLabel":"Karl Konrad Simonsson"},{"item":"http://www.wikidata.org/entity/Q6240680","itemLabel":"Ingvar Wieslander","influenced_by":"http://www.wikidata.org/entity/Q6199195","influenced_byLabel":"Sven E. Svensson"},{"item":"http://www.wikidata.org/entity/Q946146","itemLabel":"Frederik Magle","influenced_by":"http://www.wikidata.org/entity/Q6210100","influenced_byLabel":"Leif Thybo"},{"item":"http://www.wikidata.org/entity/Q28039475","itemLabel":"Mark Fromm","influenced_by":"http://www.wikidata.org/entity/Q6254365","influenced_byLabel":"John Rea"},{"item":"http://www.wikidata.org/entity/Q7141306","itemLabel":"Parvaz Homay","influenced_by":"http://www.wikidata.org/entity/Q6405203","influenced_byLabel":"Fereydoun Pour Reza"},{"item":"http://www.wikidata.org/entity/Q28038204","itemLabel":"Andrew Posner","influenced_by":"http://www.wikidata.org/entity/Q6397282","influenced_byLabel":"Kevin Puts"},{"item":"http://www.wikidata.org/entity/Q28045360","itemLabel":"Andrew M. Boss","influenced_by":"http://www.wikidata.org/entity/Q6397282","influenced_byLabel":"Kevin Puts"},{"item":"http://www.wikidata.org/entity/Q323117","itemLabel":"Cyril Rootham","influenced_by":"http://www.wikidata.org/entity/Q6772034","influenced_byLabel":"Marmaduke Barton"},{"item":"http://www.wikidata.org/entity/Q51754355","itemLabel":"Helena Dix","influenced_by":"http://www.wikidata.org/entity/Q6759773","influenced_byLabel":"Margaret Nisbett"},{"item":"http://www.wikidata.org/entity/Q4499486","itemLabel":"Julia Holter","influenced_by":"http://www.wikidata.org/entity/Q6833552","influenced_byLabel":"Michael Pisaro"},{"item":"http://www.wikidata.org/entity/Q1276","itemLabel":"Leonard Cohen","influenced_by":"http://www.wikidata.org/entity/Q7064751","influenced_byLabel":"Solomon Klonitzky-Kline"},{"item":"http://www.wikidata.org/entity/Q7311563","itemLabel":"Remberto Giménez","influenced_by":"http://www.wikidata.org/entity/Q7030288","influenced_byLabel":"Nicolino Pellegrini"},{"item":"http://www.wikidata.org/entity/Q180727","itemLabel":"John Cage","influenced_by":"http://www.wikidata.org/entity/Q7324433","influenced_byLabel":"Richard Buhlig"},{"item":"http://www.wikidata.org/entity/Q6429875","itemLabel":"Enrique Muñoz Rubio","influenced_by":"http://www.wikidata.org/entity/Q7363400","influenced_byLabel":"Román Alís"},{"item":"http://www.wikidata.org/entity/Q208375","itemLabel":"William Byrd","influenced_by":"http://www.wikidata.org/entity/Q7442551","influenced_byLabel":"Sebastian Westcott"},{"item":"http://www.wikidata.org/entity/Q5676621","itemLabel":"John Ravn","influenced_by":"http://www.wikidata.org/entity/Q7652122","influenced_byLabel":"Svend Wiig Hansen"},{"item":"http://www.wikidata.org/entity/Q6381680","itemLabel":"Kazuo Yamada","influenced_by":"http://www.wikidata.org/entity/Q7674391","influenced_byLabel":"Tadashi Yanada"},{"item":"http://www.wikidata.org/entity/Q21815923","itemLabel":"Takahashi Chikuzan II","influenced_by":"http://www.wikidata.org/entity/Q7677031","influenced_byLabel":"Chikuzan Takahashi"},{"item":"http://www.wikidata.org/entity/Q1557911","itemLabel":"Gwydion Pendderwen","influenced_by":"http://www.wikidata.org/entity/Q7925988","influenced_byLabel":"Victor Henry Anderson"},{"item":"http://www.wikidata.org/entity/Q3778960","itemLabel":"Guglielmo Lipparini","influenced_by":"http://www.wikidata.org/entity/Q7800551","influenced_byLabel":"Tiburtio Massaino"},{"item":"http://www.wikidata.org/entity/Q49285863","itemLabel":"Ingeborg Uggla-Rosén","influenced_by":"http://www.wikidata.org/entity/Q8009333","influenced_byLabel":"William Frank Calderon"},{"item":"http://www.wikidata.org/entity/Q77727162","itemLabel":"Jan Lewtak","influenced_by":"http://www.wikidata.org/entity/Q7945166","influenced_byLabel":"Mirosław Ławrynowicz"},{"item":"http://www.wikidata.org/entity/Q97853319","itemLabel":"Nancy Dols Neithammer","influenced_by":"http://www.wikidata.org/entity/Q7819562","influenced_byLabel":"Tommy Jarrell"},{"item":"http://www.wikidata.org/entity/Q2072834","itemLabel":"Francisco Andrevi","influenced_by":"http://www.wikidata.org/entity/Q8962205","influenced_byLabel":"Francesc Queralt"},{"item":"http://www.wikidata.org/entity/Q9383444","itemLabel":"Ygor Przebindowski","influenced_by":"http://www.wikidata.org/entity/Q9169297","influenced_byLabel":"Bernard Maseli"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q16649713","influenced_byLabel":"Carl Lindhe"},{"item":"http://www.wikidata.org/entity/Q5615115","itemLabel":"Viking Dahl","influenced_by":"http://www.wikidata.org/entity/Q16690483","influenced_byLabel":"Nathalie Radisse"},{"item":"http://www.wikidata.org/entity/Q28025714","itemLabel":"Stig-Åke Lund","influenced_by":"http://www.wikidata.org/entity/Q16632944","influenced_byLabel":"Georgij Fetco"},{"item":"http://www.wikidata.org/entity/Q77727162","itemLabel":"Jan Lewtak","influenced_by":"http://www.wikidata.org/entity/Q16619978","influenced_byLabel":"Zenon Brzewski"},{"item":"http://www.wikidata.org/entity/Q23765788","itemLabel":"Lea Birringer","influenced_by":"http://www.wikidata.org/entity/Q16854379","influenced_byLabel":"Pavel Vernikov"},{"item":"http://www.wikidata.org/entity/Q4892374","itemLabel":"Cassià Maria Just","influenced_by":"http://www.wikidata.org/entity/Q17148075","influenced_byLabel":"Anselm Ferrer i Bargalló"},{"item":"http://www.wikidata.org/entity/Q5347995","itemLabel":"Egil Monn-Iversen","influenced_by":"http://www.wikidata.org/entity/Q17119883","influenced_byLabel":"Hugo Kramm"},{"item":"http://www.wikidata.org/entity/Q81894141","itemLabel":"Cynthia Verazie","influenced_by":"http://www.wikidata.org/entity/Q17093579","influenced_byLabel":"Kristin Groven Holmboe"},{"item":"http://www.wikidata.org/entity/Q56558487","itemLabel":"Q56558487","influenced_by":"http://www.wikidata.org/entity/Q17409229","influenced_byLabel":"Georgi Badev"},{"item":"http://www.wikidata.org/entity/Q47162","itemLabel":"Romain Rolland","influenced_by":"http://www.wikidata.org/entity/Q18414392","influenced_byLabel":"Joséphine Martin"},{"item":"http://www.wikidata.org/entity/Q2072834","itemLabel":"Francisco Andrevi","influenced_by":"http://www.wikidata.org/entity/Q11927908","influenced_byLabel":"Joan Quintana"},{"item":"http://www.wikidata.org/entity/Q9388403","itemLabel":"Zbigniew Wodecki","influenced_by":"http://www.wikidata.org/entity/Q11729370","influenced_byLabel":"Juliusz Weber"},{"item":"http://www.wikidata.org/entity/Q9389804","itemLabel":"Zdzisław Piernik","influenced_by":"http://www.wikidata.org/entity/Q11729338","influenced_byLabel":"Juliusz Pietrachowicz"},{"item":"http://www.wikidata.org/entity/Q64762677","itemLabel":"Jan Jakub Bokun","influenced_by":"http://www.wikidata.org/entity/Q11779989","influenced_byLabel":"Mieczysław Stachura"},{"item":"http://www.wikidata.org/entity/Q64767999","itemLabel":"José Espeita García-Arista","influenced_by":"http://www.wikidata.org/entity/Q11928454","influenced_byLabel":"Josep Barberà i Humbert"},{"item":"http://www.wikidata.org/entity/Q74517003","itemLabel":"Q74517003","influenced_by":"http://www.wikidata.org/entity/Q11928469","influenced_byLabel":"Josep Blanch i Reynalt"},{"item":"http://www.wikidata.org/entity/Q5347995","itemLabel":"Egil Monn-Iversen","influenced_by":"http://www.wikidata.org/entity/Q11998251","influenced_byLabel":"Rolf Holger"},{"item":"http://www.wikidata.org/entity/Q17113808","itemLabel":"Per Wang","influenced_by":"http://www.wikidata.org/entity/Q11957150","influenced_byLabel":"Aksel Andersen"},{"item":"http://www.wikidata.org/entity/Q28701894","itemLabel":"Q28701894","influenced_by":"http://www.wikidata.org/entity/Q12118720","influenced_byLabel":"Q12118720"},{"item":"http://www.wikidata.org/entity/Q3121604","itemLabel":"Xabi Aburruzaga","influenced_by":"http://www.wikidata.org/entity/Q12266702","influenced_byLabel":"Rufino Arrola"},{"item":"http://www.wikidata.org/entity/Q11427992","itemLabel":"Chieko Tsutsumi","influenced_by":"http://www.wikidata.org/entity/Q11423403","influenced_byLabel":"Hidefumi Toki"},{"item":"http://www.wikidata.org/entity/Q11500436","itemLabel":"Nobu Saitō","influenced_by":"http://www.wikidata.org/entity/Q11557571","influenced_byLabel":"Kuranosuke Hamaguchi"},{"item":"http://www.wikidata.org/entity/Q431128","itemLabel":"David Helfgott","influenced_by":"http://www.wikidata.org/entity/Q38308640","influenced_byLabel":"Alice Carrard"},{"item":"http://www.wikidata.org/entity/Q1361841","itemLabel":"Peter Serkin","influenced_by":"http://www.wikidata.org/entity/Q40072537","influenced_byLabel":"Ernst Oster"},{"item":"http://www.wikidata.org/entity/Q11836663","itemLabel":"Szabolcs Esztényi","influenced_by":"http://www.wikidata.org/entity/Q40370996","influenced_byLabel":"Ervin Major"},{"item":"http://www.wikidata.org/entity/Q29044263","itemLabel":"Juan Gandulla Padilla ‘Habichuela’","influenced_by":"http://www.wikidata.org/entity/Q42748088","influenced_byLabel":"José Patiño González"},{"item":"http://www.wikidata.org/entity/Q62050086","itemLabel":"Olivier Pirotte","influenced_by":"http://www.wikidata.org/entity/Q41308293","influenced_byLabel":"Reinier Panhay de Rendeux"},{"item":"http://www.wikidata.org/entity/Q4030","itemLabel":"Duke Ellington","influenced_by":"http://www.wikidata.org/entity/Q47460248","influenced_byLabel":"Marietta Clinkscales"},{"item":"http://www.wikidata.org/entity/Q4030","itemLabel":"Duke Ellington","influenced_by":"http://www.wikidata.org/entity/Q47463342","influenced_byLabel":"Henry Lee Grant"},{"item":"http://www.wikidata.org/entity/Q41408","itemLabel":"Federico García Lorca","influenced_by":"http://www.wikidata.org/entity/Q46348753","influenced_byLabel":"Martín Domínguez Berrueta"},{"item":"http://www.wikidata.org/entity/Q11836663","itemLabel":"Szabolcs Esztényi","influenced_by":"http://www.wikidata.org/entity/Q12352160","influenced_byLabel":"Magda Vásárhelyi"},{"item":"http://www.wikidata.org/entity/Q19691944","itemLabel":"Branko Ivanković","influenced_by":"http://www.wikidata.org/entity/Q12631226","influenced_byLabel":"Frano Parać"},{"item":"http://www.wikidata.org/entity/Q19691944","itemLabel":"Branko Ivanković","influenced_by":"http://www.wikidata.org/entity/Q12632968","influenced_byLabel":"Q12632968"},{"item":"http://www.wikidata.org/entity/Q19691944","itemLabel":"Branko Ivanković","influenced_by":"http://www.wikidata.org/entity/Q12642678","influenced_byLabel":"Stanko Horvat"},{"item":"http://www.wikidata.org/entity/Q19691944","itemLabel":"Branko Ivanković","influenced_by":"http://www.wikidata.org/entity/Q12795936","influenced_byLabel":"Marko Ruždjak"},{"item":"http://www.wikidata.org/entity/Q4134659","itemLabel":"Gevork Skevṛatsi","influenced_by":"http://www.wikidata.org/entity/Q13054114","influenced_byLabel":"Q13054114"},{"item":"http://www.wikidata.org/entity/Q13050929","itemLabel":"Baghishetsʻi Aṛakʻel","influenced_by":"http://www.wikidata.org/entity/Q14927544","influenced_byLabel":"Q14927544"},{"item":"http://www.wikidata.org/entity/Q20733341","itemLabel":"Jenkin Howell","influenced_by":"http://www.wikidata.org/entity/Q13127784","influenced_byLabel":"Dan Isaac Davies"},{"item":"http://www.wikidata.org/entity/Q41573325","itemLabel":"Glenn Kirchner","influenced_by":"http://www.wikidata.org/entity/Q14806605","influenced_byLabel":"Roger Dumas"},{"item":"http://www.wikidata.org/entity/Q6202527","itemLabel":"Knut Sönstevold","influenced_by":"http://www.wikidata.org/entity/Q15432077","influenced_byLabel":"Friedrich Neumann"},{"item":"http://www.wikidata.org/entity/Q78526","itemLabel":"Nikolaus Harnoncourt","influenced_by":"http://www.wikidata.org/entity/Q15454262","influenced_byLabel":"Josef Mertin"},{"item":"http://www.wikidata.org/entity/Q139223","itemLabel":"Peter Maxwell Davies","influenced_by":"http://www.wikidata.org/entity/Q15485148","influenced_byLabel":"Richard Hall"},{"item":"http://www.wikidata.org/entity/Q5543868","itemLabel":"Tor Ahlberg","influenced_by":"http://www.wikidata.org/entity/Q15616765","influenced_byLabel":"Olof Wibergh"},{"item":"http://www.wikidata.org/entity/Q6767478","itemLabel":"Mark Eddinger","influenced_by":"http://www.wikidata.org/entity/Q15451988","influenced_byLabel":"Patrick Gleeson"},{"item":"http://www.wikidata.org/entity/Q37008191","itemLabel":"Ernst Widegren","influenced_by":"http://www.wikidata.org/entity/Q15944242","influenced_byLabel":"Victor Forssell"},{"item":"http://www.wikidata.org/entity/Q2361757","itemLabel":"Aygün Kazimova","influenced_by":"http://www.wikidata.org/entity/Q16054825","influenced_byLabel":"Vagif Gerayzade"},{"item":"http://www.wikidata.org/entity/Q65199353","itemLabel":"Niloofar Mohebbi","influenced_by":"http://www.wikidata.org/entity/Q16049330","influenced_byLabel":"Mehrabano Tawfiq"},{"item":"http://www.wikidata.org/entity/Q25425405","itemLabel":"Joaquim Jovenet i Bosch","influenced_by":"http://www.wikidata.org/entity/Q16188769","influenced_byLabel":"Ramon Clausell i Llauger"},{"item":"http://www.wikidata.org/entity/Q61061630","itemLabel":"Q61061630","influenced_by":"http://www.wikidata.org/entity/Q16188769","influenced_byLabel":"Ramon Clausell i Llauger"},{"item":"http://www.wikidata.org/entity/Q2361757","itemLabel":"Aygün Kazimova","influenced_by":"http://www.wikidata.org/entity/Q16415050","influenced_byLabel":"Javanshir Guliyev"},{"item":"http://www.wikidata.org/entity/Q16383240","itemLabel":"Q16383240","influenced_by":"http://www.wikidata.org/entity/Q16392860","influenced_byLabel":"Q16392860"},{"item":"http://www.wikidata.org/entity/Q27300007","itemLabel":"Ingemar Hammar","influenced_by":"http://www.wikidata.org/entity/Q16420731","influenced_byLabel":"Örlygur Sigurðsson"},{"item":"http://www.wikidata.org/entity/Q183087","itemLabel":"Alessandro Scarlatti","influenced_by":"http://www.wikidata.org/entity/Q92953128","influenced_byLabel":"Marc'Antonio Sportonio"},{"item":"http://www.wikidata.org/entity/Q260264","itemLabel":"Rosa Ponselle","influenced_by":"http://www.wikidata.org/entity/Q98713502","influenced_byLabel":"William Thorner"},{"item":"http://www.wikidata.org/entity/Q94821197","itemLabel":"Samuel Gottfried Jütner","influenced_by":"http://www.wikidata.org/entity/Q94935328","influenced_byLabel":"Carl Friedrich Gössel"},{"item":"http://www.wikidata.org/entity/Q95346244","itemLabel":"Jürgen Knauer","influenced_by":"http://www.wikidata.org/entity/Q95346895","influenced_byLabel":"Joachim Ulbricht"},{"item":"http://www.wikidata.org/entity/Q5391521","itemLabel":"Josep Armengou i Feliu","influenced_by":"http://www.wikidata.org/entity/Q19301085","influenced_byLabel":"Marià Miró i Guitó"},{"item":"http://www.wikidata.org/entity/Q19918214","itemLabel":"Władysław Górski","influenced_by":"http://www.wikidata.org/entity/Q19918385","influenced_byLabel":"Karol Paweł Studziński"},{"item":"http://www.wikidata.org/entity/Q6782364","itemLabel":"Masahiro Andoh","influenced_by":"http://www.wikidata.org/entity/Q20203929","influenced_byLabel":"Sunao Wada"},{"item":"http://www.wikidata.org/entity/Q7046995","itemLabel":"Noel Hill","influenced_by":"http://www.wikidata.org/entity/Q20679215","influenced_byLabel":"Paddy Murphy"},{"item":"http://www.wikidata.org/entity/Q12288264","itemLabel":"Q12288264","influenced_by":"http://www.wikidata.org/entity/Q20671120","influenced_byLabel":"Petko Naumov"},{"item":"http://www.wikidata.org/entity/Q4112429","itemLabel":"Maurice Vittenet","influenced_by":"http://www.wikidata.org/entity/Q20965946","influenced_byLabel":"Camille Di Duca"},{"item":"http://www.wikidata.org/entity/Q151593","itemLabel":"Olivier Messiaen","influenced_by":"http://www.wikidata.org/entity/Q21088126","influenced_byLabel":"Georges Falkenberg"},{"item":"http://www.wikidata.org/entity/Q376597","itemLabel":"Francesco Lamperti","influenced_by":"http://www.wikidata.org/entity/Q21127038","influenced_byLabel":"Pietro Ray"},{"item":"http://www.wikidata.org/entity/Q96104459","itemLabel":"Samuel Hendrik Serné","influenced_by":"http://www.wikidata.org/entity/Q21542921","influenced_byLabel":"Adrianus Serné"},{"item":"http://www.wikidata.org/entity/Q4886553","itemLabel":"Ben Taylor","influenced_by":"http://www.wikidata.org/entity/Q22246600","influenced_byLabel":"Joey Bond"},{"item":"http://www.wikidata.org/entity/Q51132069","itemLabel":"Gunnar Wihlborg","influenced_by":"http://www.wikidata.org/entity/Q22338110","influenced_byLabel":"Q22338110"},{"item":"http://www.wikidata.org/entity/Q65132025","itemLabel":"Q65132025","influenced_by":"http://www.wikidata.org/entity/Q23024165","influenced_byLabel":"Anastas Stoyanov"},{"item":"http://www.wikidata.org/entity/Q70142","itemLabel":"Menahem Pressler","influenced_by":"http://www.wikidata.org/entity/Q24544263","influenced_byLabel":"Paul Loyonnet"},{"item":"http://www.wikidata.org/entity/Q2830026","itemLabel":"Alain Lefèvre","influenced_by":"http://www.wikidata.org/entity/Q24544263","influenced_byLabel":"Paul Loyonnet"},{"item":"http://www.wikidata.org/entity/Q4535437","itemLabel":"Yuta","influenced_by":"http://www.wikidata.org/entity/Q24038940","influenced_byLabel":"Q24038940"},{"item":"http://www.wikidata.org/entity/Q4535437","itemLabel":"Yuta","influenced_by":"http://www.wikidata.org/entity/Q24038942","influenced_byLabel":"Q24038942"},{"item":"http://www.wikidata.org/entity/Q5712006","itemLabel":"Heinrich Christoph Engelhardt","influenced_by":"http://www.wikidata.org/entity/Q26239805","influenced_byLabel":"Gottlieb Nittauff"},{"item":"http://www.wikidata.org/entity/Q12153428","itemLabel":"Q12153428","influenced_by":"http://www.wikidata.org/entity/Q25442319","influenced_byLabel":"Stepan Horobets"},{"item":"http://www.wikidata.org/entity/Q16129467","itemLabel":"Meir Briskman","influenced_by":"http://www.wikidata.org/entity/Q25492701","influenced_byLabel":"Q25492701"},{"item":"http://www.wikidata.org/entity/Q27586708","itemLabel":"Jazinto Rivas","influenced_by":"http://www.wikidata.org/entity/Q27093799","influenced_byLabel":"Antonio Aranaga"},{"item":"http://www.wikidata.org/entity/Q28701894","itemLabel":"Q28701894","influenced_by":"http://www.wikidata.org/entity/Q28701896","influenced_byLabel":"Q28701896"},{"item":"http://www.wikidata.org/entity/Q28855847","itemLabel":"Ryan Ross","influenced_by":"http://www.wikidata.org/entity/Q28855822","influenced_byLabel":"Gary Lewis"},{"item":"http://www.wikidata.org/entity/Q1979936","itemLabel":"Jivani","influenced_by":"http://www.wikidata.org/entity/Q29787140","influenced_byLabel":"Q29787140"},{"item":"http://www.wikidata.org/entity/Q29419597","itemLabel":"Rosa Rimoch","influenced_by":"http://www.wikidata.org/entity/Q29419608","influenced_byLabel":"Sonia Verbitzky"},{"item":"http://www.wikidata.org/entity/Q4298170","itemLabel":"Alexei Mikhlin","influenced_by":"http://www.wikidata.org/entity/Q30301531","influenced_byLabel":"Q30301531"},{"item":"http://www.wikidata.org/entity/Q4394793","itemLabel":"Josef Rissin","influenced_by":"http://www.wikidata.org/entity/Q30301531","influenced_byLabel":"Q30301531"},{"item":"http://www.wikidata.org/entity/Q817376","itemLabel":"Benjamin Alard","influenced_by":"http://www.wikidata.org/entity/Q50827686","influenced_byLabel":"Élisabeth Joyé"},{"item":"http://www.wikidata.org/entity/Q4893561","itemLabel":"Ricard Lamote de Grignon","influenced_by":"http://www.wikidata.org/entity/Q51533249","influenced_byLabel":"Bernardino Gálvez Bellido"},{"item":"http://www.wikidata.org/entity/Q94916386","itemLabel":"Ludwig Haase","influenced_by":"http://www.wikidata.org/entity/Q55123121","influenced_byLabel":"Franz Anton Morgenroth"},{"item":"http://www.wikidata.org/entity/Q153643","itemLabel":"Heinrich Schütz","influenced_by":"http://www.wikidata.org/entity/Q55936690","influenced_byLabel":"Georg Otto"},{"item":"http://www.wikidata.org/entity/Q345938","itemLabel":"Boris Kuschnir","influenced_by":"http://www.wikidata.org/entity/Q58620315","influenced_byLabel":"Veniamin Zeldis"},{"item":"http://www.wikidata.org/entity/Q1892935","itemLabel":"Marcel Azzola","influenced_by":"http://www.wikidata.org/entity/Q60803549","influenced_byLabel":"Jacques Mendel"},{"item":"http://www.wikidata.org/entity/Q4096788","itemLabel":"Vadim Brodski","influenced_by":"http://www.wikidata.org/entity/Q58620315","influenced_byLabel":"Veniamin Zeldis"},{"item":"http://www.wikidata.org/entity/Q2835399","itemLabel":"Alfred Pochon","influenced_by":"http://www.wikidata.org/entity/Q60825242","influenced_byLabel":"Louis Rey"},{"item":"http://www.wikidata.org/entity/Q65769941","itemLabel":"Kazuya Ishigami","influenced_by":"http://www.wikidata.org/entity/Q62998178","influenced_byLabel":"Kazuo Uehara"},{"item":"http://www.wikidata.org/entity/Q5671791","itemLabel":"Victor Torres","influenced_by":"http://www.wikidata.org/entity/Q66277946","influenced_byLabel":"Jorge Guerrero Dantur"},{"item":"http://www.wikidata.org/entity/Q55842967","itemLabel":"Bernard Diamant","influenced_by":"http://www.wikidata.org/entity/Q71738410","influenced_byLabel":"Johan Hendrik Sikemeier"},{"item":"http://www.wikidata.org/entity/Q6381680","itemLabel":"Kazuo Yamada","influenced_by":"http://www.wikidata.org/entity/Q80804755","influenced_byLabel":"Helmut Fellmer"},{"item":"http://www.wikidata.org/entity/Q83286354","itemLabel":"Carel L. de Vogel","influenced_by":"http://www.wikidata.org/entity/Q83286422","influenced_byLabel":"Jan Schiet"}];

const artists = [{"item":"http://www.wikidata.org/entity/Q7176","itemLabel":"Naguib Mahfouz","influenced_by":"http://www.wikidata.org/entity/Q905","influenced_byLabel":"Franz Kafka"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q16104867","itemLabel":"Anthony C. George","influenced_by":"http://www.wikidata.org/entity/Q762","influenced_byLabel":"Leonardo da Vinci"},{"item":"http://www.wikidata.org/entity/Q314771","itemLabel":"Maurice Sendak","influenced_by":"http://www.wikidata.org/entity/Q254","influenced_byLabel":"Wolfgang Amadeus Mozart"},{"item":"http://www.wikidata.org/entity/Q3261116","itemLabel":"Louis Aston Knight","influenced_by":"http://www.wikidata.org/entity/Q296","influenced_byLabel":"Claude Monet"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q396","influenced_byLabel":"U2"},{"item":"http://www.wikidata.org/entity/Q7176","itemLabel":"Naguib Mahfouz","influenced_by":"http://www.wikidata.org/entity/Q6882","influenced_byLabel":"James Joyce"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q6812453","itemLabel":"Melinda Camber Porter","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q36661","influenced_byLabel":"Henrik Ibsen"},{"item":"http://www.wikidata.org/entity/Q47538364","itemLabel":"Giovanni Morassutti","influenced_by":"http://www.wikidata.org/entity/Q37571","influenced_byLabel":"Jackson Pollock"},{"item":"http://www.wikidata.org/entity/Q7176","itemLabel":"Naguib Mahfouz","influenced_by":"http://www.wikidata.org/entity/Q7199","influenced_byLabel":"Marcel Proust"},{"item":"http://www.wikidata.org/entity/Q4832770","itemLabel":"Azlan McLennan","influenced_by":"http://www.wikidata.org/entity/Q7264","influenced_byLabel":"Marxism"},{"item":"http://www.wikidata.org/entity/Q36661","itemLabel":"Henrik Ibsen","influenced_by":"http://www.wikidata.org/entity/Q7724","influenced_byLabel":"August Strindberg"},{"item":"http://www.wikidata.org/entity/Q20200839","itemLabel":"Robert Helm","influenced_by":"http://www.wikidata.org/entity/Q7836","influenced_byLabel":"René Magritte"},{"item":"http://www.wikidata.org/entity/Q62057437","itemLabel":"Jenny Snider","influenced_by":"http://www.wikidata.org/entity/Q8003","influenced_byLabel":"Sergei Eisenstein"},{"item":"http://www.wikidata.org/entity/Q55192","itemLabel":"Gertrude Abercrombie","influenced_by":"http://www.wikidata.org/entity/Q8341","influenced_byLabel":"jazz"},{"item":"http://www.wikidata.org/entity/Q193300","itemLabel":"Osamu Tezuka","influenced_by":"http://www.wikidata.org/entity/Q8704","influenced_byLabel":"Walt Disney"},{"item":"http://www.wikidata.org/entity/Q314771","itemLabel":"Maurice Sendak","influenced_by":"http://www.wikidata.org/entity/Q8704","influenced_byLabel":"Walt Disney"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q8877","influenced_byLabel":"Steven Spielberg"},{"item":"http://www.wikidata.org/entity/Q4821931","itemLabel":"Aunia Kahn","influenced_by":"http://www.wikidata.org/entity/Q9174","influenced_byLabel":"religion"},{"item":"http://www.wikidata.org/entity/Q236613","itemLabel":"Martha Wainwright","influenced_by":"http://www.wikidata.org/entity/Q1276","influenced_byLabel":"Leonard Cohen"},{"item":"http://www.wikidata.org/entity/Q17017189","itemLabel":"Beatie Wolfe","influenced_by":"http://www.wikidata.org/entity/Q1203","influenced_byLabel":"John Lennon"},{"item":"http://www.wikidata.org/entity/Q17017189","itemLabel":"Beatie Wolfe","influenced_by":"http://www.wikidata.org/entity/Q1276","influenced_byLabel":"Leonard Cohen"},{"item":"http://www.wikidata.org/entity/Q17017189","itemLabel":"Beatie Wolfe","influenced_by":"http://www.wikidata.org/entity/Q1299","influenced_byLabel":"The Beatles"},{"item":"http://www.wikidata.org/entity/Q22095861","itemLabel":"David Suter","influenced_by":"http://www.wikidata.org/entity/Q1470","influenced_byLabel":"M. C. Escher"},{"item":"http://www.wikidata.org/entity/Q290197","itemLabel":"Joumana Haddad","influenced_by":"http://www.wikidata.org/entity/Q2022","influenced_byLabel":"Cesare Pavese"},{"item":"http://www.wikidata.org/entity/Q3847346","itemLabel":"Maria Lai","influenced_by":"http://www.wikidata.org/entity/Q2001","influenced_byLabel":"Stanley Kubrick"},{"item":"http://www.wikidata.org/entity/Q207758","itemLabel":"Ivan Kramskoi","influenced_by":"http://www.wikidata.org/entity/Q4768","influenced_byLabel":"Karl Bryullov"},{"item":"http://www.wikidata.org/entity/Q314771","itemLabel":"Maurice Sendak","influenced_by":"http://www.wikidata.org/entity/Q4441","influenced_byLabel":"Emily Dickinson"},{"item":"http://www.wikidata.org/entity/Q314771","itemLabel":"Maurice Sendak","influenced_by":"http://www.wikidata.org/entity/Q4985","influenced_byLabel":"Herman Melville"},{"item":"http://www.wikidata.org/entity/Q460337","itemLabel":"Konstantin Makovsky","influenced_by":"http://www.wikidata.org/entity/Q4768","influenced_byLabel":"Karl Bryullov"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q151803","itemLabel":"Piet Mondrian","influenced_by":"http://www.wikidata.org/entity/Q5593","influenced_byLabel":"Pablo Picasso"},{"item":"http://www.wikidata.org/entity/Q200798","itemLabel":"Hiroshige","influenced_by":"http://www.wikidata.org/entity/Q5586","influenced_byLabel":"Katsushika Hokusai"},{"item":"http://www.wikidata.org/entity/Q237497","itemLabel":"Cherie Currie","influenced_by":"http://www.wikidata.org/entity/Q5383","influenced_byLabel":"David Bowie"},{"item":"http://www.wikidata.org/entity/Q261846","itemLabel":"Tsuguharu Foujita","influenced_by":"http://www.wikidata.org/entity/Q5593","influenced_byLabel":"Pablo Picasso"},{"item":"http://www.wikidata.org/entity/Q314771","itemLabel":"Maurice Sendak","influenced_by":"http://www.wikidata.org/entity/Q5432","influenced_byLabel":"Francisco Goya"},{"item":"http://www.wikidata.org/entity/Q718409","itemLabel":"Martiros Saryan","influenced_by":"http://www.wikidata.org/entity/Q5589","influenced_byLabel":"Henri Matisse"},{"item":"http://www.wikidata.org/entity/Q983262","itemLabel":"Corneliu Baba","influenced_by":"http://www.wikidata.org/entity/Q5432","influenced_byLabel":"Francisco Goya"},{"item":"http://www.wikidata.org/entity/Q3645683","itemLabel":"Bruno Caruso","influenced_by":"http://www.wikidata.org/entity/Q5432","influenced_byLabel":"Francisco Goya"},{"item":"http://www.wikidata.org/entity/Q3745181","itemLabel":"Filippo Dobrilla","influenced_by":"http://www.wikidata.org/entity/Q5592","influenced_byLabel":"Michelangelo"},{"item":"http://www.wikidata.org/entity/Q7261674","itemLabel":"Purvis Young","influenced_by":"http://www.wikidata.org/entity/Q5582","influenced_byLabel":"Vincent van Gogh"},{"item":"http://www.wikidata.org/entity/Q17917680","itemLabel":"Claude Clark","influenced_by":"http://www.wikidata.org/entity/Q5582","influenced_byLabel":"Vincent van Gogh"},{"item":"http://www.wikidata.org/entity/Q21130532","itemLabel":"Josef Vacke","influenced_by":"http://www.wikidata.org/entity/Q5582","influenced_byLabel":"Vincent van Gogh"},{"item":"http://www.wikidata.org/entity/Q24005464","itemLabel":"Chen Ke","influenced_by":"http://www.wikidata.org/entity/Q5582","influenced_byLabel":"Vincent van Gogh"},{"item":"http://www.wikidata.org/entity/Q183221","itemLabel":"Jean-Antoine Watteau","influenced_by":"http://www.wikidata.org/entity/Q5599","influenced_byLabel":"Peter Paul Rubens"},{"item":"http://www.wikidata.org/entity/Q216999","itemLabel":"Antoine-Jean Gros","influenced_by":"http://www.wikidata.org/entity/Q5599","influenced_byLabel":"Peter Paul Rubens"},{"item":"http://www.wikidata.org/entity/Q983262","itemLabel":"Corneliu Baba","influenced_by":"http://www.wikidata.org/entity/Q5598","influenced_byLabel":"Rembrandt"},{"item":"http://www.wikidata.org/entity/Q1964408","itemLabel":"Nan Hoover","influenced_by":"http://www.wikidata.org/entity/Q5598","influenced_byLabel":"Rembrandt"},{"item":"http://www.wikidata.org/entity/Q5997572","itemLabel":"Ilene Meyer","influenced_by":"http://www.wikidata.org/entity/Q5593","influenced_byLabel":"Pablo Picasso"},{"item":"http://www.wikidata.org/entity/Q6145141","itemLabel":"James Warhola","influenced_by":"http://www.wikidata.org/entity/Q5603","influenced_byLabel":"Andy Warhol"},{"item":"http://www.wikidata.org/entity/Q6287831","itemLabel":"Joseph Webb","influenced_by":"http://www.wikidata.org/entity/Q5598","influenced_byLabel":"Rembrandt"},{"item":"http://www.wikidata.org/entity/Q7358384","itemLabel":"Roger Ing","influenced_by":"http://www.wikidata.org/entity/Q5593","influenced_byLabel":"Pablo Picasso"},{"item":"http://www.wikidata.org/entity/Q7365903","itemLabel":"Ronnie Landfield","influenced_by":"http://www.wikidata.org/entity/Q5593","influenced_byLabel":"Pablo Picasso"},{"item":"http://www.wikidata.org/entity/Q18001520","itemLabel":"Michele O'Marah","influenced_by":"http://www.wikidata.org/entity/Q5603","influenced_byLabel":"Andy Warhol"},{"item":"http://www.wikidata.org/entity/Q64713233","itemLabel":"Elman España","influenced_by":"http://www.wikidata.org/entity/Q5603","influenced_byLabel":"Andy Warhol"},{"item":"http://www.wikidata.org/entity/Q78484","itemLabel":"Rudolf Steiner","influenced_by":"http://www.wikidata.org/entity/Q5879","influenced_byLabel":"Johann Wolfgang von Goethe"},{"item":"http://www.wikidata.org/entity/Q36661","itemLabel":"Henrik Ibsen","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q5181110","itemLabel":"Craig Kauffman","influenced_by":"http://www.wikidata.org/entity/Q5912","influenced_byLabel":"Marcel Duchamp"},{"item":"http://www.wikidata.org/entity/Q7670517","itemLabel":"TJ Norris","influenced_by":"http://www.wikidata.org/entity/Q6034","influenced_byLabel":"Dada"},{"item":"http://www.wikidata.org/entity/Q7962743","itemLabel":"Wallace Berman","influenced_by":"http://www.wikidata.org/entity/Q6034","influenced_byLabel":"Dada"},{"item":"http://www.wikidata.org/entity/Q50004815","itemLabel":"Claudio Perna","influenced_by":"http://www.wikidata.org/entity/Q5912","influenced_byLabel":"Marcel Duchamp"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q6446953","itemLabel":"Kurt Oscar Weber","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q18386282","itemLabel":"Sun Liangang","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q78484","itemLabel":"Rudolf Steiner","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q11079","influenced_byLabel":"Muḥammad ibn Jābir al-Ḥarrānī al-Battānī"},{"item":"http://www.wikidata.org/entity/Q25391305","itemLabel":"Angela Marzullo","influenced_by":"http://www.wikidata.org/entity/Q11093","influenced_byLabel":"Valerie Solanas"},{"item":"http://www.wikidata.org/entity/Q30201990","itemLabel":"Pedro Fernando","influenced_by":"http://www.wikidata.org/entity/Q15615","influenced_byLabel":"Lil Wayne"},{"item":"http://www.wikidata.org/entity/Q33110601","itemLabel":"Charlie Le Mindu","influenced_by":"http://www.wikidata.org/entity/Q12003","influenced_byLabel":"Cher"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q15869","influenced_byLabel":"Freddie Mercury"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q16867","influenced_byLabel":"Edgar Allan Poe"},{"item":"http://www.wikidata.org/entity/Q298761","itemLabel":"Clive Barker","influenced_by":"http://www.wikidata.org/entity/Q16867","influenced_byLabel":"Edgar Allan Poe"},{"item":"http://www.wikidata.org/entity/Q47538364","itemLabel":"Giovanni Morassutti","influenced_by":"http://www.wikidata.org/entity/Q25186","influenced_byLabel":"Gus Van Sant"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q25191","influenced_byLabel":"Christopher Nolan"},{"item":"http://www.wikidata.org/entity/Q102289","itemLabel":"Buckminster Fuller","influenced_by":"http://www.wikidata.org/entity/Q33760","influenced_byLabel":"Bertrand Russell"},{"item":"http://www.wikidata.org/entity/Q4895798","itemLabel":"Bertram Mackennal","influenced_by":"http://www.wikidata.org/entity/Q30755","influenced_byLabel":"Auguste Rodin"},{"item":"http://www.wikidata.org/entity/Q6915843","itemLabel":"Moses Kottler","influenced_by":"http://www.wikidata.org/entity/Q30755","influenced_byLabel":"Auguste Rodin"},{"item":"http://www.wikidata.org/entity/Q192410","itemLabel":"Jennifer Hudson","influenced_by":"http://www.wikidata.org/entity/Q34389","influenced_byLabel":"Whitney Houston"},{"item":"http://www.wikidata.org/entity/Q1042835","itemLabel":"Carlos Cruz-Diez","influenced_by":"http://www.wikidata.org/entity/Q34013","influenced_byLabel":"Georges Seurat"},{"item":"http://www.wikidata.org/entity/Q3196915","itemLabel":"Kimon Loghi","influenced_by":"http://www.wikidata.org/entity/Q34661","influenced_byLabel":"Gustav Klimt"},{"item":"http://www.wikidata.org/entity/Q5233276","itemLabel":"David Edward Byrd","influenced_by":"http://www.wikidata.org/entity/Q34636","influenced_byLabel":"Art Nouveau"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q34943","influenced_byLabel":"Ptolemy"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q718409","itemLabel":"Martiros Saryan","influenced_by":"http://www.wikidata.org/entity/Q37693","influenced_byLabel":"Paul Gauguin"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q38222","influenced_byLabel":"George Lucas"},{"item":"http://www.wikidata.org/entity/Q298761","itemLabel":"Clive Barker","influenced_by":"http://www.wikidata.org/entity/Q39829","influenced_byLabel":"Stephen King"},{"item":"http://www.wikidata.org/entity/Q298761","itemLabel":"Clive Barker","influenced_by":"http://www.wikidata.org/entity/Q40640","influenced_byLabel":"Ray Bradbury"},{"item":"http://www.wikidata.org/entity/Q6775431","itemLabel":"Martin Firrell","influenced_by":"http://www.wikidata.org/entity/Q40909","influenced_byLabel":"Virginia Woolf"},{"item":"http://www.wikidata.org/entity/Q212445","itemLabel":"Jean Lemaire","influenced_by":"http://www.wikidata.org/entity/Q41554","influenced_byLabel":"Nicolas Poussin"},{"item":"http://www.wikidata.org/entity/Q298761","itemLabel":"Clive Barker","influenced_by":"http://www.wikidata.org/entity/Q41513","influenced_byLabel":"William Blake"},{"item":"http://www.wikidata.org/entity/Q468632","itemLabel":"Mattia Preti","influenced_by":"http://www.wikidata.org/entity/Q42207","influenced_byLabel":"Caravaggio"},{"item":"http://www.wikidata.org/entity/Q9050242","itemLabel":"Nise da Silveira","influenced_by":"http://www.wikidata.org/entity/Q41532","influenced_byLabel":"Carl Jung"},{"item":"http://www.wikidata.org/entity/Q41431508","itemLabel":"Olivia Clavel","influenced_by":"http://www.wikidata.org/entity/Q41532","influenced_byLabel":"Carl Jung"},{"item":"http://www.wikidata.org/entity/Q97611501","itemLabel":"Jean Honoré Marmont de Barmont","influenced_by":"http://www.wikidata.org/entity/Q41554","influenced_byLabel":"Nicolas Poussin"},{"item":"http://www.wikidata.org/entity/Q151803","itemLabel":"Piet Mondrian","influenced_by":"http://www.wikidata.org/entity/Q42934","influenced_byLabel":"Cubism"},{"item":"http://www.wikidata.org/entity/Q238702","itemLabel":"Brian Aldiss","influenced_by":"http://www.wikidata.org/entity/Q42511","influenced_byLabel":"H. G. Wells"},{"item":"http://www.wikidata.org/entity/Q7346204","itemLabel":"Robert Juniper","influenced_by":"http://www.wikidata.org/entity/Q44007","influenced_byLabel":"Paul Klee"},{"item":"http://www.wikidata.org/entity/Q54855070","itemLabel":"Quentin Spohn","influenced_by":"http://www.wikidata.org/entity/Q43270","influenced_byLabel":"Pieter Brueghel the Elder"},{"item":"http://www.wikidata.org/entity/Q82445","itemLabel":"Henri de Toulouse-Lautrec","influenced_by":"http://www.wikidata.org/entity/Q46373","influenced_byLabel":"Edgar Degas"},{"item":"http://www.wikidata.org/entity/Q3196915","itemLabel":"Kimon Loghi","influenced_by":"http://www.wikidata.org/entity/Q45006","influenced_byLabel":"Franz Stuck"},{"item":"http://www.wikidata.org/entity/Q6687293","itemLabel":"Louis Grell","influenced_by":"http://www.wikidata.org/entity/Q45006","influenced_byLabel":"Franz Stuck"},{"item":"http://www.wikidata.org/entity/Q54855070","itemLabel":"Quentin Spohn","influenced_by":"http://www.wikidata.org/entity/Q130531","influenced_byLabel":"Hieronymus Bosch"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q130311","influenced_byLabel":"George Michael"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q140188","influenced_byLabel":"Aristarchus of Samos"},{"item":"http://www.wikidata.org/entity/Q44881","itemLabel":"Andreas Hamran Færø","influenced_by":"http://www.wikidata.org/entity/Q133600","influenced_byLabel":"Banksy"},{"item":"http://www.wikidata.org/entity/Q322060","itemLabel":"Douglas Coupland","influenced_by":"http://www.wikidata.org/entity/Q140201","influenced_byLabel":"J. G. Ballard"},{"item":"http://www.wikidata.org/entity/Q64713233","itemLabel":"Elman España","influenced_by":"http://www.wikidata.org/entity/Q133600","influenced_byLabel":"Banksy"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q150471","influenced_byLabel":"E. T. A. Hoffmann"},{"item":"http://www.wikidata.org/entity/Q3107486","itemLabel":"Kay Nielsen","influenced_by":"http://www.wikidata.org/entity/Q149444","influenced_byLabel":"History of Eastern art"},{"item":"http://www.wikidata.org/entity/Q4924856","itemLabel":"Blanche Grambs","influenced_by":"http://www.wikidata.org/entity/Q142472","influenced_byLabel":"Käthe Kollwitz"},{"item":"http://www.wikidata.org/entity/Q7152261","itemLabel":"Paul Mason","influenced_by":"http://www.wikidata.org/entity/Q151097","influenced_byLabel":"Henry Moore"},{"item":"http://www.wikidata.org/entity/Q7519520","itemLabel":"Simon Perry","influenced_by":"http://www.wikidata.org/entity/Q151097","influenced_byLabel":"Henry Moore"},{"item":"http://www.wikidata.org/entity/Q3645683","itemLabel":"Bruno Caruso","influenced_by":"http://www.wikidata.org/entity/Q153104","influenced_byLabel":"Otto Dix"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q152233","influenced_byLabel":"El Lissitzky"},{"item":"http://www.wikidata.org/entity/Q66735968","itemLabel":"Chris Drange","influenced_by":"http://www.wikidata.org/entity/Q151679","influenced_byLabel":"Roy Lichtenstein"},{"item":"http://www.wikidata.org/entity/Q238702","itemLabel":"Brian Aldiss","influenced_by":"http://www.wikidata.org/entity/Q155855","influenced_byLabel":"Karel Čapek"},{"item":"http://www.wikidata.org/entity/Q367973","itemLabel":"Arman","influenced_by":"http://www.wikidata.org/entity/Q155158","influenced_byLabel":"Kurt Schwitters"},{"item":"http://www.wikidata.org/entity/Q16215841","itemLabel":"Jahan Loh","influenced_by":"http://www.wikidata.org/entity/Q155407","influenced_byLabel":"Jean-Michel Basquiat"},{"item":"http://www.wikidata.org/entity/Q16738088","itemLabel":"Marta Jonville","influenced_by":"http://www.wikidata.org/entity/Q153965","influenced_byLabel":"Joseph Beuys"},{"item":"http://www.wikidata.org/entity/Q47538364","itemLabel":"Giovanni Morassutti","influenced_by":"http://www.wikidata.org/entity/Q155407","influenced_byLabel":"Jean-Michel Basquiat"},{"item":"http://www.wikidata.org/entity/Q555324","itemLabel":"Klaus Rifbjerg","influenced_by":"http://www.wikidata.org/entity/Q159552","influenced_byLabel":"Johannes V. Jensen"},{"item":"http://www.wikidata.org/entity/Q1239698","itemLabel":"Donald Baechler","influenced_by":"http://www.wikidata.org/entity/Q159566","influenced_byLabel":"Cy Twombly"},{"item":"http://www.wikidata.org/entity/Q3645683","itemLabel":"Bruno Caruso","influenced_by":"http://www.wikidata.org/entity/Q156622","influenced_byLabel":"Giorgio de Chirico"},{"item":"http://www.wikidata.org/entity/Q6087060","itemLabel":"Israel Levitan","influenced_by":"http://www.wikidata.org/entity/Q160172","influenced_byLabel":"Ossip Zadkine"},{"item":"http://www.wikidata.org/entity/Q7422761","itemLabel":"Sarah Seager","influenced_by":"http://www.wikidata.org/entity/Q159409","influenced_byLabel":"Louise Bourgeois"},{"item":"http://www.wikidata.org/entity/Q29884367","itemLabel":"Luc Bestetti","influenced_by":"http://www.wikidata.org/entity/Q156622","influenced_byLabel":"Giorgio de Chirico"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q159347","influenced_byLabel":"Steve McQueen"},{"item":"http://www.wikidata.org/entity/Q19359621","itemLabel":"Elizabeth Heaphy Murray","influenced_by":"http://www.wikidata.org/entity/Q161145","influenced_byLabel":"Horace Vernet"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q160448","influenced_byLabel":"László Moholy-Nagy"},{"item":"http://www.wikidata.org/entity/Q298761","itemLabel":"Clive Barker","influenced_by":"http://www.wikidata.org/entity/Q169566","influenced_byLabel":"H. P. Lovecraft"},{"item":"http://www.wikidata.org/entity/Q1274234","itemLabel":"Peter Campus","influenced_by":"http://www.wikidata.org/entity/Q168665","influenced_byLabel":"Bruce Nauman"},{"item":"http://www.wikidata.org/entity/Q7498830","itemLabel":"Shirley Purdie","influenced_by":"http://www.wikidata.org/entity/Q168302","influenced_byLabel":"Queenie McKenzie"},{"item":"http://www.wikidata.org/entity/Q30160536","itemLabel":"František Podešva","influenced_by":"http://www.wikidata.org/entity/Q167414","influenced_byLabel":"František Kupka"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q167414","influenced_byLabel":"František Kupka"},{"item":"http://www.wikidata.org/entity/Q16106911","itemLabel":"Mary Corse","influenced_by":"http://www.wikidata.org/entity/Q61064","influenced_byLabel":"Wassily Kandinsky"},{"item":"http://www.wikidata.org/entity/Q58720","itemLabel":"Mikhail Vassilyevich Lomonosov","influenced_by":"http://www.wikidata.org/entity/Q76510","influenced_byLabel":"Christian Wolff"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q77057","influenced_byLabel":"Karl Robert Eduard von Hartmann"},{"item":"http://www.wikidata.org/entity/Q23304571","itemLabel":"Margaret Paraskos","influenced_by":"http://www.wikidata.org/entity/Q80113","influenced_byLabel":"expressionism"},{"item":"http://www.wikidata.org/entity/Q77577084","itemLabel":"Alexander Z. Kruse","influenced_by":"http://www.wikidata.org/entity/Q79969","influenced_byLabel":"Emma Goldman"},{"item":"http://www.wikidata.org/entity/Q298761","itemLabel":"Clive Barker","influenced_by":"http://www.wikidata.org/entity/Q83158","influenced_byLabel":"Jean Cocteau"},{"item":"http://www.wikidata.org/entity/Q8046804","itemLabel":"Yahel Chirinian","influenced_by":"http://www.wikidata.org/entity/Q83158","influenced_byLabel":"Jean Cocteau"},{"item":"http://www.wikidata.org/entity/Q5445006","itemLabel":"Fernando de Szyszlo","influenced_by":"http://www.wikidata.org/entity/Q88777","influenced_byLabel":"Adolfo Winternitz"},{"item":"http://www.wikidata.org/entity/Q193300","itemLabel":"Osamu Tezuka","influenced_by":"http://www.wikidata.org/entity/Q93788","influenced_byLabel":"Max Fleischer"},{"item":"http://www.wikidata.org/entity/Q13510037","itemLabel":"Daan Samson","influenced_by":"http://www.wikidata.org/entity/Q103114","influenced_byLabel":"Michel Houellebecq"},{"item":"http://www.wikidata.org/entity/Q78484","itemLabel":"Rudolf Steiner","influenced_by":"http://www.wikidata.org/entity/Q113153","influenced_byLabel":"Karl Julius Schröer"},{"item":"http://www.wikidata.org/entity/Q3645683","itemLabel":"Bruno Caruso","influenced_by":"http://www.wikidata.org/entity/Q107194","influenced_byLabel":"George Grosz"},{"item":"http://www.wikidata.org/entity/Q7151911","itemLabel":"Paul Laffoley","influenced_by":"http://www.wikidata.org/entity/Q113775","influenced_byLabel":"Frederick John Kiesler"},{"item":"http://www.wikidata.org/entity/Q98174533","itemLabel":"Isabel Davies","influenced_by":"http://www.wikidata.org/entity/Q117680","influenced_byLabel":"John Brack"},{"item":"http://www.wikidata.org/entity/Q1042835","itemLabel":"Carlos Cruz-Diez","influenced_by":"http://www.wikidata.org/entity/Q170071","influenced_byLabel":"Josef Albers"},{"item":"http://www.wikidata.org/entity/Q3182324","itemLabel":"John Quidor","influenced_by":"http://www.wikidata.org/entity/Q171344","influenced_byLabel":"William Hogarth"},{"item":"http://www.wikidata.org/entity/Q3565655","itemLabel":"Walter Peregoy","influenced_by":"http://www.wikidata.org/entity/Q171128","influenced_byLabel":"Diego Rivera"},{"item":"http://www.wikidata.org/entity/Q5080820","itemLabel":"Charles McGee","influenced_by":"http://www.wikidata.org/entity/Q170076","influenced_byLabel":"Jean Dubuffet"},{"item":"http://www.wikidata.org/entity/Q151803","itemLabel":"Piet Mondrian","influenced_by":"http://www.wikidata.org/entity/Q174655","influenced_byLabel":"Bart van der Leck"},{"item":"http://www.wikidata.org/entity/Q5040285","itemLabel":"Carl Hancock Rux","influenced_by":"http://www.wikidata.org/entity/Q174210","influenced_byLabel":"Julio Cortázar"},{"item":"http://www.wikidata.org/entity/Q6149449","itemLabel":"Jan Martens","influenced_by":"http://www.wikidata.org/entity/Q177725","influenced_byLabel":"abstract expressionism"},{"item":"http://www.wikidata.org/entity/Q314771","itemLabel":"Maurice Sendak","influenced_by":"http://www.wikidata.org/entity/Q183221","influenced_byLabel":"Jean-Antoine Watteau"},{"item":"http://www.wikidata.org/entity/Q6106096","itemLabel":"J. J. Lankes","influenced_by":"http://www.wikidata.org/entity/Q182589","influenced_byLabel":"William Morris"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q185832","influenced_byLabel":"Emmanuel Swedenborg"},{"item":"http://www.wikidata.org/entity/Q151803","itemLabel":"Piet Mondrian","influenced_by":"http://www.wikidata.org/entity/Q184719","influenced_byLabel":"anthroposophy"},{"item":"http://www.wikidata.org/entity/Q298761","itemLabel":"Clive Barker","influenced_by":"http://www.wikidata.org/entity/Q188176","influenced_byLabel":"William S. Burroughs"},{"item":"http://www.wikidata.org/entity/Q78484","itemLabel":"Rudolf Steiner","influenced_by":"http://www.wikidata.org/entity/Q189454","influenced_byLabel":"Helena Blavatsky"},{"item":"http://www.wikidata.org/entity/Q7299130","itemLabel":"Raymond Salvatore Harmon","influenced_by":"http://www.wikidata.org/entity/Q188987","influenced_byLabel":"William Gibson"},{"item":"http://www.wikidata.org/entity/Q16014867","itemLabel":"Yves Gaucher","influenced_by":"http://www.wikidata.org/entity/Q190933","influenced_byLabel":"Anton Webern"},{"item":"http://www.wikidata.org/entity/Q16105131","itemLabel":"Keith Albarn","influenced_by":"http://www.wikidata.org/entity/Q189594","influenced_byLabel":"Islamic art"},{"item":"http://www.wikidata.org/entity/Q19359621","itemLabel":"Elizabeth Heaphy Murray","influenced_by":"http://www.wikidata.org/entity/Q192062","influenced_byLabel":"Bartolomé Esteban Murillo"},{"item":"http://www.wikidata.org/entity/Q7340489","itemLabel":"Rob Redding","influenced_by":"http://www.wikidata.org/entity/Q193670","influenced_byLabel":"Frantz Fanon"},{"item":"http://www.wikidata.org/entity/Q16104820","itemLabel":"Ingrid Baxter","influenced_by":"http://www.wikidata.org/entity/Q193871","influenced_byLabel":"Marshall McLuhan"},{"item":"http://www.wikidata.org/entity/Q18044948","itemLabel":"John Miller","influenced_by":"http://www.wikidata.org/entity/Q203209","influenced_byLabel":"conceptual art"},{"item":"http://www.wikidata.org/entity/Q114405","itemLabel":"Rockwell Kent","influenced_by":"http://www.wikidata.org/entity/Q203643","influenced_byLabel":"James Abbott McNeill Whistler"},{"item":"http://www.wikidata.org/entity/Q113775","itemLabel":"Frederick John Kiesler","influenced_by":"http://www.wikidata.org/entity/Q207445","influenced_byLabel":"De Stijl"},{"item":"http://www.wikidata.org/entity/Q155158","itemLabel":"Kurt Schwitters","influenced_by":"http://www.wikidata.org/entity/Q207445","influenced_byLabel":"De Stijl"},{"item":"http://www.wikidata.org/entity/Q2917665","itemLabel":"Rutu Modan","influenced_by":"http://www.wikidata.org/entity/Q207960","influenced_byLabel":"Winsor McCay"},{"item":"http://www.wikidata.org/entity/Q549526","itemLabel":"Louis Van Lint","influenced_by":"http://www.wikidata.org/entity/Q212611","influenced_byLabel":"COBRA"},{"item":"http://www.wikidata.org/entity/Q4678181","itemLabel":"Ad Snijders","influenced_by":"http://www.wikidata.org/entity/Q212611","influenced_byLabel":"COBRA"},{"item":"http://www.wikidata.org/entity/Q17017189","itemLabel":"Beatie Wolfe","influenced_by":"http://www.wikidata.org/entity/Q210428","influenced_byLabel":"Elliott Smith"},{"item":"http://www.wikidata.org/entity/Q471387","itemLabel":"Richard Wilson","influenced_by":"http://www.wikidata.org/entity/Q214074","influenced_byLabel":"Claude Lorrain"},{"item":"http://www.wikidata.org/entity/Q97611501","itemLabel":"Jean Honoré Marmont de Barmont","influenced_by":"http://www.wikidata.org/entity/Q214074","influenced_byLabel":"Claude Lorrain"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q223233","influenced_byLabel":"Sam Mendes"},{"item":"http://www.wikidata.org/entity/Q723541","itemLabel":"Aseem Trivedi","influenced_by":"http://www.wikidata.org/entity/Q230874","influenced_byLabel":"Anna Hazare"},{"item":"http://www.wikidata.org/entity/Q19814001","itemLabel":"Vaman Tabaji Kardak","influenced_by":"http://www.wikidata.org/entity/Q231690","influenced_byLabel":"B. R. Ambedkar"},{"item":"http://www.wikidata.org/entity/Q33110601","itemLabel":"Charlie Le Mindu","influenced_by":"http://www.wikidata.org/entity/Q233483","influenced_byLabel":"Diamanda Galás"},{"item":"http://www.wikidata.org/entity/Q322060","itemLabel":"Douglas Coupland","influenced_by":"http://www.wikidata.org/entity/Q241583","influenced_byLabel":"Bret Easton Ellis"},{"item":"http://www.wikidata.org/entity/Q33110601","itemLabel":"Charlie Le Mindu","influenced_by":"http://www.wikidata.org/entity/Q242868","influenced_byLabel":"Jean-Paul Gaultier"},{"item":"http://www.wikidata.org/entity/Q47538364","itemLabel":"Giovanni Morassutti","influenced_by":"http://www.wikidata.org/entity/Q265706","influenced_byLabel":"Susan Strasberg"},{"item":"http://www.wikidata.org/entity/Q5216985","itemLabel":"Daniel Donche, Jr.","influenced_by":"http://www.wikidata.org/entity/Q268181","influenced_byLabel":"Chuck Palahniuk"},{"item":"http://www.wikidata.org/entity/Q7648747","itemLabel":"Susanne Bartsch","influenced_by":"http://www.wikidata.org/entity/Q270147","influenced_byLabel":"Anna Piaggi"},{"item":"http://www.wikidata.org/entity/Q98272184","itemLabel":"Robert Brewer","influenced_by":"http://www.wikidata.org/entity/Q266637","influenced_byLabel":"Paul Sandby"},{"item":"http://www.wikidata.org/entity/Q703588","itemLabel":"Wolfgang Reitherman","influenced_by":"http://www.wikidata.org/entity/Q280187","influenced_byLabel":"Norm Ferguson"},{"item":"http://www.wikidata.org/entity/Q4362566","itemLabel":"Pieter Pickaert","influenced_by":"http://www.wikidata.org/entity/Q278068","influenced_byLabel":"Romeyn de Hooghe"},{"item":"http://www.wikidata.org/entity/Q5354442","itemLabel":"Eleanore Mikus","influenced_by":"http://www.wikidata.org/entity/Q281637","influenced_byLabel":"Ben Nicholson"},{"item":"http://www.wikidata.org/entity/Q3737812","itemLabel":"Fabio Poggiali","influenced_by":"http://www.wikidata.org/entity/Q285339","influenced_byLabel":"Giorgio Albertazzi"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q302835","influenced_byLabel":"Nasir al-Din al-Tusi"},{"item":"http://www.wikidata.org/entity/Q5202586","itemLabel":"César Martínez","influenced_by":"http://www.wikidata.org/entity/Q305497","influenced_byLabel":"Richard Avedon"},{"item":"http://www.wikidata.org/entity/Q6772041","itemLabel":"Marmaduke Cradock","influenced_by":"http://www.wikidata.org/entity/Q304411","influenced_byLabel":"Melchior d'Hondecoeter"},{"item":"http://www.wikidata.org/entity/Q33110601","itemLabel":"Charlie Le Mindu","influenced_by":"http://www.wikidata.org/entity/Q302446","influenced_byLabel":"Lolo Ferrari"},{"item":"http://www.wikidata.org/entity/Q3499253","itemLabel":"Steven Parrino","influenced_by":"http://www.wikidata.org/entity/Q312392","influenced_byLabel":"Lucio Fontana"},{"item":"http://www.wikidata.org/entity/Q4496744","itemLabel":"Gayane Khachaturian","influenced_by":"http://www.wikidata.org/entity/Q311311","influenced_byLabel":"Sergei Parajanov"},{"item":"http://www.wikidata.org/entity/Q50004815","itemLabel":"Claudio Perna","influenced_by":"http://www.wikidata.org/entity/Q312392","influenced_byLabel":"Lucio Fontana"},{"item":"http://www.wikidata.org/entity/Q77577084","itemLabel":"Alexander Z. Kruse","influenced_by":"http://www.wikidata.org/entity/Q310800","influenced_byLabel":"John Reed"},{"item":"http://www.wikidata.org/entity/Q7724","itemLabel":"August Strindberg","influenced_by":"http://www.wikidata.org/entity/Q316045","influenced_byLabel":"Georg Brandes"},{"item":"http://www.wikidata.org/entity/Q36661","itemLabel":"Henrik Ibsen","influenced_by":"http://www.wikidata.org/entity/Q316045","influenced_byLabel":"Georg Brandes"},{"item":"http://www.wikidata.org/entity/Q3565655","itemLabel":"Walter Peregoy","influenced_by":"http://www.wikidata.org/entity/Q315647","influenced_byLabel":"David Alfaro Siqueiros"},{"item":"http://www.wikidata.org/entity/Q47538364","itemLabel":"Giovanni Morassutti","influenced_by":"http://www.wikidata.org/entity/Q315258","influenced_byLabel":"Giancarlo Giannini"},{"item":"http://www.wikidata.org/entity/Q453094","itemLabel":"Joe Ranft","influenced_by":"http://www.wikidata.org/entity/Q321790","influenced_byLabel":"Bill Peet"},{"item":"http://www.wikidata.org/entity/Q55078163","itemLabel":"Jackson Jones","influenced_by":"http://www.wikidata.org/entity/Q321790","influenced_byLabel":"Bill Peet"},{"item":"http://www.wikidata.org/entity/Q62057437","itemLabel":"Jenny Snider","influenced_by":"http://www.wikidata.org/entity/Q320821","influenced_byLabel":"Jack Tworkov"},{"item":"http://www.wikidata.org/entity/Q7176","itemLabel":"Naguib Mahfouz","influenced_by":"http://www.wikidata.org/entity/Q328765","influenced_byLabel":"Taha Hussein"},{"item":"http://www.wikidata.org/entity/Q102289","itemLabel":"Buckminster Fuller","influenced_by":"http://www.wikidata.org/entity/Q333402","influenced_byLabel":"Alfred Korzybski"},{"item":"http://www.wikidata.org/entity/Q151803","itemLabel":"Piet Mondrian","influenced_by":"http://www.wikidata.org/entity/Q327625","influenced_byLabel":"Theosophical Society"},{"item":"http://www.wikidata.org/entity/Q3565655","itemLabel":"Walter Peregoy","influenced_by":"http://www.wikidata.org/entity/Q332041","influenced_byLabel":"Jose Clemente Orozco"},{"item":"http://www.wikidata.org/entity/Q77577084","itemLabel":"Alexander Z. Kruse","influenced_by":"http://www.wikidata.org/entity/Q334993","influenced_byLabel":"Eugene V. Debs"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q348408","influenced_byLabel":"Martianus Capella"},{"item":"http://www.wikidata.org/entity/Q36661","itemLabel":"Henrik Ibsen","influenced_by":"http://www.wikidata.org/entity/Q351705","influenced_byLabel":"Henrik Wergeland"},{"item":"http://www.wikidata.org/entity/Q238702","itemLabel":"Brian Aldiss","influenced_by":"http://www.wikidata.org/entity/Q337373","influenced_byLabel":"Olaf Stapledon"},{"item":"http://www.wikidata.org/entity/Q19663229","itemLabel":"Shinzaburo Takeda","influenced_by":"http://www.wikidata.org/entity/Q351430","influenced_byLabel":"Luis Nishizawa"},{"item":"http://www.wikidata.org/entity/Q47538364","itemLabel":"Giovanni Morassutti","influenced_by":"http://www.wikidata.org/entity/Q345379","influenced_byLabel":"Julian Schnabel"},{"item":"http://www.wikidata.org/entity/Q7176","itemLabel":"Naguib Mahfouz","influenced_by":"http://www.wikidata.org/entity/Q368209","influenced_byLabel":"Salama Musa"},{"item":"http://www.wikidata.org/entity/Q36661","itemLabel":"Henrik Ibsen","influenced_by":"http://www.wikidata.org/entity/Q370246","influenced_byLabel":"Jens Peter Jacobsen"},{"item":"http://www.wikidata.org/entity/Q117012","itemLabel":"Yoko Ono","influenced_by":"http://www.wikidata.org/entity/Q366380","influenced_byLabel":"Allan Kaprow"},{"item":"http://www.wikidata.org/entity/Q22279997","itemLabel":"Rex","influenced_by":"http://www.wikidata.org/entity/Q366062","influenced_byLabel":"Tom of Finland"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q375268","influenced_byLabel":"Frank Stella"},{"item":"http://www.wikidata.org/entity/Q3645683","itemLabel":"Bruno Caruso","influenced_by":"http://www.wikidata.org/entity/Q381277","influenced_byLabel":"Renato Guttuso"},{"item":"http://www.wikidata.org/entity/Q17091353","itemLabel":"Nick Saglimbeni","influenced_by":"http://www.wikidata.org/entity/Q384866","influenced_byLabel":"Herb Ritts"},{"item":"http://www.wikidata.org/entity/Q1690717","itemLabel":"Joan Beauchamp Procter","influenced_by":"http://www.wikidata.org/entity/Q435731","influenced_byLabel":"George Albert Boulenger"},{"item":"http://www.wikidata.org/entity/Q4707535","itemLabel":"Alan Pollack","influenced_by":"http://www.wikidata.org/entity/Q448205","influenced_byLabel":"Frank Frazetta"},{"item":"http://www.wikidata.org/entity/Q5109897","itemLabel":"Christian McGrath","influenced_by":"http://www.wikidata.org/entity/Q448205","influenced_byLabel":"Frank Frazetta"},{"item":"http://www.wikidata.org/entity/Q5252901","itemLabel":"Del Kathryn Barton","influenced_by":"http://www.wikidata.org/entity/Q447300","influenced_byLabel":"Kiki Smith"},{"item":"http://www.wikidata.org/entity/Q16210782","itemLabel":"Nicole Cohen","influenced_by":"http://www.wikidata.org/entity/Q439856","influenced_byLabel":"Dennis Oppenheim"},{"item":"http://www.wikidata.org/entity/Q113233","itemLabel":"Audrey Niffenegger","influenced_by":"http://www.wikidata.org/entity/Q453427","influenced_byLabel":"Louise Fitzhugh"},{"item":"http://www.wikidata.org/entity/Q604546","itemLabel":"Ben Vautier","influenced_by":"http://www.wikidata.org/entity/Q452451","influenced_byLabel":"Jacques de la Villeglé"},{"item":"http://www.wikidata.org/entity/Q5386345","itemLabel":"Eric Daigh","influenced_by":"http://www.wikidata.org/entity/Q453883","influenced_byLabel":"Chuck Close"},{"item":"http://www.wikidata.org/entity/Q6074464","itemLabel":"Irving Amen","influenced_by":"http://www.wikidata.org/entity/Q452298","influenced_byLabel":"Jewish ceremonial art"},{"item":"http://www.wikidata.org/entity/Q7153359","itemLabel":"Paul Rusconi","influenced_by":"http://www.wikidata.org/entity/Q453883","influenced_byLabel":"Chuck Close"},{"item":"http://www.wikidata.org/entity/Q55078163","itemLabel":"Jackson Jones","influenced_by":"http://www.wikidata.org/entity/Q453094","influenced_byLabel":"Joe Ranft"},{"item":"http://www.wikidata.org/entity/Q1296941","itemLabel":"Egbert van der Poel","influenced_by":"http://www.wikidata.org/entity/Q467361","influenced_byLabel":"Esaias van de Velde"},{"item":"http://www.wikidata.org/entity/Q15436371","itemLabel":"Neil Williams","influenced_by":"http://www.wikidata.org/entity/Q468760","influenced_byLabel":"John Chamberlain"},{"item":"http://www.wikidata.org/entity/Q30160536","itemLabel":"František Podešva","influenced_by":"http://www.wikidata.org/entity/Q468219","influenced_byLabel":"Vlaho Bukovac"},{"item":"http://www.wikidata.org/entity/Q315348","itemLabel":"Carl Andre","influenced_by":"http://www.wikidata.org/entity/Q477638","influenced_byLabel":"Hollis Frampton"},{"item":"http://www.wikidata.org/entity/Q524476","itemLabel":"Waltraut Cooper","influenced_by":"http://www.wikidata.org/entity/Q504395","influenced_byLabel":"Dan Flavin"},{"item":"http://www.wikidata.org/entity/Q1408646","itemLabel":"Joseph Flüggen","influenced_by":"http://www.wikidata.org/entity/Q505758","influenced_byLabel":"Karl von Piloty"},{"item":"http://www.wikidata.org/entity/Q5116072","itemLabel":"Chul Hyun Ahn","influenced_by":"http://www.wikidata.org/entity/Q504395","influenced_byLabel":"Dan Flavin"},{"item":"http://www.wikidata.org/entity/Q16201325","itemLabel":"Dust La Rock","influenced_by":"http://www.wikidata.org/entity/Q504611","influenced_byLabel":"Peter Blake"},{"item":"http://www.wikidata.org/entity/Q54855070","itemLabel":"Quentin Spohn","influenced_by":"http://www.wikidata.org/entity/Q519534","influenced_byLabel":"Paul Cadmus"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q519367","influenced_byLabel":"Jesús Rafael Soto"},{"item":"http://www.wikidata.org/entity/Q183221","itemLabel":"Jean-Antoine Watteau","influenced_by":"http://www.wikidata.org/entity/Q559969","influenced_byLabel":"Claude Gillot"},{"item":"http://www.wikidata.org/entity/Q4750955","itemLabel":"Anak Agung Gde Sobrat","influenced_by":"http://www.wikidata.org/entity/Q549505","influenced_byLabel":"Walter Spies"},{"item":"http://www.wikidata.org/entity/Q4769447","itemLabel":"Annie Walke","influenced_by":"http://www.wikidata.org/entity/Q557532","influenced_byLabel":"Newlyn School"},{"item":"http://www.wikidata.org/entity/Q15452469","itemLabel":"Ida Bagus Made","influenced_by":"http://www.wikidata.org/entity/Q549505","influenced_byLabel":"Walter Spies"},{"item":"http://www.wikidata.org/entity/Q16214270","itemLabel":"Jason Yates","influenced_by":"http://www.wikidata.org/entity/Q543294","influenced_byLabel":"Mike Kelley"},{"item":"http://www.wikidata.org/entity/Q15909134","itemLabel":"Antoni Egea","influenced_by":"http://www.wikidata.org/entity/Q576913","influenced_byLabel":"Arte Povera"},{"item":"http://www.wikidata.org/entity/Q42532874","itemLabel":"Marie Orensanz","influenced_by":"http://www.wikidata.org/entity/Q567070","influenced_byLabel":"Antonio Seguí"},{"item":"http://www.wikidata.org/entity/Q47538364","itemLabel":"Giovanni Morassutti","influenced_by":"http://www.wikidata.org/entity/Q583434","influenced_byLabel":"Salem Ludwig"},{"item":"http://www.wikidata.org/entity/Q4865681","itemLabel":"Barton Rubenstein","influenced_by":"http://www.wikidata.org/entity/Q632656","influenced_byLabel":"George Rickey"},{"item":"http://www.wikidata.org/entity/Q6533645","itemLabel":"Letterio Calapai","influenced_by":"http://www.wikidata.org/entity/Q641304","influenced_byLabel":"Stanley William Hayter"},{"item":"http://www.wikidata.org/entity/Q3645683","itemLabel":"Bruno Caruso","influenced_by":"http://www.wikidata.org/entity/Q695239","influenced_byLabel":"Ben Shahn"},{"item":"http://www.wikidata.org/entity/Q5520845","itemLabel":"Ganesh Pyne","influenced_by":"http://www.wikidata.org/entity/Q691796","influenced_byLabel":"Abanindranath Tagore"},{"item":"http://www.wikidata.org/entity/Q5248361","itemLabel":"Deborah Remington","influenced_by":"http://www.wikidata.org/entity/Q700336","influenced_byLabel":"Clyfford Still"},{"item":"http://www.wikidata.org/entity/Q5505013","itemLabel":"Fritz Scholder","influenced_by":"http://www.wikidata.org/entity/Q698275","influenced_byLabel":"Wayne Thiebaud"},{"item":"http://www.wikidata.org/entity/Q5525386","itemLabel":"Gary Komarin","influenced_by":"http://www.wikidata.org/entity/Q701952","influenced_byLabel":"Philip Guston"},{"item":"http://www.wikidata.org/entity/Q7368270","itemLabel":"Rosemarie Beck","influenced_by":"http://www.wikidata.org/entity/Q701952","influenced_byLabel":"Philip Guston"},{"item":"http://www.wikidata.org/entity/Q43140177","itemLabel":"Chihung Yang","influenced_by":"http://www.wikidata.org/entity/Q700797","influenced_byLabel":"Li Mei-shu"},{"item":"http://www.wikidata.org/entity/Q114405","itemLabel":"Rockwell Kent","influenced_by":"http://www.wikidata.org/entity/Q724860","influenced_byLabel":"Robert Henri"},{"item":"http://www.wikidata.org/entity/Q261846","itemLabel":"Tsuguharu Foujita","influenced_by":"http://www.wikidata.org/entity/Q751880","influenced_byLabel":"japonism"},{"item":"http://www.wikidata.org/entity/Q983262","itemLabel":"Corneliu Baba","influenced_by":"http://www.wikidata.org/entity/Q733762","influenced_byLabel":"Nicolae Tonitza"},{"item":"http://www.wikidata.org/entity/Q30160536","itemLabel":"František Podešva","influenced_by":"http://www.wikidata.org/entity/Q761020","influenced_byLabel":"August Brömse"},{"item":"http://www.wikidata.org/entity/Q53537920","itemLabel":"Patxi Xabier Lezama Perier","influenced_by":"http://www.wikidata.org/entity/Q810383","influenced_byLabel":"Basque mythology"},{"item":"http://www.wikidata.org/entity/Q78484","itemLabel":"Rudolf Steiner","influenced_by":"http://www.wikidata.org/entity/Q841173","influenced_byLabel":"Christian Rosenkreuz"},{"item":"http://www.wikidata.org/entity/Q125653","itemLabel":"Sargent Claude Johnson","influenced_by":"http://www.wikidata.org/entity/Q829895","influenced_byLabel":"Harlem Renaissance"},{"item":"http://www.wikidata.org/entity/Q6772041","itemLabel":"Marmaduke Cradock","influenced_by":"http://www.wikidata.org/entity/Q833333","influenced_byLabel":"Jakob Bogdani"},{"item":"http://www.wikidata.org/entity/Q15459993","itemLabel":"Patrick Smith","influenced_by":"http://www.wikidata.org/entity/Q862383","influenced_byLabel":"Bill Plympton"},{"item":"http://www.wikidata.org/entity/Q33110601","itemLabel":"Charlie Le Mindu","influenced_by":"http://www.wikidata.org/entity/Q862473","influenced_byLabel":"Thierry Mugler"},{"item":"http://www.wikidata.org/entity/Q311398","itemLabel":"Jean Fouquet","influenced_by":"http://www.wikidata.org/entity/Q894982","influenced_byLabel":"Master of Boucicaut"},{"item":"http://www.wikidata.org/entity/Q1350303","itemLabel":"Holly Johnson","influenced_by":"http://www.wikidata.org/entity/Q895390","influenced_byLabel":"Bow Wow Wow"},{"item":"http://www.wikidata.org/entity/Q3181935","itemLabel":"John Lewis Krimmel","influenced_by":"http://www.wikidata.org/entity/Q902759","influenced_byLabel":"David Wilkie"},{"item":"http://www.wikidata.org/entity/Q6175709","itemLabel":"Jefferson Wood","influenced_by":"http://www.wikidata.org/entity/Q887381","influenced_byLabel":"Bo Hampton"},{"item":"http://www.wikidata.org/entity/Q17017189","itemLabel":"Beatie Wolfe","influenced_by":"http://www.wikidata.org/entity/Q883183","influenced_byLabel":"Blaze Foley"},{"item":"http://www.wikidata.org/entity/Q443540","itemLabel":"Ollie Johnston","influenced_by":"http://www.wikidata.org/entity/Q926614","influenced_byLabel":"Hamilton Luske"},{"item":"http://www.wikidata.org/entity/Q1495354","itemLabel":"Susan Stuart Frackleton","influenced_by":"http://www.wikidata.org/entity/Q919348","influenced_byLabel":"Chinese painting"},{"item":"http://www.wikidata.org/entity/Q4668893","itemLabel":"Abraham Harriton","influenced_by":"http://www.wikidata.org/entity/Q948598","influenced_byLabel":"Albert Pinkham Ryder"},{"item":"http://www.wikidata.org/entity/Q5441968","itemLabel":"Felipe Dulzaides","influenced_by":"http://www.wikidata.org/entity/Q953717","influenced_byLabel":"Gordon Matta-Clark"},{"item":"http://www.wikidata.org/entity/Q6166373","itemLabel":"Jay Batlle","influenced_by":"http://www.wikidata.org/entity/Q953717","influenced_byLabel":"Gordon Matta-Clark"},{"item":"http://www.wikidata.org/entity/Q7225811","itemLabel":"Polly Morgan","influenced_by":"http://www.wikidata.org/entity/Q953124","influenced_byLabel":"Jake and Dinos Chapman"},{"item":"http://www.wikidata.org/entity/Q54855070","itemLabel":"Quentin Spohn","influenced_by":"http://www.wikidata.org/entity/Q938221","influenced_byLabel":"George Tooker"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q969370","influenced_byLabel":"Domenico Maria Novara da Ferrara"},{"item":"http://www.wikidata.org/entity/Q581763","itemLabel":"Graham Sutherland","influenced_by":"http://www.wikidata.org/entity/Q982251","influenced_byLabel":"Samuel Palmer"},{"item":"http://www.wikidata.org/entity/Q64632663","itemLabel":"Gary Tight","influenced_by":"http://www.wikidata.org/entity/Q983221","influenced_byLabel":"Oliver Mtukudzi"},{"item":"http://www.wikidata.org/entity/Q6115567","itemLabel":"Jack Van Ryder","influenced_by":"http://www.wikidata.org/entity/Q1065418","influenced_byLabel":"Charles Marion Russell"},{"item":"http://www.wikidata.org/entity/Q7648747","itemLabel":"Susanne Bartsch","influenced_by":"http://www.wikidata.org/entity/Q1024044","influenced_byLabel":"Leigh Bowery"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q1042835","influenced_byLabel":"Carlos Cruz-Diez"},{"item":"http://www.wikidata.org/entity/Q29884367","itemLabel":"Luc Bestetti","influenced_by":"http://www.wikidata.org/entity/Q1125077","influenced_byLabel":"Fortunato Depero"},{"item":"http://www.wikidata.org/entity/Q193300","itemLabel":"Osamu Tezuka","influenced_by":"http://www.wikidata.org/entity/Q1173200","influenced_byLabel":"Dave Fleischer"},{"item":"http://www.wikidata.org/entity/Q26827290","itemLabel":"Johann Baptist Heinefetter","influenced_by":"http://www.wikidata.org/entity/Q1167278","influenced_byLabel":"Dietrich Monten"},{"item":"http://www.wikidata.org/entity/Q5495840","itemLabel":"Fred Machetanz","influenced_by":"http://www.wikidata.org/entity/Q1333928","influenced_byLabel":"Maxfield Parrish"},{"item":"http://www.wikidata.org/entity/Q6378225","itemLabel":"Katsuya Kondō","influenced_by":"http://www.wikidata.org/entity/Q1315839","influenced_byLabel":"Osamu Dezaki"},{"item":"http://www.wikidata.org/entity/Q17017286","itemLabel":"Michael Cummings","influenced_by":"http://www.wikidata.org/entity/Q1291679","influenced_byLabel":"Romare Bearden"},{"item":"http://www.wikidata.org/entity/Q62057437","itemLabel":"Jenny Snider","influenced_by":"http://www.wikidata.org/entity/Q1301849","influenced_byLabel":"Al Held"},{"item":"http://www.wikidata.org/entity/Q6235193","itemLabel":"John Gerrard","influenced_by":"http://www.wikidata.org/entity/Q1370630","influenced_byLabel":"Pierre Huyghe"},{"item":"http://www.wikidata.org/entity/Q4722708","itemLabel":"Alfred Garth Jones","influenced_by":"http://www.wikidata.org/entity/Q1470796","influenced_byLabel":"Frederick Sandys"},{"item":"http://www.wikidata.org/entity/Q5732793","itemLabel":"Herb Aach","influenced_by":"http://www.wikidata.org/entity/Q1520130","influenced_byLabel":"color theory"},{"item":"http://www.wikidata.org/entity/Q21130532","itemLabel":"Josef Vacke","influenced_by":"http://www.wikidata.org/entity/Q1405243","influenced_byLabel":"Ferdinand Frantisek Engelmüller"},{"item":"http://www.wikidata.org/entity/Q2158704","itemLabel":"Robert Schade","influenced_by":"http://www.wikidata.org/entity/Q1607347","influenced_byLabel":"Henry Vianden"},{"item":"http://www.wikidata.org/entity/Q4099197","itemLabel":"Marius Bunescu","influenced_by":"http://www.wikidata.org/entity/Q1611274","influenced_byLabel":"Hermann Groeber"},{"item":"http://www.wikidata.org/entity/Q4720356","itemLabel":"Alexander Weygers","influenced_by":"http://www.wikidata.org/entity/Q1869845","influenced_byLabel":"Lorado Taft"},{"item":"http://www.wikidata.org/entity/Q30160536","itemLabel":"František Podešva","influenced_by":"http://www.wikidata.org/entity/Q2104325","influenced_byLabel":"Jan Preisler"},{"item":"http://www.wikidata.org/entity/Q443540","itemLabel":"Ollie Johnston","influenced_by":"http://www.wikidata.org/entity/Q2525726","influenced_byLabel":"Bill Tytla"},{"item":"http://www.wikidata.org/entity/Q63478","itemLabel":"Jonah Bokaer","influenced_by":"http://www.wikidata.org/entity/Q2633699","influenced_byLabel":"Anne Carson"},{"item":"http://www.wikidata.org/entity/Q6653515","itemLabel":"Liu Guosong","influenced_by":"http://www.wikidata.org/entity/Q2967568","influenced_byLabel":"Chu Teh-Chun"},{"item":"http://www.wikidata.org/entity/Q6772041","itemLabel":"Marmaduke Cradock","influenced_by":"http://www.wikidata.org/entity/Q3081300","influenced_byLabel":"Francis Barlow"},{"item":"http://www.wikidata.org/entity/Q19877209","itemLabel":"Arthur Ted Powell","influenced_by":"http://www.wikidata.org/entity/Q3445740","influenced_byLabel":"Roy Ascott"},{"item":"http://www.wikidata.org/entity/Q42532874","itemLabel":"Marie Orensanz","influenced_by":"http://www.wikidata.org/entity/Q3724491","influenced_byLabel":"Emilio Pettoruti"},{"item":"http://www.wikidata.org/entity/Q268883","itemLabel":"Stefan Kanchev","influenced_by":"http://www.wikidata.org/entity/Q4179524","influenced_byLabel":"Dechko Uzunov"},{"item":"http://www.wikidata.org/entity/Q5216985","itemLabel":"Daniel Donche, Jr.","influenced_by":"http://www.wikidata.org/entity/Q4118164","influenced_byLabel":"Craig Clevenger"},{"item":"http://www.wikidata.org/entity/Q134741","itemLabel":"Camille Pissarro","influenced_by":"http://www.wikidata.org/entity/Q4992964","influenced_byLabel":"Fritz Melbye"},{"item":"http://www.wikidata.org/entity/Q20823342","itemLabel":"Ger Jansen","influenced_by":"http://www.wikidata.org/entity/Q4960240","influenced_byLabel":"Kees van Bohemen"},{"item":"http://www.wikidata.org/entity/Q581763","itemLabel":"Graham Sutherland","influenced_by":"http://www.wikidata.org/entity/Q5423942","influenced_byLabel":"F. L. Griggs"},{"item":"http://www.wikidata.org/entity/Q5163586","itemLabel":"Constance Stokes","influenced_by":"http://www.wikidata.org/entity/Q5536871","influenced_byLabel":"George Bell"},{"item":"http://www.wikidata.org/entity/Q7791711","itemLabel":"Thomas Lanigan-Schmidt","influenced_by":"http://www.wikidata.org/entity/Q5461886","influenced_byLabel":"Florine Stettheimer"},{"item":"http://www.wikidata.org/entity/Q16058216","itemLabel":"Sanell Aggenbach","influenced_by":"http://www.wikidata.org/entity/Q5296683","influenced_byLabel":"Brett Murray"},{"item":"http://www.wikidata.org/entity/Q19666986","itemLabel":"Veranoa Hetet","influenced_by":"http://www.wikidata.org/entity/Q5385623","influenced_byLabel":"Erenora Puketapu-Hetet"},{"item":"http://www.wikidata.org/entity/Q57520045","itemLabel":"John Trotter","influenced_by":"http://www.wikidata.org/entity/Q5482749","influenced_byLabel":"Francis Wheatley"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q5340015","influenced_byLabel":"Edna Andrade"},{"item":"http://www.wikidata.org/entity/Q4538","itemLabel":"Jonathan Winters","influenced_by":"http://www.wikidata.org/entity/Q6075016","influenced_byLabel":"Irwin Corey"},{"item":"http://www.wikidata.org/entity/Q7021744","itemLabel":"Ng Eng Teng","influenced_by":"http://www.wikidata.org/entity/Q5547081","influenced_byLabel":"Georgette Chen"},{"item":"http://www.wikidata.org/entity/Q18632102","itemLabel":"Lyonel Grant","influenced_by":"http://www.wikidata.org/entity/Q5893203","influenced_byLabel":"Hone Taiapa"},{"item":"http://www.wikidata.org/entity/Q892493","itemLabel":"Goddy Leye","influenced_by":"http://www.wikidata.org/entity/Q6568964","influenced_byLabel":"Pascal Kenfack"},{"item":"http://www.wikidata.org/entity/Q5525662","itemLabel":"Gary Noffke","influenced_by":"http://www.wikidata.org/entity/Q6456368","influenced_byLabel":"L. Brent Kington"},{"item":"http://www.wikidata.org/entity/Q7340489","itemLabel":"Rob Redding","influenced_by":"http://www.wikidata.org/entity/Q6536603","influenced_byLabel":"Lewis Gordon"},{"item":"http://www.wikidata.org/entity/Q5340230","itemLabel":"Edouard Wah","influenced_by":"http://www.wikidata.org/entity/Q7178341","influenced_byLabel":"Petion Savain"},{"item":"http://www.wikidata.org/entity/Q18926908","itemLabel":"Pakaariki Harrison","influenced_by":"http://www.wikidata.org/entity/Q7195366","influenced_byLabel":"Pineamine Taiapa"},{"item":"http://www.wikidata.org/entity/Q29884367","itemLabel":"Luc Bestetti","influenced_by":"http://www.wikidata.org/entity/Q7406692","influenced_byLabel":"Salvatore Scarpitta"},{"item":"http://www.wikidata.org/entity/Q531919","itemLabel":"Mabel Alvarez","influenced_by":"http://www.wikidata.org/entity/Q8002940","influenced_byLabel":"Will Levington Comfort"},{"item":"http://www.wikidata.org/entity/Q317736","itemLabel":"Utagawa Kuniyoshi","influenced_by":"http://www.wikidata.org/entity/Q11400282","influenced_byLabel":"Katsukawa Shuntei"},{"item":"http://www.wikidata.org/entity/Q2992864","itemLabel":"Jack Levine","influenced_by":"http://www.wikidata.org/entity/Q11105744","influenced_byLabel":"Hyman Bloom"},{"item":"http://www.wikidata.org/entity/Q5090723","itemLabel":"Chen Chong Swee","influenced_by":"http://www.wikidata.org/entity/Q12061522","influenced_byLabel":"Jean Le Mayeur"},{"item":"http://www.wikidata.org/entity/Q21130532","itemLabel":"Josef Vacke","influenced_by":"http://www.wikidata.org/entity/Q12043189","influenced_byLabel":"Otakar Nejedlý"},{"item":"http://www.wikidata.org/entity/Q193300","itemLabel":"Osamu Tezuka","influenced_by":"http://www.wikidata.org/entity/Q15492951","influenced_byLabel":"Milt Gross"},{"item":"http://www.wikidata.org/entity/Q15443122","itemLabel":"Harry Carmean","influenced_by":"http://www.wikidata.org/entity/Q13476286","influenced_byLabel":"Lorser Feitelson"},{"item":"http://www.wikidata.org/entity/Q19359621","itemLabel":"Elizabeth Heaphy Murray","influenced_by":"http://www.wikidata.org/entity/Q14538310","influenced_byLabel":"Thomas Heaphy"},{"item":"http://www.wikidata.org/entity/Q6078612","itemLabel":"Isaiah Zagar","influenced_by":"http://www.wikidata.org/entity/Q16008449","influenced_byLabel":"Clarence Schmidt"},{"item":"http://www.wikidata.org/entity/Q25391305","itemLabel":"Angela Marzullo","influenced_by":"http://www.wikidata.org/entity/Q16142906","influenced_byLabel":"Susan Mogul"},{"item":"http://www.wikidata.org/entity/Q55219339","itemLabel":"Ronald Markman","influenced_by":"http://www.wikidata.org/entity/Q16161621","influenced_byLabel":"Joseph Albers"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q18356603","influenced_byLabel":"Barbara Kasten"},{"item":"http://www.wikidata.org/entity/Q6772041","itemLabel":"Marmaduke Cradock","influenced_by":"http://www.wikidata.org/entity/Q18516764","influenced_byLabel":"Peter Frans Casteels"},{"item":"http://www.wikidata.org/entity/Q21130532","itemLabel":"Josef Vacke","influenced_by":"http://www.wikidata.org/entity/Q21130399","influenced_byLabel":"Lucie Klímová"},{"item":"http://www.wikidata.org/entity/Q21899280","itemLabel":"Julieta XLF","influenced_by":"http://www.wikidata.org/entity/Q19801663","influenced_byLabel":"Escif"},{"item":"http://www.wikidata.org/entity/Q43140177","itemLabel":"Chihung Yang","influenced_by":"http://www.wikidata.org/entity/Q23913508","influenced_byLabel":"Liao Chi-chun"},{"item":"http://www.wikidata.org/entity/Q43140177","itemLabel":"Chihung Yang","influenced_by":"http://www.wikidata.org/entity/Q23932743","influenced_byLabel":"Yang San-lang"},{"item":"http://www.wikidata.org/entity/Q55078163","itemLabel":"Jackson Jones","influenced_by":"http://www.wikidata.org/entity/Q26265164","influenced_byLabel":"Jordy Ranft"},{"item":"http://www.wikidata.org/entity/Q63340624","itemLabel":"Pierre Kiandjan","influenced_by":"http://www.wikidata.org/entity/Q27093753","influenced_byLabel":"Ivan Serpa"},{"item":"http://www.wikidata.org/entity/Q64632663","itemLabel":"Gary Tight","influenced_by":"http://www.wikidata.org/entity/Q23007667","influenced_byLabel":"Jah Prayzah"},{"item":"http://www.wikidata.org/entity/Q20739132","itemLabel":"Carlo Bazzi","influenced_by":"http://www.wikidata.org/entity/Q37666953","influenced_byLabel":"Stefano Bersani"}];

const musicians = [{"item":"http://www.wikidata.org/entity/Q558384","itemLabel":"Théophile de Donder","influenced_by":"http://www.wikidata.org/entity/Q937","influenced_byLabel":"Albert Einstein"},{"item":"http://www.wikidata.org/entity/Q737570","itemLabel":"Jeff Noon","influenced_by":"http://www.wikidata.org/entity/Q909","influenced_byLabel":"Jorge Luis Borges"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q937","influenced_byLabel":"Albert Einstein"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q1299","influenced_byLabel":"The Beatles"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q1299","influenced_byLabel":"The Beatles"},{"item":"http://www.wikidata.org/entity/Q194333","itemLabel":"Billy Joel","influenced_by":"http://www.wikidata.org/entity/Q1299","influenced_byLabel":"The Beatles"},{"item":"http://www.wikidata.org/entity/Q236613","itemLabel":"Martha Wainwright","influenced_by":"http://www.wikidata.org/entity/Q1276","influenced_byLabel":"Leonard Cohen"},{"item":"http://www.wikidata.org/entity/Q345494","itemLabel":"Ryuichi Sakamoto","influenced_by":"http://www.wikidata.org/entity/Q1299","influenced_byLabel":"The Beatles"},{"item":"http://www.wikidata.org/entity/Q254","itemLabel":"Wolfgang Amadeus Mozart","influenced_by":"http://www.wikidata.org/entity/Q1339","influenced_byLabel":"Johann Sebastian Bach"},{"item":"http://www.wikidata.org/entity/Q1339","itemLabel":"Johann Sebastian Bach","influenced_by":"http://www.wikidata.org/entity/Q1340","influenced_byLabel":"Antonio Vivaldi"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q1339","influenced_byLabel":"Johann Sebastian Bach"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q1299","influenced_byLabel":"The Beatles"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q1744","influenced_byLabel":"Madonna"},{"item":"http://www.wikidata.org/entity/Q11975","itemLabel":"Britney Spears","influenced_by":"http://www.wikidata.org/entity/Q1744","influenced_byLabel":"Madonna"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q1631","influenced_byLabel":"Édith Piaf"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q1666","influenced_byLabel":"Jacques Brel"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q1804","influenced_byLabel":"Barbara"},{"item":"http://www.wikidata.org/entity/Q11975","itemLabel":"Britney Spears","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q24356","itemLabel":"Taryll Jackson","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q34086","itemLabel":"Justin Bieber","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q193710","itemLabel":"Ne-Yo","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q2384433","itemLabel":"TJ Jackson","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q31900046","itemLabel":"Eddie Fountain","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q109612","itemLabel":"Thelonious Monk","influenced_by":"http://www.wikidata.org/entity/Q4700","influenced_byLabel":"Claude Debussy"},{"item":"http://www.wikidata.org/entity/Q156193","itemLabel":"Pierre Boulez","influenced_by":"http://www.wikidata.org/entity/Q4700","influenced_byLabel":"Claude Debussy"},{"item":"http://www.wikidata.org/entity/Q192655","itemLabel":"Lara Fabian","influenced_by":"http://www.wikidata.org/entity/Q5105","influenced_byLabel":"Céline Dion"},{"item":"http://www.wikidata.org/entity/Q298209","itemLabel":"Willow Smith","influenced_by":"http://www.wikidata.org/entity/Q4235","influenced_byLabel":"Miley Cyrus"},{"item":"http://www.wikidata.org/entity/Q310300","itemLabel":"James Taylor","influenced_by":"http://www.wikidata.org/entity/Q4061","influenced_byLabel":"Woody Guthrie"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q4604","influenced_byLabel":"Confucius"},{"item":"http://www.wikidata.org/entity/Q25806729","itemLabel":"Enoch-Jude Danquah","influenced_by":"http://www.wikidata.org/entity/Q3772","influenced_byLabel":"Quentin Tarantino"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q59868628","itemLabel":"Cor Akim","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q59868628","itemLabel":"Cor Akim","influenced_by":"http://www.wikidata.org/entity/Q5105","influenced_byLabel":"Céline Dion"},{"item":"http://www.wikidata.org/entity/Q62061920","itemLabel":"Pablo Rever","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q5105","influenced_byLabel":"Céline Dion"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q5105","influenced_byLabel":"Céline Dion"},{"item":"http://www.wikidata.org/entity/Q98669425","itemLabel":"Q98669425","influenced_by":"http://www.wikidata.org/entity/Q2831","influenced_byLabel":"Michael Jackson"},{"item":"http://www.wikidata.org/entity/Q44398","itemLabel":"Falco","influenced_by":"http://www.wikidata.org/entity/Q5383","influenced_byLabel":"David Bowie"},{"item":"http://www.wikidata.org/entity/Q237497","itemLabel":"Cherie Currie","influenced_by":"http://www.wikidata.org/entity/Q5383","influenced_byLabel":"David Bowie"},{"item":"http://www.wikidata.org/entity/Q1544666","itemLabel":"Curtis Jones","influenced_by":"http://www.wikidata.org/entity/Q5383","influenced_byLabel":"David Bowie"},{"item":"http://www.wikidata.org/entity/Q60041850","itemLabel":"Pompay","influenced_by":"http://www.wikidata.org/entity/Q5608","influenced_byLabel":"Eminem"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q5950","influenced_byLabel":"James Brown"},{"item":"http://www.wikidata.org/entity/Q5928","itemLabel":"Jimi Hendrix","influenced_by":"http://www.wikidata.org/entity/Q5921","influenced_byLabel":"Chuck Berry"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q5928","influenced_byLabel":"Jimi Hendrix"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q5950","influenced_byLabel":"James Brown"},{"item":"http://www.wikidata.org/entity/Q117139","itemLabel":"Wiz Khalifa","influenced_by":"http://www.wikidata.org/entity/Q5928","influenced_byLabel":"Jimi Hendrix"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q186924","itemLabel":"Hillel Slovak","influenced_by":"http://www.wikidata.org/entity/Q5928","influenced_byLabel":"Jimi Hendrix"},{"item":"http://www.wikidata.org/entity/Q194287","itemLabel":"Joe Satriani","influenced_by":"http://www.wikidata.org/entity/Q5928","influenced_byLabel":"Jimi Hendrix"},{"item":"http://www.wikidata.org/entity/Q860068","itemLabel":"Mike Einziger","influenced_by":"http://www.wikidata.org/entity/Q5928","influenced_byLabel":"Jimi Hendrix"},{"item":"http://www.wikidata.org/entity/Q1524938","itemLabel":"Kane Roberts","influenced_by":"http://www.wikidata.org/entity/Q5928","influenced_byLabel":"Jimi Hendrix"},{"item":"http://www.wikidata.org/entity/Q3992882","itemLabel":"Tommy Allsup","influenced_by":"http://www.wikidata.org/entity/Q5977","influenced_byLabel":"Buddy Holly"},{"item":"http://www.wikidata.org/entity/Q7821874","itemLabel":"Tony Bellotto","influenced_by":"http://www.wikidata.org/entity/Q5928","influenced_byLabel":"Jimi Hendrix"},{"item":"http://www.wikidata.org/entity/Q28374835","itemLabel":"2Ru3 (true)","influenced_by":"http://www.wikidata.org/entity/Q6107","influenced_byLabel":"Tupac Shakur"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q169566","influenced_byLabel":"H. P. Lovecraft"},{"item":"http://www.wikidata.org/entity/Q64005347","itemLabel":"Jame$","influenced_by":"http://www.wikidata.org/entity/Q167635","influenced_byLabel":"Tyler, the Creator"},{"item":"http://www.wikidata.org/entity/Q216896","itemLabel":"L. Ron Hubbard","influenced_by":"http://www.wikidata.org/entity/Q172684","influenced_byLabel":"Aleister Crowley"},{"item":"http://www.wikidata.org/entity/Q299331","itemLabel":"Mario Lanza","influenced_by":"http://www.wikidata.org/entity/Q170726","influenced_byLabel":"Enrico Caruso"},{"item":"http://www.wikidata.org/entity/Q55468943","itemLabel":"Luis Rizzo","influenced_by":"http://www.wikidata.org/entity/Q172505","influenced_byLabel":"Astor Piazzolla"},{"item":"http://www.wikidata.org/entity/Q251984","itemLabel":"Spencer Breslin","influenced_by":"http://www.wikidata.org/entity/Q178552","influenced_byLabel":"Mickey Rourke"},{"item":"http://www.wikidata.org/entity/Q295919","itemLabel":"Sam Cooke","influenced_by":"http://www.wikidata.org/entity/Q175857","influenced_byLabel":"Steve Perry"},{"item":"http://www.wikidata.org/entity/Q5040285","itemLabel":"Carl Hancock Rux","influenced_by":"http://www.wikidata.org/entity/Q174210","influenced_byLabel":"Julio Cortázar"},{"item":"http://www.wikidata.org/entity/Q18418738","itemLabel":"Rafael Ángel Troyo","influenced_by":"http://www.wikidata.org/entity/Q173767","influenced_byLabel":"Rubén Darío"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q181483","influenced_byLabel":"Jackie Wilson"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q179257","influenced_byLabel":"Timbaland"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q180453","influenced_byLabel":"Dolly Parton"},{"item":"http://www.wikidata.org/entity/Q194220","itemLabel":"Nas","influenced_by":"http://www.wikidata.org/entity/Q179157","influenced_byLabel":"The Notorious B.I.G."},{"item":"http://www.wikidata.org/entity/Q345494","itemLabel":"Ryuichi Sakamoto","influenced_by":"http://www.wikidata.org/entity/Q180727","influenced_byLabel":"John Cage"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q179266","influenced_byLabel":"Jiddu Krishnamurti"},{"item":"http://www.wikidata.org/entity/Q541599","itemLabel":"Dolores O'Riordan","influenced_by":"http://www.wikidata.org/entity/Q180598","influenced_byLabel":"The Smiths"},{"item":"http://www.wikidata.org/entity/Q1066587","itemLabel":"Charles de Lint","influenced_by":"http://www.wikidata.org/entity/Q182589","influenced_byLabel":"William Morris"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q181683","influenced_byLabel":"Carly Simon"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q181689","influenced_byLabel":"Blind Willie McTell"},{"item":"http://www.wikidata.org/entity/Q216288","itemLabel":"Garth Brooks","influenced_by":"http://www.wikidata.org/entity/Q183092","influenced_byLabel":"Merle Haggard"},{"item":"http://www.wikidata.org/entity/Q505476","itemLabel":"Avicii","influenced_by":"http://www.wikidata.org/entity/Q185828","influenced_byLabel":"Daft Punk"},{"item":"http://www.wikidata.org/entity/Q3639322","itemLabel":"Biagio Bellotti","influenced_by":"http://www.wikidata.org/entity/Q186202","influenced_byLabel":"Giovanni Battista Tiepolo"},{"item":"http://www.wikidata.org/entity/Q9032251","itemLabel":"Michael Calfan","influenced_by":"http://www.wikidata.org/entity/Q185828","influenced_byLabel":"Daft Punk"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q185928","influenced_byLabel":"Henry Mancini"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q188176","influenced_byLabel":"William S. Burroughs"},{"item":"http://www.wikidata.org/entity/Q127330","itemLabel":"Frank Zappa","influenced_by":"http://www.wikidata.org/entity/Q190933","influenced_byLabel":"Anton Webern"},{"item":"http://www.wikidata.org/entity/Q3806289","itemLabel":"Jake Pitts","influenced_by":"http://www.wikidata.org/entity/Q190155","influenced_byLabel":"Van Halen"},{"item":"http://www.wikidata.org/entity/Q5618290","itemLabel":"Gun Arvidssen","influenced_by":"http://www.wikidata.org/entity/Q188987","influenced_byLabel":"William Gibson"},{"item":"http://www.wikidata.org/entity/Q26831189","itemLabel":"Adrian D. Holmes","influenced_by":"http://www.wikidata.org/entity/Q191499","influenced_byLabel":"Scott Joplin"},{"item":"http://www.wikidata.org/entity/Q59868628","itemLabel":"Cor Akim","influenced_by":"http://www.wikidata.org/entity/Q191170","influenced_byLabel":"Fallujah"},{"item":"http://www.wikidata.org/entity/Q62107124","itemLabel":"Viktor Van River","influenced_by":"http://www.wikidata.org/entity/Q191352","influenced_byLabel":"Portishead"},{"item":"http://www.wikidata.org/entity/Q94679164","itemLabel":"Khaledzou","influenced_by":"http://www.wikidata.org/entity/Q188713","influenced_byLabel":"The Kinks"},{"item":"http://www.wikidata.org/entity/Q314343","itemLabel":"James Shaffer","influenced_by":"http://www.wikidata.org/entity/Q193397","influenced_byLabel":"Steve Vai"},{"item":"http://www.wikidata.org/entity/Q453583","itemLabel":"Julian Bream","influenced_by":"http://www.wikidata.org/entity/Q192529","influenced_byLabel":"Andrés Segovia Torres"},{"item":"http://www.wikidata.org/entity/Q1729370","itemLabel":"Karim Ziad","influenced_by":"http://www.wikidata.org/entity/Q192465","influenced_byLabel":"Chick Corea"},{"item":"http://www.wikidata.org/entity/Q3770404","itemLabel":"Giuseppe Dati","influenced_by":"http://www.wikidata.org/entity/Q193018","influenced_byLabel":"Gianni Rodari"},{"item":"http://www.wikidata.org/entity/Q5441972","itemLabel":"Felipe Dylon","influenced_by":"http://www.wikidata.org/entity/Q192515","influenced_byLabel":"Jason Mraz"},{"item":"http://www.wikidata.org/entity/Q7821874","itemLabel":"Tony Bellotto","influenced_by":"http://www.wikidata.org/entity/Q192359","influenced_byLabel":"João Gilberto"},{"item":"http://www.wikidata.org/entity/Q12949115","itemLabel":"Jan-Mari Carlotti","influenced_by":"http://www.wikidata.org/entity/Q192133","influenced_byLabel":"Robert Johnson"},{"item":"http://www.wikidata.org/entity/Q130742","itemLabel":"Alanis Morissette","influenced_by":"http://www.wikidata.org/entity/Q193982","influenced_byLabel":"Sinéad O'Connor"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q193871","influenced_byLabel":"Marshall McLuhan"},{"item":"http://www.wikidata.org/entity/Q502896","itemLabel":"John Norum","influenced_by":"http://www.wikidata.org/entity/Q202314","influenced_byLabel":"Thin Lizzy"},{"item":"http://www.wikidata.org/entity/Q528140","itemLabel":"Mike Inez","influenced_by":"http://www.wikidata.org/entity/Q202314","influenced_byLabel":"Thin Lizzy"},{"item":"http://www.wikidata.org/entity/Q1354843","itemLabel":"Machine Gun Kelly","influenced_by":"http://www.wikidata.org/entity/Q193676","influenced_byLabel":"Ludacris"},{"item":"http://www.wikidata.org/entity/Q3779568","itemLabel":"Guilherme Arantes","influenced_by":"http://www.wikidata.org/entity/Q200131","influenced_byLabel":"Antônio Carlos Jobim"},{"item":"http://www.wikidata.org/entity/Q7319161","itemLabel":"Rex Carroll","influenced_by":"http://www.wikidata.org/entity/Q202937","influenced_byLabel":"Stevie Ray Vaughan"},{"item":"http://www.wikidata.org/entity/Q10306713","itemLabel":"Jerry Adriani","influenced_by":"http://www.wikidata.org/entity/Q199943","influenced_byLabel":"Adriano Celentano"},{"item":"http://www.wikidata.org/entity/Q10306713","itemLabel":"Jerry Adriani","influenced_by":"http://www.wikidata.org/entity/Q202729","influenced_byLabel":"Jerry Lee Lewis"},{"item":"http://www.wikidata.org/entity/Q31358769","itemLabel":"Myfyr Isaac","influenced_by":"http://www.wikidata.org/entity/Q202319","influenced_byLabel":"Bill Haley"},{"item":"http://www.wikidata.org/entity/Q50329054","itemLabel":"Atheen","influenced_by":"http://www.wikidata.org/entity/Q193744","influenced_byLabel":"Tori Amos"},{"item":"http://www.wikidata.org/entity/Q7294","itemLabel":"Johannes Brahms","influenced_by":"http://www.wikidata.org/entity/Q254","influenced_byLabel":"Wolfgang Amadeus Mozart"},{"item":"http://www.wikidata.org/entity/Q7294","itemLabel":"Johannes Brahms","influenced_by":"http://www.wikidata.org/entity/Q255","influenced_byLabel":"Ludwig van Beethoven"},{"item":"http://www.wikidata.org/entity/Q7302","itemLabel":"George Frideric Handel","influenced_by":"http://www.wikidata.org/entity/Q21","influenced_byLabel":"England"},{"item":"http://www.wikidata.org/entity/Q7302","itemLabel":"George Frideric Handel","influenced_by":"http://www.wikidata.org/entity/Q38","influenced_byLabel":"Italy"},{"item":"http://www.wikidata.org/entity/Q7302","itemLabel":"George Frideric Handel","influenced_by":"http://www.wikidata.org/entity/Q142","influenced_byLabel":"France"},{"item":"http://www.wikidata.org/entity/Q7302","itemLabel":"George Frideric Handel","influenced_by":"http://www.wikidata.org/entity/Q183","influenced_byLabel":"Germany"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q254","influenced_byLabel":"Wolfgang Amadeus Mozart"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q255","influenced_byLabel":"Ludwig van Beethoven"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q714","influenced_byLabel":"Stevie Wonder"},{"item":"http://www.wikidata.org/entity/Q168555","itemLabel":"Alison Goldfrapp","influenced_by":"http://www.wikidata.org/entity/Q636","influenced_byLabel":"Kate Bush"},{"item":"http://www.wikidata.org/entity/Q243059","itemLabel":"Anja Garbarek","influenced_by":"http://www.wikidata.org/entity/Q636","influenced_byLabel":"Kate Bush"},{"item":"http://www.wikidata.org/entity/Q371202","itemLabel":"Big Boi","influenced_by":"http://www.wikidata.org/entity/Q636","influenced_byLabel":"Kate Bush"},{"item":"http://www.wikidata.org/entity/Q2416850","itemLabel":"Theo Bleckmann","influenced_by":"http://www.wikidata.org/entity/Q636","influenced_byLabel":"Kate Bush"},{"item":"http://www.wikidata.org/entity/Q4019781","itemLabel":"Wild Nothing","influenced_by":"http://www.wikidata.org/entity/Q636","influenced_byLabel":"Kate Bush"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q882","influenced_byLabel":"Charlie Chaplin"},{"item":"http://www.wikidata.org/entity/Q1060636","itemLabel":"Daniel Handler","influenced_by":"http://www.wikidata.org/entity/Q905","influenced_byLabel":"Franz Kafka"},{"item":"http://www.wikidata.org/entity/Q1066587","itemLabel":"Charles de Lint","influenced_by":"http://www.wikidata.org/entity/Q892","influenced_byLabel":"J. R. R. Tolkien"},{"item":"http://www.wikidata.org/entity/Q2068496","itemLabel":"André Olbrich","influenced_by":"http://www.wikidata.org/entity/Q892","influenced_byLabel":"J. R. R. Tolkien"},{"item":"http://www.wikidata.org/entity/Q219631","itemLabel":"Adam Levine","influenced_by":"http://www.wikidata.org/entity/Q714","influenced_byLabel":"Stevie Wonder"},{"item":"http://www.wikidata.org/entity/Q712624","itemLabel":"Dwele","influenced_by":"http://www.wikidata.org/entity/Q714","influenced_byLabel":"Stevie Wonder"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q762","influenced_byLabel":"Leonardo da Vinci"},{"item":"http://www.wikidata.org/entity/Q62061920","itemLabel":"Pablo Rever","influenced_by":"http://www.wikidata.org/entity/Q714","influenced_byLabel":"Stevie Wonder"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q303","influenced_byLabel":"Elvis Presley"},{"item":"http://www.wikidata.org/entity/Q5928","itemLabel":"Jimi Hendrix","influenced_by":"http://www.wikidata.org/entity/Q392","influenced_byLabel":"Bob Dylan"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q449","influenced_byLabel":"Georges Brassens"},{"item":"http://www.wikidata.org/entity/Q10306713","itemLabel":"Jerry Adriani","influenced_by":"http://www.wikidata.org/entity/Q303","influenced_byLabel":"Elvis Presley"},{"item":"http://www.wikidata.org/entity/Q12949115","itemLabel":"Jan-Mari Carlotti","influenced_by":"http://www.wikidata.org/entity/Q392","influenced_byLabel":"Bob Dylan"},{"item":"http://www.wikidata.org/entity/Q12949115","itemLabel":"Jan-Mari Carlotti","influenced_by":"http://www.wikidata.org/entity/Q449","influenced_byLabel":"Georges Brassens"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q396","influenced_byLabel":"U2"},{"item":"http://www.wikidata.org/entity/Q35900","itemLabel":"Omar Khayyám","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q561596","itemLabel":"Johnny Clegg","influenced_by":"http://www.wikidata.org/entity/Q8023","influenced_byLabel":"Nelson Mandela"},{"item":"http://www.wikidata.org/entity/Q3347223","itemLabel":"Néstor Barron","influenced_by":"http://www.wikidata.org/entity/Q7833","influenced_byLabel":"Boris Vian"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q7349","influenced_byLabel":"Joseph Haydn"},{"item":"http://www.wikidata.org/entity/Q25806729","itemLabel":"Enoch-Jude Danquah","influenced_by":"http://www.wikidata.org/entity/Q7374","influenced_byLabel":"Alfred Hitchcock"},{"item":"http://www.wikidata.org/entity/Q28532904","itemLabel":"Timothy C. Armstrong","influenced_by":"http://www.wikidata.org/entity/Q7934","influenced_byLabel":"Frank Herbert"},{"item":"http://www.wikidata.org/entity/Q25806729","itemLabel":"Enoch-Jude Danquah","influenced_by":"http://www.wikidata.org/entity/Q8877","influenced_byLabel":"Steven Spielberg"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q8877","influenced_byLabel":"Steven Spielberg"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q6515","influenced_byLabel":"Mervyn Peake"},{"item":"http://www.wikidata.org/entity/Q1066587","itemLabel":"Charles de Lint","influenced_by":"http://www.wikidata.org/entity/Q6515","influenced_byLabel":"Mervyn Peake"},{"item":"http://www.wikidata.org/entity/Q7833","itemLabel":"Boris Vian","influenced_by":"http://www.wikidata.org/entity/Q7197","influenced_byLabel":"Simone de Beauvoir"},{"item":"http://www.wikidata.org/entity/Q345494","itemLabel":"Ryuichi Sakamoto","influenced_by":"http://www.wikidata.org/entity/Q7346","influenced_byLabel":"John Coltrane"},{"item":"http://www.wikidata.org/entity/Q26831189","itemLabel":"Adrian D. Holmes","influenced_by":"http://www.wikidata.org/entity/Q7315","influenced_byLabel":"Pyotr Ilyich Tchaikovsky"},{"item":"http://www.wikidata.org/entity/Q11975","itemLabel":"Britney Spears","influenced_by":"http://www.wikidata.org/entity/Q34389","influenced_byLabel":"Whitney Houston"},{"item":"http://www.wikidata.org/entity/Q192410","itemLabel":"Jennifer Hudson","influenced_by":"http://www.wikidata.org/entity/Q34389","influenced_byLabel":"Whitney Houston"},{"item":"http://www.wikidata.org/entity/Q25894076","itemLabel":"Luca Chikovani","influenced_by":"http://www.wikidata.org/entity/Q34086","influenced_byLabel":"Justin Bieber"},{"item":"http://www.wikidata.org/entity/Q64996111","itemLabel":"Armando Tavera","influenced_by":"http://www.wikidata.org/entity/Q34660","influenced_byLabel":"J. K. Rowling"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q36290","influenced_byLabel":"Diana Ross"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q36184","influenced_byLabel":"Bram Stoker"},{"item":"http://www.wikidata.org/entity/Q180819","itemLabel":"Lev Vygotsky","influenced_by":"http://www.wikidata.org/entity/Q35802","influenced_byLabel":"Benedictus de Spinoza"},{"item":"http://www.wikidata.org/entity/Q1060636","itemLabel":"Daniel Handler","influenced_by":"http://www.wikidata.org/entity/Q36591","influenced_byLabel":"Vladimir Nabokov"},{"item":"http://www.wikidata.org/entity/Q1511","itemLabel":"Richard Wagner","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q38193","influenced_byLabel":"Arthur Schopenhauer"},{"item":"http://www.wikidata.org/entity/Q182658","itemLabel":"Harper Lee","influenced_by":"http://www.wikidata.org/entity/Q38392","influenced_byLabel":"William Faulkner"},{"item":"http://www.wikidata.org/entity/Q274562","itemLabel":"Loreena McKennitt","influenced_by":"http://www.wikidata.org/entity/Q38257","influenced_byLabel":"Enya"},{"item":"http://www.wikidata.org/entity/Q737570","itemLabel":"Jeff Noon","influenced_by":"http://www.wikidata.org/entity/Q38082","influenced_byLabel":"Lewis Carroll"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q38066","influenced_byLabel":"existentialism"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q38222","influenced_byLabel":"George Lucas"},{"item":"http://www.wikidata.org/entity/Q1276","itemLabel":"Leonard Cohen","influenced_by":"http://www.wikidata.org/entity/Q41408","influenced_byLabel":"Federico García Lorca"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q40640","influenced_byLabel":"Ray Bradbury"},{"item":"http://www.wikidata.org/entity/Q17385969","itemLabel":"Kendji Girac","influenced_by":"http://www.wikidata.org/entity/Q40586","influenced_byLabel":"Gipsy Kings"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q42156","influenced_byLabel":"Henri Bergson"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q41532","influenced_byLabel":"Carl Jung"},{"item":"http://www.wikidata.org/entity/Q25806729","itemLabel":"Enoch-Jude Danquah","influenced_by":"http://www.wikidata.org/entity/Q42101","influenced_byLabel":"Denzel Washington"},{"item":"http://www.wikidata.org/entity/Q94679164","itemLabel":"Khaledzou","influenced_by":"http://www.wikidata.org/entity/Q42775","influenced_byLabel":"Johnny Cash"},{"item":"http://www.wikidata.org/entity/Q251984","itemLabel":"Spencer Breslin","influenced_by":"http://www.wikidata.org/entity/Q44221","influenced_byLabel":"Sean Penn"},{"item":"http://www.wikidata.org/entity/Q3270545","itemLabel":"Léo Petit","influenced_by":"http://www.wikidata.org/entity/Q44122","influenced_byLabel":"Django Reinhardt"},{"item":"http://www.wikidata.org/entity/Q5441972","itemLabel":"Felipe Dylon","influenced_by":"http://www.wikidata.org/entity/Q43432","influenced_byLabel":"Justin Timberlake"},{"item":"http://www.wikidata.org/entity/Q25894076","itemLabel":"Luca Chikovani","influenced_by":"http://www.wikidata.org/entity/Q43432","influenced_byLabel":"Justin Timberlake"},{"item":"http://www.wikidata.org/entity/Q63441946","itemLabel":"JohnThvhk","influenced_by":"http://www.wikidata.org/entity/Q43343","influenced_byLabel":"contemporary folk music"},{"item":"http://www.wikidata.org/entity/Q44570","itemLabel":"John Lee Hooker","influenced_by":"http://www.wikidata.org/entity/Q45001","influenced_byLabel":"Blind Lemon Jefferson"},{"item":"http://www.wikidata.org/entity/Q180278","itemLabel":"Charles Gounod","influenced_by":"http://www.wikidata.org/entity/Q46096","influenced_byLabel":"Felix Mendelssohn"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q44847","influenced_byLabel":"D. T. Suzuki"},{"item":"http://www.wikidata.org/entity/Q445863","itemLabel":"Happy Rhodes","influenced_by":"http://www.wikidata.org/entity/Q44641","influenced_byLabel":"Wendy Carlos"},{"item":"http://www.wikidata.org/entity/Q1154584","itemLabel":"DMX Krew","influenced_by":"http://www.wikidata.org/entity/Q44892","influenced_byLabel":"Kraftwerk"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q48301","influenced_byLabel":"Martin Heidegger"},{"item":"http://www.wikidata.org/entity/Q47482370","itemLabel":"Patrick Newman","influenced_by":"http://www.wikidata.org/entity/Q48975","influenced_byLabel":"John Debney"},{"item":"http://www.wikidata.org/entity/Q127330","itemLabel":"Frank Zappa","influenced_by":"http://www.wikidata.org/entity/Q57247","influenced_byLabel":"Edgard Varèse"},{"item":"http://www.wikidata.org/entity/Q180278","itemLabel":"Charles Gounod","influenced_by":"http://www.wikidata.org/entity/Q57286","influenced_byLabel":"Fanny Mendelssohn"},{"item":"http://www.wikidata.org/entity/Q251984","itemLabel":"Spencer Breslin","influenced_by":"http://www.wikidata.org/entity/Q53680","influenced_byLabel":"Jeff Daniels"},{"item":"http://www.wikidata.org/entity/Q50329054","itemLabel":"Atheen","influenced_by":"http://www.wikidata.org/entity/Q51157","influenced_byLabel":"Stefanie Sun"},{"item":"http://www.wikidata.org/entity/Q64996103","itemLabel":"Ricardo Tavera","influenced_by":"http://www.wikidata.org/entity/Q55215","influenced_byLabel":"Alejandro González Iñárritu"},{"item":"http://www.wikidata.org/entity/Q94674283","itemLabel":"K808","influenced_by":"http://www.wikidata.org/entity/Q55641","influenced_byLabel":"Spice Girls"},{"item":"http://www.wikidata.org/entity/Q1060636","itemLabel":"Daniel Handler","influenced_by":"http://www.wikidata.org/entity/Q9204","influenced_byLabel":"C. S. Lewis"},{"item":"http://www.wikidata.org/entity/Q7833","itemLabel":"Boris Vian","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q10682","influenced_byLabel":"Sœurs Goadec"},{"item":"http://www.wikidata.org/entity/Q273903","itemLabel":"Scout Niblett","influenced_by":"http://www.wikidata.org/entity/Q11649","influenced_byLabel":"Nirvana"},{"item":"http://www.wikidata.org/entity/Q355341","itemLabel":"Mana","influenced_by":"http://www.wikidata.org/entity/Q9730","influenced_byLabel":"Western classical music"},{"item":"http://www.wikidata.org/entity/Q784090","itemLabel":"Michael Landau","influenced_by":"http://www.wikidata.org/entity/Q11399","influenced_byLabel":"rock music"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q10701","influenced_byLabel":"Gilles Servat"},{"item":"http://www.wikidata.org/entity/Q13634249","itemLabel":"Jean-Louis Jossic","influenced_by":"http://www.wikidata.org/entity/Q10701","influenced_byLabel":"Gilles Servat"},{"item":"http://www.wikidata.org/entity/Q16269483","itemLabel":"Didier Guyot","influenced_by":"http://www.wikidata.org/entity/Q10681","influenced_byLabel":"Alan Stivell"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q11975","influenced_byLabel":"Britney Spears"},{"item":"http://www.wikidata.org/entity/Q1065956","itemLabel":"Charles Rosen","influenced_by":"http://www.wikidata.org/entity/Q13003","influenced_byLabel":"Arturo Toscanini"},{"item":"http://www.wikidata.org/entity/Q30201990","itemLabel":"Pedro Fernando","influenced_by":"http://www.wikidata.org/entity/Q15615","influenced_byLabel":"Lil Wayne"},{"item":"http://www.wikidata.org/entity/Q64010991","itemLabel":"SG Lewis","influenced_by":"http://www.wikidata.org/entity/Q14313","influenced_byLabel":"Pharrell Williams"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q11877","influenced_byLabel":"Ivory Joe Hunter"},{"item":"http://www.wikidata.org/entity/Q192402","itemLabel":"Rufus Wainwright","influenced_by":"http://www.wikidata.org/entity/Q15869","influenced_byLabel":"Freddie Mercury"},{"item":"http://www.wikidata.org/entity/Q367634","itemLabel":"Big Sean","influenced_by":"http://www.wikidata.org/entity/Q15935","influenced_byLabel":"Kanye West"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q15869","influenced_byLabel":"Freddie Mercury"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q16867","influenced_byLabel":"Edgar Allan Poe"},{"item":"http://www.wikidata.org/entity/Q505476","itemLabel":"Avicii","influenced_by":"http://www.wikidata.org/entity/Q20709","influenced_byLabel":"Swedish House Mafia"},{"item":"http://www.wikidata.org/entity/Q1060636","itemLabel":"Daniel Handler","influenced_by":"http://www.wikidata.org/entity/Q16867","influenced_byLabel":"Edgar Allan Poe"},{"item":"http://www.wikidata.org/entity/Q16207332","itemLabel":"DJ Kura","influenced_by":"http://www.wikidata.org/entity/Q20713","influenced_byLabel":"Axwell"},{"item":"http://www.wikidata.org/entity/Q56051918","itemLabel":"WiFi Gangster","influenced_by":"http://www.wikidata.org/entity/Q19004","influenced_byLabel":"Skrillex"},{"item":"http://www.wikidata.org/entity/Q1060636","itemLabel":"Daniel Handler","influenced_by":"http://www.wikidata.org/entity/Q25161","influenced_byLabel":"Roald Dahl"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q25191","influenced_byLabel":"Christopher Nolan"},{"item":"http://www.wikidata.org/entity/Q64996103","itemLabel":"Ricardo Tavera","influenced_by":"http://www.wikidata.org/entity/Q28028","influenced_byLabel":"Alfonso Cuarón"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q26695","influenced_byLabel":"Lionel Richie"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q58586","influenced_byLabel":"Edmund Husserl"},{"item":"http://www.wikidata.org/entity/Q450412","itemLabel":"Richard Sennett","influenced_by":"http://www.wikidata.org/entity/Q60025","influenced_byLabel":"Hannah Arendt"},{"item":"http://www.wikidata.org/entity/Q541599","itemLabel":"Dolores O'Riordan","influenced_by":"http://www.wikidata.org/entity/Q58381","influenced_byLabel":"Duran Duran"},{"item":"http://www.wikidata.org/entity/Q270469","itemLabel":"Lisa Germano","influenced_by":"http://www.wikidata.org/entity/Q72608","influenced_byLabel":"Big Star"},{"item":"http://www.wikidata.org/entity/Q297552","itemLabel":"Tom Morello","influenced_by":"http://www.wikidata.org/entity/Q72092","influenced_byLabel":"Rage Against the Machine"},{"item":"http://www.wikidata.org/entity/Q1339","itemLabel":"Johann Sebastian Bach","influenced_by":"http://www.wikidata.org/entity/Q76485","influenced_byLabel":"Johann Pachelbel"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q76509","influenced_byLabel":"Karl Jaspers"},{"item":"http://www.wikidata.org/entity/Q59457194","itemLabel":"Cixqo","influenced_by":"http://www.wikidata.org/entity/Q80805","influenced_byLabel":"DJ Khaled"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q82222","influenced_byLabel":"Little Richard"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q82925","influenced_byLabel":"Joseph Conrad"},{"item":"http://www.wikidata.org/entity/Q438106","itemLabel":"Sister Rosetta Tharpe","influenced_by":"http://www.wikidata.org/entity/Q82222","influenced_byLabel":"Little Richard"},{"item":"http://www.wikidata.org/entity/Q44398","itemLabel":"Falco","influenced_by":"http://www.wikidata.org/entity/Q84489","influenced_byLabel":"Oskar Werner"},{"item":"http://www.wikidata.org/entity/Q1687123","itemLabel":"Jens Bogner","influenced_by":"http://www.wikidata.org/entity/Q86105","influenced_byLabel":"Howard Carpendale"},{"item":"http://www.wikidata.org/entity/Q47506506","itemLabel":"Alonso Arreola","influenced_by":"http://www.wikidata.org/entity/Q93341","influenced_byLabel":"Miles Davis"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q100937","influenced_byLabel":"Fred Astaire"},{"item":"http://www.wikidata.org/entity/Q5928","itemLabel":"Jimi Hendrix","influenced_by":"http://www.wikidata.org/entity/Q93346","influenced_byLabel":"The Who"},{"item":"http://www.wikidata.org/entity/Q258761","itemLabel":"Liz Phair","influenced_by":"http://www.wikidata.org/entity/Q103550","influenced_byLabel":"The Velvet Underground"},{"item":"http://www.wikidata.org/entity/Q238795","itemLabel":"St. Vincent","influenced_by":"http://www.wikidata.org/entity/Q104358","influenced_byLabel":"Billie Holiday"},{"item":"http://www.wikidata.org/entity/Q47482370","itemLabel":"Patrick Newman","influenced_by":"http://www.wikidata.org/entity/Q106221","influenced_byLabel":"James Horner"},{"item":"http://www.wikidata.org/entity/Q5928","itemLabel":"Jimi Hendrix","influenced_by":"http://www.wikidata.org/entity/Q203736","influenced_byLabel":"Cream"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q205721","influenced_byLabel":"Joni Mitchell"},{"item":"http://www.wikidata.org/entity/Q193744","itemLabel":"Tori Amos","influenced_by":"http://www.wikidata.org/entity/Q205721","influenced_byLabel":"Joni Mitchell"},{"item":"http://www.wikidata.org/entity/Q1729370","itemLabel":"Karim Ziad","influenced_by":"http://www.wikidata.org/entity/Q207034","influenced_byLabel":"Keith Jarrett"},{"item":"http://www.wikidata.org/entity/Q11739784","itemLabel":"Sirah","influenced_by":"http://www.wikidata.org/entity/Q205721","influenced_byLabel":"Joni Mitchell"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q207515","influenced_byLabel":"P. G. Wodehouse"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q207640","influenced_byLabel":"Robert E. Howard"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q209586","influenced_byLabel":"Fats Domino"},{"item":"http://www.wikidata.org/entity/Q94679164","itemLabel":"Khaledzou","influenced_by":"http://www.wikidata.org/entity/Q209182","influenced_byLabel":"Public Enemy"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q211731","influenced_byLabel":"Timothy Leary"},{"item":"http://www.wikidata.org/entity/Q386053","itemLabel":"Donny Osmond","influenced_by":"http://www.wikidata.org/entity/Q216563","influenced_byLabel":"Paul Anka"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q220883","influenced_byLabel":"Poul Anderson"},{"item":"http://www.wikidata.org/entity/Q489643","itemLabel":"Gotye","influenced_by":"http://www.wikidata.org/entity/Q217716","influenced_byLabel":"DJ Shadow"},{"item":"http://www.wikidata.org/entity/Q494676","itemLabel":"Karen Lee Orzolek","influenced_by":"http://www.wikidata.org/entity/Q219772","influenced_byLabel":"PJ Harvey"},{"item":"http://www.wikidata.org/entity/Q1966560","itemLabel":"Nathan Fake","influenced_by":"http://www.wikidata.org/entity/Q223161","influenced_byLabel":"Aphex Twin"},{"item":"http://www.wikidata.org/entity/Q31900046","itemLabel":"Eddie Fountain","influenced_by":"http://www.wikidata.org/entity/Q221155","influenced_byLabel":"T-Pain"},{"item":"http://www.wikidata.org/entity/Q54741162","itemLabel":"Marco Vitrotti","influenced_by":"http://www.wikidata.org/entity/Q217298","influenced_byLabel":"David Letterman"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q223233","influenced_byLabel":"Sam Mendes"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q229379","influenced_byLabel":"Lil' Kim"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q231106","influenced_byLabel":"Joan Jett"},{"item":"http://www.wikidata.org/entity/Q292180","itemLabel":"Joy Harjo","influenced_by":"http://www.wikidata.org/entity/Q234579","influenced_byLabel":"Flannery O'Connor"},{"item":"http://www.wikidata.org/entity/Q2947051","itemLabel":"Cesk Freixas","influenced_by":"http://www.wikidata.org/entity/Q232462","influenced_byLabel":"Ani DiFranco"},{"item":"http://www.wikidata.org/entity/Q3290634","itemLabel":"Margot Loyola","influenced_by":"http://www.wikidata.org/entity/Q230499","influenced_byLabel":"Violeta Parra"},{"item":"http://www.wikidata.org/entity/Q47482370","itemLabel":"Patrick Newman","influenced_by":"http://www.wikidata.org/entity/Q235077","influenced_byLabel":"Jerry Goldsmith"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q234169","influenced_byLabel":"Irene Cara"},{"item":"http://www.wikidata.org/entity/Q8446","itemLabel":"Kurt Cobain","influenced_by":"http://www.wikidata.org/entity/Q235103","influenced_byLabel":"Frances Farmer"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q239910","influenced_byLabel":"Shirley Jackson"},{"item":"http://www.wikidata.org/entity/Q1060636","itemLabel":"Daniel Handler","influenced_by":"http://www.wikidata.org/entity/Q242095","influenced_byLabel":"Dino Buzzati"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q236543","influenced_byLabel":"Anne Murray"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q248207","influenced_byLabel":"Rick James"},{"item":"http://www.wikidata.org/entity/Q188459","itemLabel":"Goldie Hawn","influenced_by":"http://www.wikidata.org/entity/Q260440","influenced_byLabel":"Sai Baba of Shirdi"},{"item":"http://www.wikidata.org/entity/Q663858","itemLabel":"Roy McCurdy","influenced_by":"http://www.wikidata.org/entity/Q252126","influenced_byLabel":"Louie Bellson"},{"item":"http://www.wikidata.org/entity/Q5214046","itemLabel":"Dan Monti","influenced_by":"http://www.wikidata.org/entity/Q265252","influenced_byLabel":"Buckethead"},{"item":"http://www.wikidata.org/entity/Q20831285","itemLabel":"Pierre Lefeuvre","influenced_by":"http://www.wikidata.org/entity/Q262791","influenced_byLabel":"Steve Reich"},{"item":"http://www.wikidata.org/entity/Q47482370","itemLabel":"Patrick Newman","influenced_by":"http://www.wikidata.org/entity/Q251144","influenced_byLabel":"Brian Tyler"},{"item":"http://www.wikidata.org/entity/Q47482370","itemLabel":"Patrick Newman","influenced_by":"http://www.wikidata.org/entity/Q264565","influenced_byLabel":"Elliot Goldenthal"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q261314","influenced_byLabel":"Rachel Portman"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q264565","influenced_byLabel":"Elliot Goldenthal"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q261314","influenced_byLabel":"Rachel Portman"},{"item":"http://www.wikidata.org/entity/Q230454","itemLabel":"k.d. lang","influenced_by":"http://www.wikidata.org/entity/Q272913","influenced_byLabel":"Kitty Wells"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q268427","influenced_byLabel":"Shirley Walker"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q268427","influenced_byLabel":"Shirley Walker"},{"item":"http://www.wikidata.org/entity/Q98669425","itemLabel":"Q98669425","influenced_by":"http://www.wikidata.org/entity/Q272591","influenced_byLabel":"Daddy Yankee"},{"item":"http://www.wikidata.org/entity/Q230454","itemLabel":"k.d. lang","influenced_by":"http://www.wikidata.org/entity/Q273080","influenced_byLabel":"Patsy Cline"},{"item":"http://www.wikidata.org/entity/Q292180","itemLabel":"Joy Harjo","influenced_by":"http://www.wikidata.org/entity/Q273001","influenced_byLabel":"Leslie Marmon Silko"},{"item":"http://www.wikidata.org/entity/Q295919","itemLabel":"Sam Cooke","influenced_by":"http://www.wikidata.org/entity/Q273210","influenced_byLabel":"James Baldwin"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q284017","influenced_byLabel":"Atahualpa Yupanqui"},{"item":"http://www.wikidata.org/entity/Q3640032","itemLabel":"Billy Blanco","influenced_by":"http://www.wikidata.org/entity/Q281078","influenced_byLabel":"Noel Rosa"},{"item":"http://www.wikidata.org/entity/Q12949115","itemLabel":"Jan-Mari Carlotti","influenced_by":"http://www.wikidata.org/entity/Q284017","influenced_byLabel":"Atahualpa Yupanqui"},{"item":"http://www.wikidata.org/entity/Q59868628","itemLabel":"Cor Akim","influenced_by":"http://www.wikidata.org/entity/Q273055","influenced_byLabel":"R. Kelly"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q273213","influenced_byLabel":"Elena Kats-Chernin"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q273502","influenced_byLabel":"Anne Dudley"},{"item":"http://www.wikidata.org/entity/Q317350","itemLabel":"John Tavener","influenced_by":"http://www.wikidata.org/entity/Q123382","influenced_byLabel":"Frithjof Schuon"},{"item":"http://www.wikidata.org/entity/Q193397","itemLabel":"Steve Vai","influenced_by":"http://www.wikidata.org/entity/Q127330","influenced_byLabel":"Frank Zappa"},{"item":"http://www.wikidata.org/entity/Q269462","itemLabel":"Paula Cole","influenced_by":"http://www.wikidata.org/entity/Q125121","influenced_byLabel":"Aretha Franklin"},{"item":"http://www.wikidata.org/entity/Q64005347","itemLabel":"Jame$","influenced_by":"http://www.wikidata.org/entity/Q127362","influenced_byLabel":"Chief Keef"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q123829","influenced_byLabel":"George Gershwin"},{"item":"http://www.wikidata.org/entity/Q47482370","itemLabel":"Patrick Newman","influenced_by":"http://www.wikidata.org/entity/Q128746","influenced_byLabel":"Irving Berlin"},{"item":"http://www.wikidata.org/entity/Q50329054","itemLabel":"Atheen","influenced_by":"http://www.wikidata.org/entity/Q130742","influenced_byLabel":"Alanis Morissette"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q130311","influenced_byLabel":"George Michael"},{"item":"http://www.wikidata.org/entity/Q62061920","itemLabel":"Pablo Rever","influenced_by":"http://www.wikidata.org/entity/Q130311","influenced_byLabel":"George Michael"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q128746","influenced_byLabel":"Irving Berlin"},{"item":"http://www.wikidata.org/entity/Q11975","itemLabel":"Britney Spears","influenced_by":"http://www.wikidata.org/entity/Q131324","influenced_byLabel":"Janet Jackson"},{"item":"http://www.wikidata.org/entity/Q189758","itemLabel":"Marvin Gaye","influenced_by":"http://www.wikidata.org/entity/Q137042","influenced_byLabel":"Nat King Cole"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q140201","influenced_byLabel":"J. G. Ballard"},{"item":"http://www.wikidata.org/entity/Q435330","itemLabel":"Kristin Hersh","influenced_by":"http://www.wikidata.org/entity/Q134969","influenced_byLabel":"R.E.M."},{"item":"http://www.wikidata.org/entity/Q5528279","itemLabel":"Gavin Spielman","influenced_by":"http://www.wikidata.org/entity/Q134741","influenced_byLabel":"Camille Pissarro"},{"item":"http://www.wikidata.org/entity/Q154556","itemLabel":"Karlheinz Stockhausen","influenced_by":"http://www.wikidata.org/entity/Q151593","influenced_byLabel":"Olivier Messiaen"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q148234","influenced_byLabel":"Edgar Rice Burroughs"},{"item":"http://www.wikidata.org/entity/Q154556","itemLabel":"Karlheinz Stockhausen","influenced_by":"http://www.wikidata.org/entity/Q152388","influenced_byLabel":"Theodor W. Adorno"},{"item":"http://www.wikidata.org/entity/Q732513","itemLabel":"Jô Soares","influenced_by":"http://www.wikidata.org/entity/Q153024","influenced_byLabel":"Rita of Cascia"},{"item":"http://www.wikidata.org/entity/Q94679164","itemLabel":"Khaledzou","influenced_by":"http://www.wikidata.org/entity/Q153579","influenced_byLabel":"Stephen Sondheim"},{"item":"http://www.wikidata.org/entity/Q127330","itemLabel":"Frank Zappa","influenced_by":"http://www.wikidata.org/entity/Q154331","influenced_byLabel":"György Ligeti"},{"item":"http://www.wikidata.org/entity/Q1065956","itemLabel":"Charles Rosen","influenced_by":"http://www.wikidata.org/entity/Q154770","influenced_byLabel":"Arnold Schoenberg"},{"item":"http://www.wikidata.org/entity/Q31900046","itemLabel":"Eddie Fountain","influenced_by":"http://www.wikidata.org/entity/Q155700","influenced_byLabel":"Chris Brown"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q157191","influenced_byLabel":"Marcel Marceau"},{"item":"http://www.wikidata.org/entity/Q194220","itemLabel":"Nas","influenced_by":"http://www.wikidata.org/entity/Q159351","influenced_byLabel":"Run-DMC"},{"item":"http://www.wikidata.org/entity/Q2050788","itemLabel":"Shreya Ghoshal","influenced_by":"http://www.wikidata.org/entity/Q156347","influenced_byLabel":"Lata Mangeshkar"},{"item":"http://www.wikidata.org/entity/Q56222322","itemLabel":"Gino Justin Hudson McKoy","influenced_by":"http://www.wikidata.org/entity/Q159347","influenced_byLabel":"Steve McQueen"},{"item":"http://www.wikidata.org/entity/Q202550","itemLabel":"Dido","influenced_by":"http://www.wikidata.org/entity/Q163819","influenced_byLabel":"10,000 Maniacs"},{"item":"http://www.wikidata.org/entity/Q238215","itemLabel":"Natalie Merchant","influenced_by":"http://www.wikidata.org/entity/Q163819","influenced_byLabel":"10,000 Maniacs"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q295919","influenced_byLabel":"Sam Cooke"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q297816","influenced_byLabel":"Sammy Davis Jr."},{"item":"http://www.wikidata.org/entity/Q251984","itemLabel":"Spencer Breslin","influenced_by":"http://www.wikidata.org/entity/Q309835","influenced_byLabel":"Timothy Olyphant"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q298242","influenced_byLabel":"Leigh Brackett"},{"item":"http://www.wikidata.org/entity/Q769328","itemLabel":"Mami Sasazaki","influenced_by":"http://www.wikidata.org/entity/Q307319","influenced_byLabel":"W-inds"},{"item":"http://www.wikidata.org/entity/Q3169512","itemLabel":"Jean-Pierre Llabador","influenced_by":"http://www.wikidata.org/entity/Q298601","influenced_byLabel":"Wes Montgomery"},{"item":"http://www.wikidata.org/entity/Q7821874","itemLabel":"Tony Bellotto","influenced_by":"http://www.wikidata.org/entity/Q309983","influenced_byLabel":"Caetano Veloso"},{"item":"http://www.wikidata.org/entity/Q254","itemLabel":"Wolfgang Amadeus Mozart","influenced_by":"http://www.wikidata.org/entity/Q311378","influenced_byLabel":"Johann Joseph Fux"},{"item":"http://www.wikidata.org/entity/Q7349","itemLabel":"Joseph Haydn","influenced_by":"http://www.wikidata.org/entity/Q311378","influenced_byLabel":"Johann Joseph Fux"},{"item":"http://www.wikidata.org/entity/Q3499253","itemLabel":"Steven Parrino","influenced_by":"http://www.wikidata.org/entity/Q312392","influenced_byLabel":"Lucio Fontana"},{"item":"http://www.wikidata.org/entity/Q28532904","itemLabel":"Timothy C. Armstrong","influenced_by":"http://www.wikidata.org/entity/Q312579","influenced_byLabel":"Iain Banks"},{"item":"http://www.wikidata.org/entity/Q251984","itemLabel":"Spencer Breslin","influenced_by":"http://www.wikidata.org/entity/Q313546","influenced_byLabel":"William Baldwin"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q312632","influenced_byLabel":"Jack Vance"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q313185","influenced_byLabel":"Fritz Leiber Junior"},{"item":"http://www.wikidata.org/entity/Q47506506","itemLabel":"Alonso Arreola","influenced_by":"http://www.wikidata.org/entity/Q312753","influenced_byLabel":"Joan Manuel Serrat"},{"item":"http://www.wikidata.org/entity/Q62107124","itemLabel":"Viktor Van River","influenced_by":"http://www.wikidata.org/entity/Q313627","influenced_byLabel":"Tricky"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q325130","influenced_byLabel":"Richard Matheson"},{"item":"http://www.wikidata.org/entity/Q311050","itemLabel":"Dimebag Darrell","influenced_by":"http://www.wikidata.org/entity/Q319610","influenced_byLabel":"Ace Frehley"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q320146","influenced_byLabel":"Léo Ferré"},{"item":"http://www.wikidata.org/entity/Q47506506","itemLabel":"Alonso Arreola","influenced_by":"http://www.wikidata.org/entity/Q317182","influenced_byLabel":"Jordi Savall"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q317272","influenced_byLabel":"Alan Menken"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q335838","influenced_byLabel":"Turlough O'Carolan"},{"item":"http://www.wikidata.org/entity/Q216896","itemLabel":"L. Ron Hubbard","influenced_by":"http://www.wikidata.org/entity/Q333402","influenced_byLabel":"Alfred Korzybski"},{"item":"http://www.wikidata.org/entity/Q553276","itemLabel":"Steve Allen","influenced_by":"http://www.wikidata.org/entity/Q333402","influenced_byLabel":"Alfred Korzybski"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q336272","influenced_byLabel":"George Clinton"},{"item":"http://www.wikidata.org/entity/Q28555400","itemLabel":"Dizzy Dee","influenced_by":"http://www.wikidata.org/entity/Q339352","influenced_byLabel":"Jah Mason"},{"item":"http://www.wikidata.org/entity/Q64010991","itemLabel":"SG Lewis","influenced_by":"http://www.wikidata.org/entity/Q350362","influenced_byLabel":"James Blake"},{"item":"http://www.wikidata.org/entity/Q965179","itemLabel":"Tommy Johnson","influenced_by":"http://www.wikidata.org/entity/Q354519","influenced_byLabel":"Charley Patton"},{"item":"http://www.wikidata.org/entity/Q2484709","itemLabel":"Perfume Genius","influenced_by":"http://www.wikidata.org/entity/Q357014","influenced_byLabel":"Angelo Badalamenti"},{"item":"http://www.wikidata.org/entity/Q2947051","itemLabel":"Cesk Freixas","influenced_by":"http://www.wikidata.org/entity/Q357340","influenced_byLabel":"Bon Iver"},{"item":"http://www.wikidata.org/entity/Q18221969","itemLabel":"Philippe Gleizes","influenced_by":"http://www.wikidata.org/entity/Q357179","influenced_byLabel":"Elvin Jones"},{"item":"http://www.wikidata.org/entity/Q62107124","itemLabel":"Viktor Van River","influenced_by":"http://www.wikidata.org/entity/Q357418","influenced_byLabel":"Massive Attack"},{"item":"http://www.wikidata.org/entity/Q64010991","itemLabel":"SG Lewis","influenced_by":"http://www.wikidata.org/entity/Q357340","influenced_byLabel":"Bon Iver"},{"item":"http://www.wikidata.org/entity/Q117012","itemLabel":"Yoko Ono","influenced_by":"http://www.wikidata.org/entity/Q366380","influenced_byLabel":"Allan Kaprow"},{"item":"http://www.wikidata.org/entity/Q194220","itemLabel":"Nas","influenced_by":"http://www.wikidata.org/entity/Q364214","influenced_byLabel":"Rakim"},{"item":"http://www.wikidata.org/entity/Q2947051","itemLabel":"Cesk Freixas","influenced_by":"http://www.wikidata.org/entity/Q377956","influenced_byLabel":"Silvio Rodríguez"},{"item":"http://www.wikidata.org/entity/Q28555400","itemLabel":"Dizzy Dee","influenced_by":"http://www.wikidata.org/entity/Q369738","influenced_byLabel":"Sizzla"},{"item":"http://www.wikidata.org/entity/Q31358769","itemLabel":"Myfyr Isaac","influenced_by":"http://www.wikidata.org/entity/Q365478","influenced_byLabel":"Hank Marvin"},{"item":"http://www.wikidata.org/entity/Q47482370","itemLabel":"Patrick Newman","influenced_by":"http://www.wikidata.org/entity/Q367032","influenced_byLabel":"Alfred Newman"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q367032","influenced_byLabel":"Alfred Newman"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q367032","influenced_byLabel":"Alfred Newman"},{"item":"http://www.wikidata.org/entity/Q16409","itemLabel":"Tristan Tzara","influenced_by":"http://www.wikidata.org/entity/Q380275","influenced_byLabel":"Jules Laforgue"},{"item":"http://www.wikidata.org/entity/Q505476","itemLabel":"Avicii","influenced_by":"http://www.wikidata.org/entity/Q383541","influenced_byLabel":"Basshunter"},{"item":"http://www.wikidata.org/entity/Q1139628","itemLabel":"Ryan Cabrera","influenced_by":"http://www.wikidata.org/entity/Q380381","influenced_byLabel":"Dave Matthews"},{"item":"http://www.wikidata.org/entity/Q55468943","itemLabel":"Luis Rizzo","influenced_by":"http://www.wikidata.org/entity/Q381843","influenced_byLabel":"Aníbal Troilo"},{"item":"http://www.wikidata.org/entity/Q1930754","itemLabel":"Michel Hausser","influenced_by":"http://www.wikidata.org/entity/Q435665","influenced_byLabel":"Milt Jackson"},{"item":"http://www.wikidata.org/entity/Q15434980","itemLabel":"Airelle Besson","influenced_by":"http://www.wikidata.org/entity/Q427035","influenced_byLabel":"Tom Harrell"},{"item":"http://www.wikidata.org/entity/Q233061","itemLabel":"Joanna Newsom","influenced_by":"http://www.wikidata.org/entity/Q451393","influenced_byLabel":"Ruth Crawford Seeger"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q453410","influenced_byLabel":"T. H. White"},{"item":"http://www.wikidata.org/entity/Q316138","itemLabel":"Michael Moorcock","influenced_by":"http://www.wikidata.org/entity/Q458658","influenced_byLabel":"Edward Plunkett, 18th Baron of Dunsany"},{"item":"http://www.wikidata.org/entity/Q1066587","itemLabel":"Charles de Lint","influenced_by":"http://www.wikidata.org/entity/Q458658","influenced_byLabel":"Edward Plunkett, 18th Baron of Dunsany"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q467668","influenced_byLabel":"Louis Lavelle"},{"item":"http://www.wikidata.org/entity/Q256783","itemLabel":"Ane Brun","influenced_by":"http://www.wikidata.org/entity/Q465296","influenced_byLabel":"Beth Orton"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q464213","influenced_byLabel":"Amy Grant"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q464241","influenced_byLabel":"Faith Hill"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q512322","influenced_byLabel":"Lolita Ritmanis"},{"item":"http://www.wikidata.org/entity/Q16545990","itemLabel":"Daniel Haas","influenced_by":"http://www.wikidata.org/entity/Q530863","influenced_byLabel":"Ange"},{"item":"http://www.wikidata.org/entity/Q28555400","itemLabel":"Dizzy Dee","influenced_by":"http://www.wikidata.org/entity/Q536588","influenced_byLabel":"Capleton"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q558425","influenced_byLabel":"John D. MacDonald"},{"item":"http://www.wikidata.org/entity/Q311450","itemLabel":"Billy Preston","influenced_by":"http://www.wikidata.org/entity/Q544387","influenced_byLabel":"Ray Charles"},{"item":"http://www.wikidata.org/entity/Q2750368","itemLabel":"Maher Zain","influenced_by":"http://www.wikidata.org/entity/Q558226","influenced_byLabel":"Sami Yusuf"},{"item":"http://www.wikidata.org/entity/Q2947051","itemLabel":"Cesk Freixas","influenced_by":"http://www.wikidata.org/entity/Q543506","influenced_byLabel":"Jorge Drexler"},{"item":"http://www.wikidata.org/entity/Q25894076","itemLabel":"Luca Chikovani","influenced_by":"http://www.wikidata.org/entity/Q544387","influenced_byLabel":"Ray Charles"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q544387","influenced_byLabel":"Ray Charles"},{"item":"http://www.wikidata.org/entity/Q2960096","itemLabel":"Charles Redland","influenced_by":"http://www.wikidata.org/entity/Q560716","influenced_byLabel":"Jimmy Dorsey"},{"item":"http://www.wikidata.org/entity/Q3346431","itemLabel":"Nuno Roque","influenced_by":"http://www.wikidata.org/entity/Q586956","influenced_byLabel":"Jacques Lecoq"},{"item":"http://www.wikidata.org/entity/Q12949115","itemLabel":"Jan-Mari Carlotti","influenced_by":"http://www.wikidata.org/entity/Q594644","influenced_byLabel":"Félix Leclerc"},{"item":"http://www.wikidata.org/entity/Q94679164","itemLabel":"Khaledzou","influenced_by":"http://www.wikidata.org/entity/Q587361","influenced_byLabel":"Rick Rubin"},{"item":"http://www.wikidata.org/entity/Q127330","itemLabel":"Frank Zappa","influenced_by":"http://www.wikidata.org/entity/Q607448","influenced_byLabel":"Guitar Slim"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q631323","influenced_byLabel":"Gribouille"},{"item":"http://www.wikidata.org/entity/Q2821117","itemLabel":"Abdelkrim Dali","influenced_by":"http://www.wikidata.org/entity/Q623904","influenced_byLabel":"Andalusian classical music"},{"item":"http://www.wikidata.org/entity/Q2836570","itemLabel":"Alice Fitoussi","influenced_by":"http://www.wikidata.org/entity/Q623904","influenced_byLabel":"Andalusian classical music"},{"item":"http://www.wikidata.org/entity/Q3011956","itemLabel":"Dahmane Ben Achour","influenced_by":"http://www.wikidata.org/entity/Q623904","influenced_byLabel":"Andalusian classical music"},{"item":"http://www.wikidata.org/entity/Q13365774","itemLabel":"TeRra Han","influenced_by":"http://www.wikidata.org/entity/Q624060","influenced_byLabel":"Queen Insu"},{"item":"http://www.wikidata.org/entity/Q47506506","itemLabel":"Alonso Arreola","influenced_by":"http://www.wikidata.org/entity/Q650150","influenced_byLabel":"Michael Manring"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q643005","influenced_byLabel":"The Wallflowers"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q1133807","influenced_byLabel":"Sly and the Family Stone"},{"item":"http://www.wikidata.org/entity/Q769328","itemLabel":"Mami Sasazaki","influenced_by":"http://www.wikidata.org/entity/Q1092848","influenced_byLabel":"Judy and Mary"},{"item":"http://www.wikidata.org/entity/Q59457194","itemLabel":"Cixqo","influenced_by":"http://www.wikidata.org/entity/Q1152010","influenced_byLabel":"DJ Clue"},{"item":"http://www.wikidata.org/entity/Q561596","itemLabel":"Johnny Clegg","influenced_by":"http://www.wikidata.org/entity/Q1177117","influenced_byLabel":"David Webster"},{"item":"http://www.wikidata.org/entity/Q769328","itemLabel":"Mami Sasazaki","influenced_by":"http://www.wikidata.org/entity/Q1209174","influenced_byLabel":"Whiteberry"},{"item":"http://www.wikidata.org/entity/Q5887826","itemLabel":"Homayoun Shajarian","influenced_by":"http://www.wikidata.org/entity/Q1238247","influenced_byLabel":"Mohammad-Reza Shajarian"},{"item":"http://www.wikidata.org/entity/Q63441946","itemLabel":"JohnThvhk","influenced_by":"http://www.wikidata.org/entity/Q1182371","influenced_byLabel":"deep funk"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q1181582","influenced_byLabel":"Deborah Lurie"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q1181582","influenced_byLabel":"Deborah Lurie"},{"item":"http://www.wikidata.org/entity/Q194220","itemLabel":"Nas","influenced_by":"http://www.wikidata.org/entity/Q1292552","influenced_byLabel":"Queensbridge"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q1378776","influenced_byLabel":"music of Ireland"},{"item":"http://www.wikidata.org/entity/Q236024","itemLabel":"Chavela Vargas","influenced_by":"http://www.wikidata.org/entity/Q1352007","influenced_byLabel":"José Alfredo Jiménez"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q1382570","influenced_byLabel":"Mose Allison"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q1438730","influenced_byLabel":"OneRepublic"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q1398397","influenced_byLabel":"Seán Ó Riada"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q1457753","influenced_byLabel":"Pìobaireachd"},{"item":"http://www.wikidata.org/entity/Q587361","itemLabel":"Rick Rubin","influenced_by":"http://www.wikidata.org/entity/Q1428959","influenced_byLabel":"Flipper"},{"item":"http://www.wikidata.org/entity/Q63946315","itemLabel":"Nils Conrad","influenced_by":"http://www.wikidata.org/entity/Q1601598","influenced_byLabel":"Huub Janssen"},{"item":"http://www.wikidata.org/entity/Q64632663","itemLabel":"Gary Tight","influenced_by":"http://www.wikidata.org/entity/Q23007667","influenced_byLabel":"Jah Prayzah"},{"item":"http://www.wikidata.org/entity/Q29044263","itemLabel":"Juan Gandulla Padilla ‘Habichuela’","influenced_by":"http://www.wikidata.org/entity/Q42748088","influenced_byLabel":"José Patiño González"},{"item":"http://www.wikidata.org/entity/Q55468943","itemLabel":"Luis Rizzo","influenced_by":"http://www.wikidata.org/entity/Q55467499","influenced_byLabel":"Osvaldo Manzi"},{"item":"http://www.wikidata.org/entity/Q59457194","itemLabel":"Cixqo","influenced_by":"http://www.wikidata.org/entity/Q28973078","influenced_byLabel":"DJ Jimmy Jatt"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q62372907","influenced_byLabel":"Luisito Comunica"},{"item":"http://www.wikidata.org/entity/Q431128","itemLabel":"David Helfgott","influenced_by":"http://www.wikidata.org/entity/Q61745974","influenced_byLabel":"Elias Peter Helfgott"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q89949787","influenced_byLabel":"Julia Newmann"},{"item":"http://www.wikidata.org/entity/Q3445740","itemLabel":"Roy Ascott","influenced_by":"http://www.wikidata.org/entity/Q664275","influenced_byLabel":"Victor Pasmore"},{"item":"http://www.wikidata.org/entity/Q26831189","itemLabel":"Adrian D. Holmes","influenced_by":"http://www.wikidata.org/entity/Q676226","influenced_byLabel":"Lawrence Welk"},{"item":"http://www.wikidata.org/entity/Q127330","itemLabel":"Frank Zappa","influenced_by":"http://www.wikidata.org/entity/Q708884","influenced_byLabel":"Johnny \"Guitar\" Watson"},{"item":"http://www.wikidata.org/entity/Q319283","itemLabel":"Charlie Haden","influenced_by":"http://www.wikidata.org/entity/Q707857","influenced_byLabel":"Scott LaFaro"},{"item":"http://www.wikidata.org/entity/Q465296","itemLabel":"Beth Orton","influenced_by":"http://www.wikidata.org/entity/Q711806","influenced_byLabel":"Tim Hardin"},{"item":"http://www.wikidata.org/entity/Q21512651","itemLabel":"Fakear","influenced_by":"http://www.wikidata.org/entity/Q707967","influenced_byLabel":"Bonobo"},{"item":"http://www.wikidata.org/entity/Q24934660","itemLabel":"Cédric Hanriot","influenced_by":"http://www.wikidata.org/entity/Q706697","influenced_byLabel":"Red Garland"},{"item":"http://www.wikidata.org/entity/Q47506506","itemLabel":"Alonso Arreola","influenced_by":"http://www.wikidata.org/entity/Q709624","influenced_byLabel":"Trey Gunn"},{"item":"http://www.wikidata.org/entity/Q2831","itemLabel":"Michael Jackson","influenced_by":"http://www.wikidata.org/entity/Q713829","influenced_byLabel":"Sly Stone"},{"item":"http://www.wikidata.org/entity/Q312693","itemLabel":"Robert Wyatt","influenced_by":"http://www.wikidata.org/entity/Q727803","influenced_byLabel":"Canterbury scene"},{"item":"http://www.wikidata.org/entity/Q1066587","itemLabel":"Charles de Lint","influenced_by":"http://www.wikidata.org/entity/Q723374","influenced_byLabel":"James Branch Cabell"},{"item":"http://www.wikidata.org/entity/Q56051918","itemLabel":"WiFi Gangster","influenced_by":"http://www.wikidata.org/entity/Q734098","influenced_byLabel":"Sebastian"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q731721","influenced_byLabel":"Plastic Ono Band"},{"item":"http://www.wikidata.org/entity/Q96279937","itemLabel":"Eghe Nimose","influenced_by":"http://www.wikidata.org/entity/Q735736","influenced_byLabel":"Koffi Olomide"},{"item":"http://www.wikidata.org/entity/Q96279937","itemLabel":"Eghe Nimose","influenced_by":"http://www.wikidata.org/entity/Q736274","influenced_byLabel":"Papa Wemba"},{"item":"http://www.wikidata.org/entity/Q4235","itemLabel":"Miley Cyrus","influenced_by":"http://www.wikidata.org/entity/Q768621","influenced_byLabel":"Hanson"},{"item":"http://www.wikidata.org/entity/Q7542","itemLabel":"Prince","influenced_by":"http://www.wikidata.org/entity/Q819016","influenced_byLabel":"Carlos Santana"},{"item":"http://www.wikidata.org/entity/Q154556","itemLabel":"Karlheinz Stockhausen","influenced_by":"http://www.wikidata.org/entity/Q784683","influenced_byLabel":"The Urantia Book"},{"item":"http://www.wikidata.org/entity/Q154556","itemLabel":"Karlheinz Stockhausen","influenced_by":"http://www.wikidata.org/entity/Q836841","influenced_byLabel":"The Glass Bead Game"},{"item":"http://www.wikidata.org/entity/Q584714","itemLabel":"Stéphane de Vito","influenced_by":"http://www.wikidata.org/entity/Q854451","influenced_byLabel":"Celtic music"},{"item":"http://www.wikidata.org/entity/Q3164661","itemLabel":"Jean-Charles Guichen","influenced_by":"http://www.wikidata.org/entity/Q854451","influenced_byLabel":"Celtic music"},{"item":"http://www.wikidata.org/entity/Q62061920","itemLabel":"Pablo Rever","influenced_by":"http://www.wikidata.org/entity/Q850290","influenced_byLabel":"Kool & The Gang"},{"item":"http://www.wikidata.org/entity/Q1350303","itemLabel":"Holly Johnson","influenced_by":"http://www.wikidata.org/entity/Q895390","influenced_byLabel":"Bow Wow Wow"},{"item":"http://www.wikidata.org/entity/Q2402933","itemLabel":"Tristan Nihouarn","influenced_by":"http://www.wikidata.org/entity/Q910606","influenced_byLabel":"music of Brittany"},{"item":"http://www.wikidata.org/entity/Q47085078","itemLabel":"Jakob Gliber","influenced_by":"http://www.wikidata.org/entity/Q872142","influenced_byLabel":"Joseph Gasser von Valhorn"},{"item":"http://www.wikidata.org/entity/Q98669425","itemLabel":"Q98669425","influenced_by":"http://www.wikidata.org/entity/Q910354","influenced_byLabel":"Wisin & Yandel"},{"item":"http://www.wikidata.org/entity/Q1060636","itemLabel":"Daniel Handler","influenced_by":"http://www.wikidata.org/entity/Q982401","influenced_byLabel":"Edward Gorey"},{"item":"http://www.wikidata.org/entity/Q5290443","itemLabel":"Dominguinhos","influenced_by":"http://www.wikidata.org/entity/Q982314","influenced_byLabel":"Luiz Gonzaga"},{"item":"http://www.wikidata.org/entity/Q47506506","itemLabel":"Alonso Arreola","influenced_by":"http://www.wikidata.org/entity/Q981236","influenced_byLabel":"Paco Ibáñez"},{"item":"http://www.wikidata.org/entity/Q64632663","itemLabel":"Gary Tight","influenced_by":"http://www.wikidata.org/entity/Q983221","influenced_byLabel":"Oliver Mtukudzi"},{"item":"http://www.wikidata.org/entity/Q89525498","itemLabel":"Blue Newman","influenced_by":"http://www.wikidata.org/entity/Q977176","influenced_byLabel":"George Bruns"},{"item":"http://www.wikidata.org/entity/Q103767","itemLabel":"Charlie Parker","influenced_by":"http://www.wikidata.org/entity/Q1017770","influenced_byLabel":"Buster Smith"},{"item":"http://www.wikidata.org/entity/Q20942808","itemLabel":"Erwan Ropars","influenced_by":"http://www.wikidata.org/entity/Q1048469","influenced_byLabel":"music of Scotland"},{"item":"http://www.wikidata.org/entity/Q202246","itemLabel":"Morrissey","influenced_by":"http://www.wikidata.org/entity/Q1690964","influenced_byLabel":"Jobriath"},{"item":"http://www.wikidata.org/entity/Q710574","itemLabel":"Praga Khan","influenced_by":"http://www.wikidata.org/entity/Q1786810","influenced_byLabel":"Lords of Acid"},{"item":"http://www.wikidata.org/entity/Q659238","itemLabel":"Ariel Pink","influenced_by":"http://www.wikidata.org/entity/Q2348668","influenced_byLabel":"R. Stevie Moore"},{"item":"http://www.wikidata.org/entity/Q63441946","itemLabel":"JohnThvhk","influenced_by":"http://www.wikidata.org/entity/Q2486179","influenced_byLabel":"music of Venezuela"},{"item":"http://www.wikidata.org/entity/Q374323","itemLabel":"Cashis","influenced_by":"http://www.wikidata.org/entity/Q2713185","influenced_byLabel":"Bobby Creekwater"},{"item":"http://www.wikidata.org/entity/Q736274","itemLabel":"Papa Wemba","influenced_by":"http://www.wikidata.org/entity/Q2743754","influenced_byLabel":"Tabu Ley Rochereau"},{"item":"http://www.wikidata.org/entity/Q2947051","itemLabel":"Cesk Freixas","influenced_by":"http://www.wikidata.org/entity/Q2734296","influenced_byLabel":"Ovidi Montllor"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q3015617","influenced_byLabel":"Breton dance"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q3089456","influenced_byLabel":"Frères Morvan"},{"item":"http://www.wikidata.org/entity/Q96279937","itemLabel":"Eghe Nimose","influenced_by":"http://www.wikidata.org/entity/Q3064804","influenced_byLabel":"Fally Ipupa"},{"item":"http://www.wikidata.org/entity/Q96279937","itemLabel":"Eghe Nimose","influenced_by":"http://www.wikidata.org/entity/Q3069697","influenced_byLabel":"Ferre Gola"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q3176402","influenced_byLabel":"Jef Le Penven"},{"item":"http://www.wikidata.org/entity/Q130742","itemLabel":"Alanis Morissette","influenced_by":"http://www.wikidata.org/entity/Q3131983","influenced_byLabel":"Marianne Williamson"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q3261415","influenced_byLabel":"Louis Capart"},{"item":"http://www.wikidata.org/entity/Q982578","itemLabel":"Meriem Fekkaï","influenced_by":"http://www.wikidata.org/entity/Q3141414","influenced_byLabel":"Q3141414"},{"item":"http://www.wikidata.org/entity/Q18744765","itemLabel":"Erwan Hamon","influenced_by":"http://www.wikidata.org/entity/Q3168171","influenced_byLabel":"Jean-Michel Veillon"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q3109564","influenced_byLabel":"Goapele"},{"item":"http://www.wikidata.org/entity/Q34166","itemLabel":"Slash","influenced_by":"http://www.wikidata.org/entity/Q3433372","influenced_byLabel":"Elliot Easton"},{"item":"http://www.wikidata.org/entity/Q981236","itemLabel":"Paco Ibáñez","influenced_by":"http://www.wikidata.org/entity/Q3479561","influenced_byLabel":"Serge Utgé-Royo"},{"item":"http://www.wikidata.org/entity/Q355531","itemLabel":"Stanley Crouch","influenced_by":"http://www.wikidata.org/entity/Q3608065","influenced_byLabel":"Albert Murray"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q3814475","influenced_byLabel":"Alexa Ray Joel"},{"item":"http://www.wikidata.org/entity/Q2310417","itemLabel":"Danger","influenced_by":"http://www.wikidata.org/entity/Q4579570","influenced_byLabel":"1980s in music"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q5000863","influenced_byLabel":"Burton Hatlen"},{"item":"http://www.wikidata.org/entity/Q39829","itemLabel":"Stephen King","influenced_by":"http://www.wikidata.org/entity/Q5293417","influenced_byLabel":"Don Robertson"},{"item":"http://www.wikidata.org/entity/Q431128","itemLabel":"David Helfgott","influenced_by":"http://www.wikidata.org/entity/Q5200879","influenced_byLabel":"Cyril Smith"},{"item":"http://www.wikidata.org/entity/Q4223352","itemLabel":"Krzysztof Klenczon","influenced_by":"http://www.wikidata.org/entity/Q5484334","influenced_byLabel":"Franciszek Walicki"},{"item":"http://www.wikidata.org/entity/Q7817635","itemLabel":"Tom Smothers","influenced_by":"http://www.wikidata.org/entity/Q6075016","influenced_byLabel":"Irwin Corey"},{"item":"http://www.wikidata.org/entity/Q55468943","itemLabel":"Luis Rizzo","influenced_by":"http://www.wikidata.org/entity/Q6109778","influenced_byLabel":"Roberto Grela"},{"item":"http://www.wikidata.org/entity/Q98669425","itemLabel":"Q98669425","influenced_by":"http://www.wikidata.org/entity/Q6125986","influenced_byLabel":"Servando & Florentino"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q6780444","influenced_byLabel":"Mary O'Hara"},{"item":"http://www.wikidata.org/entity/Q2157750","itemLabel":"Reinette L'Oranaise","influenced_by":"http://www.wikidata.org/entity/Q6821845","influenced_byLabel":"Messaoud El Mediouni"},{"item":"http://www.wikidata.org/entity/Q7821874","itemLabel":"Tony Bellotto","influenced_by":"http://www.wikidata.org/entity/Q6701485","influenced_byLabel":"Luiz Melodia"},{"item":"http://www.wikidata.org/entity/Q91345707","itemLabel":"Mary McDonald Klimek","influenced_by":"http://www.wikidata.org/entity/Q6204221","influenced_byLabel":"Jo Estill"},{"item":"http://www.wikidata.org/entity/Q292180","itemLabel":"Joy Harjo","influenced_by":"http://www.wikidata.org/entity/Q7519043","influenced_byLabel":"Simon J. Ortiz"},{"item":"http://www.wikidata.org/entity/Q64410255","itemLabel":"Alice Newman","influenced_by":"http://www.wikidata.org/entity/Q8074740","influenced_byLabel":"Zoë Poledouris"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q8074740","influenced_byLabel":"Zoë Poledouris"},{"item":"http://www.wikidata.org/entity/Q4223352","itemLabel":"Krzysztof Klenczon","influenced_by":"http://www.wikidata.org/entity/Q11720241","influenced_byLabel":"Janusz Kondratowicz"},{"item":"http://www.wikidata.org/entity/Q3050580","itemLabel":"Gwenno Saunders","influenced_by":"http://www.wikidata.org/entity/Q13132472","influenced_byLabel":"Y Dydd Olaf"},{"item":"http://www.wikidata.org/entity/Q25894076","itemLabel":"Luca Chikovani","influenced_by":"http://www.wikidata.org/entity/Q17198340","influenced_byLabel":"Shawn Mendes"},{"item":"http://www.wikidata.org/entity/Q89942436","itemLabel":"Piper Newman","influenced_by":"http://www.wikidata.org/entity/Q16194721","influenced_byLabel":"Maria Newman"},{"item":"http://www.wikidata.org/entity/Q10681","itemLabel":"Alan Stivell","influenced_by":"http://www.wikidata.org/entity/Q20557538","influenced_byLabel":"Roger Abjean"},{"item":"http://www.wikidata.org/entity/Q59457194","itemLabel":"Cixqo","influenced_by":"http://www.wikidata.org/entity/Q21063945","influenced_byLabel":"DJ Spinall"},{"item":"http://www.wikidata.org/entity/Q59727812","itemLabel":"Jack Harlow","influenced_by":"http://www.wikidata.org/entity/Q21066641","influenced_byLabel":"Bryson Tiller"}];


const phil500full = [{"item":"http://www.wikidata.org/entity/Q448","itemLabel":"Denis Diderot","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q619","itemLabel":"Nicolaus Copernicus","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q868","itemLabel":"Aristotelis","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q868","influenced_byLabel":"Aristotelis"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q742","influenced_byLabel":"Jean Racine"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q11903","itemLabel":"Hypatia","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q37621","itemLabel":"Thomas Hobbes","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q48226","itemLabel":"Ralph Waldo Emerson","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q77144","itemLabel":"Leo Strauss","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q271809","itemLabel":"Proclus","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q767","influenced_byLabel":"Stéphane Mallarmé"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q434346","itemLabel":"Victor Cousin","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q855","influenced_byLabel":"Joseph Stalin"},{"item":"http://www.wikidata.org/entity/Q528261","itemLabel":"Ralph Cudworth","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q537304","itemLabel":"Ploutarchos of Athens","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q664619","itemLabel":"Rémi Brague","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q666230","itemLabel":"Aristobulus of Paneas","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q731904","itemLabel":"Valentin Ferdinandovich Asmus","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q1087945","itemLabel":"Dmitry Galkovsky","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q1173486","itemLabel":"David Anhaght","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q2332520","itemLabel":"Damaris Masham","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q2716613","itemLabel":"Ferdinand Alquié","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q3675891","itemLabel":"Christos Androutsos","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q28092109","itemLabel":"Pierre-Jean Labarrière","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q28152056","itemLabel":"Metrofan Aksyonov","influenced_by":"http://www.wikidata.org/entity/Q859","influenced_byLabel":"Plato"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q9061","itemLabel":"Karl Marx","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q9364","itemLabel":"Jean-Paul Sartre","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q38873","itemLabel":"Lou Andreas-Salomé","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q48226","itemLabel":"Ralph Waldo Emerson","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q60080","itemLabel":"Wilhelm Dilthey","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q61171","itemLabel":"Erich Neumann","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q62977","itemLabel":"Walter Kaufmann","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q76422","itemLabel":"Ludwig Feuerbach","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q76725","itemLabel":"Max Stirner","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q77057","itemLabel":"Karl Robert Eduard von Hartmann","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q85942","itemLabel":"Nachman Krochmal","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q125879","itemLabel":"William Alston","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q128126","itemLabel":"Claude Lévi-Strauss","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q157318","itemLabel":"Leszek Kołakowski","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q189564","itemLabel":"Pierre Teilhard de Chardin","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q312295","itemLabel":"Giovanni Gentile","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q340234","itemLabel":"Achille Mbembe","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q342730","itemLabel":"Antonio Labriola","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q432690","itemLabel":"Catherine Malabou","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q434346","itemLabel":"Victor Cousin","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q445939","itemLabel":"Roger Scruton","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q463553","itemLabel":"J. M. E. McTaggart","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q540407","itemLabel":"Jean Hyppolite","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q572741","itemLabel":"Kwame Anthony Appiah","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q896474","itemLabel":"Dumitru D. Roșca","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q983648","itemLabel":"Kostas Axelos","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q1680038","itemLabel":"James Black Baillie","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q2200215","itemLabel":"R.F. Beerling","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q3513783","itemLabel":"Francis Ellingwood Abbot","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q3707183","itemLabel":"Diego Fusaro","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q9215","influenced_byLabel":"Sigmund Freud"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q11705519","itemLabel":"Ángel Amor Ruibal","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q19974589","itemLabel":"Yevgeny Edelson","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q26043406","itemLabel":"Kohei Saito","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q28092109","itemLabel":"Pierre-Jean Labarrière","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q9235","influenced_byLabel":"Georg Wilhelm Friedrich Hegel"},{"item":"http://www.wikidata.org/entity/Q448","itemLabel":"Denis Diderot","influenced_by":"http://www.wikidata.org/entity/Q9068","influenced_byLabel":"Voltaire"},{"item":"http://www.wikidata.org/entity/Q935","itemLabel":"Isaac Newton","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q937","itemLabel":"Albert Einstein","influenced_by":"http://www.wikidata.org/entity/Q9095","influenced_byLabel":"James Clerk Maxwell"},{"item":"http://www.wikidata.org/entity/Q1290","itemLabel":"Blaise Pascal","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9353","itemLabel":"John Locke","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q9068","influenced_byLabel":"Voltaire"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q9200","influenced_byLabel":"Paul"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q43393","itemLabel":"Robert Boyle","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q58586","itemLabel":"Edmund Husserl","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q9200","influenced_byLabel":"Paul"},{"item":"http://www.wikidata.org/entity/Q61078","itemLabel":"Walter Benjamin","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q76959","itemLabel":"Ralf Dahrendorf","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q128494","itemLabel":"Lyubov Axelrod","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q157318","itemLabel":"Leszek Kołakowski","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q179109","itemLabel":"Roland Barthes","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q182847","itemLabel":"Jean Baudrillard","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q184169","itemLabel":"Louis Althusser","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q188663","itemLabel":"Marin Mersenne","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q189564","itemLabel":"Pierre Teilhard de Chardin","influenced_by":"http://www.wikidata.org/entity/Q9200","influenced_byLabel":"Paul"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q212639","itemLabel":"Maurice Merleau-Ponty","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q289333","itemLabel":"Étienne Balibar","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q309818","itemLabel":"Nicolas Malebranche","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q310341","itemLabel":"Antonio Negri","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q332535","itemLabel":"Sergei Bulgakov","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q342730","itemLabel":"Antonio Labriola","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q347930","itemLabel":"Antonie Pannekoek","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q376036","itemLabel":"Svetozar Marković","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q449538","itemLabel":"Alexander Zinoviev","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q540407","itemLabel":"Jean Hyppolite","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q731904","itemLabel":"Valentin Ferdinandovich Asmus","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q947456","itemLabel":"Sidney Hook","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q983648","itemLabel":"Kostas Axelos","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q2716613","itemLabel":"Ferdinand Alquié","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q2939300","itemLabel":"Carlos Astrada","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q4059000","itemLabel":"Aisiqi","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q4266616","itemLabel":"Lev Lopatin","influenced_by":"http://www.wikidata.org/entity/Q9191","influenced_byLabel":"René Descartes"},{"item":"http://www.wikidata.org/entity/Q7297230","itemLabel":"Ray Brassier","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q10392247","itemLabel":"Vladimir Safatle","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q26043406","itemLabel":"Kohei Saito","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q30143889","itemLabel":"Pierre Raymond","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q9068","itemLabel":"Voltaire","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q22670","itemLabel":"Friedrich Schiller","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q37160","itemLabel":"David Hume","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q38193","itemLabel":"Arthur Schopenhauer","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q41585","itemLabel":"David Hilbert","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q58586","itemLabel":"Edmund Husserl","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q60070","itemLabel":"Friedrich Wilhelm Joseph Schelling","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q60080","itemLabel":"Wilhelm Dilthey","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q71029","itemLabel":"Hermann Weyl","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q72151","itemLabel":"Markus Herz","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76685","itemLabel":"Johann Friedrich Herbart","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76709","itemLabel":"Hermann Cohen","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76881","itemLabel":"Gustav Fechner","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q76997","itemLabel":"Moses Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q82049","itemLabel":"George Berkeley","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q85942","itemLabel":"Nachman Krochmal","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q102585","itemLabel":"Johann Gottlieb Fichte","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q123190","itemLabel":"Jean Piaget","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q155547","itemLabel":"Johann Gottfried Herder","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q155887","itemLabel":"Luitzen Egbertus Jan Brouwer","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q157318","itemLabel":"Leszek Kołakowski","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q165792","itemLabel":"Edmund Burke","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q172544","itemLabel":"John Rawls","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q172544","itemLabel":"John Rawls","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q275003","itemLabel":"Émile Chartier","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q310791","itemLabel":"Jules Michelet","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q313073","itemLabel":"Jonathan Edwards","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q313929","itemLabel":"Mortimer Jerome Adler","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q9333","influenced_byLabel":"Laozi"},{"item":"http://www.wikidata.org/entity/Q335112","itemLabel":"Anthony Ashley-Cooper, 3rd Earl of Shaftesbury","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q364975","itemLabel":"Richard Cantillon","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q434346","itemLabel":"Victor Cousin","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q445939","itemLabel":"Roger Scruton","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q465763","itemLabel":"Salomon Maimon","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q519894","itemLabel":"Antoni Lange","influenced_by":"http://www.wikidata.org/entity/Q9327","influenced_byLabel":"Guy de Maupassant"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q731904","itemLabel":"Valentin Ferdinandovich Asmus","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q1248105","itemLabel":"Aleksei Losev","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q1442423","itemLabel":"Gabriel Jean Edmond Séailles","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q2716613","itemLabel":"Ferdinand Alquié","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q2915527","itemLabel":"Monroe Beardsley","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q3513783","itemLabel":"Francis Ellingwood Abbot","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q4326996","itemLabel":"Oleg Nogovitsyn","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q7609759","itemLabel":"Stephen Law","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q28092109","itemLabel":"Pierre-Jean Labarrière","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q28152056","itemLabel":"Metrofan Aksyonov","influenced_by":"http://www.wikidata.org/entity/Q9312","influenced_byLabel":"Immanuel Kant"},{"item":"http://www.wikidata.org/entity/Q62269206","itemLabel":"Matthew Stuart","influenced_by":"http://www.wikidata.org/entity/Q9353","influenced_byLabel":"John Locke"},{"item":"http://www.wikidata.org/entity/Q7060","itemLabel":"Michel Onfray","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q7197","itemLabel":"Simone de Beauvoir","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q34670","itemLabel":"Albert Camus","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q38873","itemLabel":"Lou Andreas-Salomé","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q60735","itemLabel":"Axel Honneth","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q62977","itemLabel":"Walter Kaufmann","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q86575","itemLabel":"Frithjof Bergmann","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q153034","itemLabel":"Emmanuel Levinas","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q9381","influenced_byLabel":"Adam Smith"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q179109","itemLabel":"Roland Barthes","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q193670","itemLabel":"Frantz Fanon","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q201538","itemLabel":"Edward Said","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q247016","itemLabel":"André Comte-Sponville","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q270800","itemLabel":"Gaston Bachelard","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q313509","itemLabel":"Bernard-Henri Lévy","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q345641","itemLabel":"Bernard Williams","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q347362","itemLabel":"Fredric Jameson","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q365129","itemLabel":"Arthur Danto Lindo","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q368831","itemLabel":"Colin Wilson","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q580695","itemLabel":"Robert C. Solomon","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q620732","itemLabel":"Alexander Tarasov","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q631466","itemLabel":"Benny Lévy","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q722738","itemLabel":"Juan Bautista Alberdi","influenced_by":"http://www.wikidata.org/entity/Q9381","influenced_byLabel":"Adam Smith"},{"item":"http://www.wikidata.org/entity/Q822727","itemLabel":"Bernard Stiegler","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q1926717","itemLabel":"Micha Josef Berdyczewski","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q2200215","itemLabel":"R.F. Beerling","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q3182114","itemLabel":"John Moore","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q3617745","itemLabel":"Anna Maria Carassiti","influenced_by":"http://www.wikidata.org/entity/Q9358","influenced_byLabel":"Friedrich Nietzsche"},{"item":"http://www.wikidata.org/entity/Q3850939","itemLabel":"Fernando González","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q4939864","itemLabel":"Sissela Bok","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q5950521","itemLabel":"Juan José Sebreli","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q6097521","itemLabel":"Ivan Soll","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q6138416","itemLabel":"James M. Edie","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q6536603","itemLabel":"Lewis Gordon","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q6769300","itemLabel":"Mark Poster","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q7174493","itemLabel":"Peter Hallward","influenced_by":"http://www.wikidata.org/entity/Q9364","influenced_byLabel":"Jean-Paul Sartre"},{"item":"http://www.wikidata.org/entity/Q7815187","itemLabel":"Tom Campbell","influenced_by":"http://www.wikidata.org/entity/Q9381","influenced_byLabel":"Adam Smith"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q9711","influenced_byLabel":"Honoré de Balzac"},{"item":"http://www.wikidata.org/entity/Q1001","itemLabel":"Mohandas Karamchand Gandhi","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q9554","influenced_byLabel":"Martin Luther"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q9458","influenced_byLabel":"Muhammad"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q9191","itemLabel":"René Descartes","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q9546","influenced_byLabel":"Al-Ghazali"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q41590","itemLabel":"Mircea Eliade","influenced_by":"http://www.wikidata.org/entity/Q9711","influenced_byLabel":"Honoré de Balzac"},{"item":"http://www.wikidata.org/entity/Q43936","itemLabel":"William of Ockham","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q48301","itemLabel":"Martin Heidegger","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q58853","itemLabel":"Karl-Otto Apel","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q75812","itemLabel":"Norbert Elias","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q76519","itemLabel":"Rudolf Carnap","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q76849","itemLabel":"Georg Simmel","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q78688","itemLabel":"Heinz von Foerster","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q86371","itemLabel":"Gustav Bergmann","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q125879","itemLabel":"William Alston","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q131333","itemLabel":"George Eliot","influenced_by":"http://www.wikidata.org/entity/Q9711","influenced_byLabel":"Honoré de Balzac"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q176909","itemLabel":"Walker Percy","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q189172","itemLabel":"Andrey Korotayev","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q213393","itemLabel":"John Wesley","influenced_by":"http://www.wikidata.org/entity/Q9554","influenced_byLabel":"Martin Luther"},{"item":"http://www.wikidata.org/entity/Q215927","itemLabel":"Yeshayahu Leibowitz","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q229646","itemLabel":"G. E. M. Anscombe","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q229646","itemLabel":"G. E. M. Anscombe","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q231690","itemLabel":"B. R. Ambedkar","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q295012","itemLabel":"John Searle","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q313929","itemLabel":"Mortimer Jerome Adler","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q9554","influenced_byLabel":"Martin Luther"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q354867","itemLabel":"Alan Watts","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q379577","itemLabel":"Marpa Lotsawa","influenced_by":"http://www.wikidata.org/entity/Q9441","influenced_byLabel":"Gautama Buddha"},{"item":"http://www.wikidata.org/entity/Q438839","itemLabel":"Aleksandr Dugin","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q472676","itemLabel":"Stephen Toulmin","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q9458","influenced_byLabel":"Muhammad"},{"item":"http://www.wikidata.org/entity/Q601275","itemLabel":"John Wisdom","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q1050943","itemLabel":"Catherine Colliot-Thélène","influenced_by":"http://www.wikidata.org/entity/Q9387","influenced_byLabel":"Max Weber"},{"item":"http://www.wikidata.org/entity/Q1364813","itemLabel":"Norman Malcolm","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q1436392","itemLabel":"James Tully","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q4725710","itemLabel":"Alice Ambrose","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q4769048","itemLabel":"Annette Baier","influenced_by":"http://www.wikidata.org/entity/Q9391","influenced_byLabel":"Ludwig Wittgenstein"},{"item":"http://www.wikidata.org/entity/Q29439790","itemLabel":"Joan Roig Gironella","influenced_by":"http://www.wikidata.org/entity/Q9438","influenced_byLabel":"Thomas Aquinas"},{"item":"http://www.wikidata.org/entity/Q859","itemLabel":"Plato","influenced_by":"http://www.wikidata.org/entity/Q6691","influenced_byLabel":"Homer"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q6691","influenced_byLabel":"Homer"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q6691","influenced_byLabel":"Homer"},{"item":"http://www.wikidata.org/entity/Q12807","itemLabel":"Umberto Eco","influenced_by":"http://www.wikidata.org/entity/Q6882","influenced_byLabel":"James Joyce"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q102585","itemLabel":"Johann Gottlieb Fichte","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q105428","itemLabel":"Johann Heinrich Pestalozzi","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q113741","itemLabel":"Olga Taussky-Todd","influenced_by":"http://www.wikidata.org/entity/Q7099","influenced_byLabel":"Emmy Noether"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q130631","itemLabel":"Jacques Derrida","influenced_by":"http://www.wikidata.org/entity/Q6882","influenced_byLabel":"James Joyce"},{"item":"http://www.wikidata.org/entity/Q184750","itemLabel":"Slavoj Žižek","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q185085","itemLabel":"Miguel de Unamuno","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q192348","itemLabel":"Benedetto Croce","influenced_by":"http://www.wikidata.org/entity/Q6527","influenced_byLabel":"Jean-Jacques Rousseau"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q471523","itemLabel":"Francesco De Sanctis","influenced_by":"http://www.wikidata.org/entity/Q6691","influenced_byLabel":"Homer"},{"item":"http://www.wikidata.org/entity/Q670042","itemLabel":"Eduardo Lourenço","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q971585","itemLabel":"Hubert Dreyfus","influenced_by":"http://www.wikidata.org/entity/Q6512","influenced_byLabel":"Søren Kierkegaard"},{"item":"http://www.wikidata.org/entity/Q991","itemLabel":"Fyodor Dostoyevsky","influenced_by":"http://www.wikidata.org/entity/Q7200","influenced_byLabel":"Alexander Pushkin"},{"item":"http://www.wikidata.org/entity/Q1001","itemLabel":"Mohandas Karamchand Gandhi","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q1067","itemLabel":"Dante Alighieri","influenced_by":"http://www.wikidata.org/entity/Q7198","influenced_byLabel":"Ovid"},{"item":"http://www.wikidata.org/entity/Q7243","itemLabel":"Leo Tolstoy","influenced_by":"http://www.wikidata.org/entity/Q7200","influenced_byLabel":"Alexander Pushkin"},{"item":"http://www.wikidata.org/entity/Q46633","itemLabel":"Charles Babbage","influenced_by":"http://www.wikidata.org/entity/Q7259","influenced_byLabel":"Ada Lovelace"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q7199","influenced_byLabel":"Marcel Proust"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q298521","itemLabel":"Saul Kripke","influenced_by":"http://www.wikidata.org/entity/Q7251","influenced_byLabel":"Alan Turing"},{"item":"http://www.wikidata.org/entity/Q314189","itemLabel":"Lev Shestov","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q332535","itemLabel":"Sergei Bulgakov","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q484141","itemLabel":"Muhammad Iqbalm","influenced_by":"http://www.wikidata.org/entity/Q7243","influenced_byLabel":"Leo Tolstoy"},{"item":"http://www.wikidata.org/entity/Q505296","itemLabel":"Nikos Poulantzas","influenced_by":"http://www.wikidata.org/entity/Q7231","influenced_byLabel":"Rosa Luxemburg"},{"item":"http://www.wikidata.org/entity/Q543381","itemLabel":"Iris Marion Young","influenced_by":"http://www.wikidata.org/entity/Q7197","influenced_byLabel":"Simone de Beauvoir"},{"item":"http://www.wikidata.org/entity/Q1290","itemLabel":"Blaise Pascal","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q9438","itemLabel":"Thomas Aquinas","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q35802","itemLabel":"Benedictus de Spinoza","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q35900","itemLabel":"Omar Khayyám","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q44481","itemLabel":"Pierre-Simon Laplace","influenced_by":"http://www.wikidata.org/entity/Q7604","influenced_byLabel":"Leonhard Euler"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q102851","itemLabel":"Boethius","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q127398","itemLabel":"Moshe ben Maimon","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q184500","itemLabel":"Johannes Scotus Eriugena","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q259507","itemLabel":"bell hooks","influenced_by":"http://www.wikidata.org/entity/Q8027","influenced_byLabel":"Martin Luther King Jr."},{"item":"http://www.wikidata.org/entity/Q471041","itemLabel":"Hossein Nasr","influenced_by":"http://www.wikidata.org/entity/Q8011","influenced_byLabel":"Avicenna"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q8023","influenced_byLabel":"Nelson Mandela"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q8027","influenced_byLabel":"Martin Luther King Jr."},{"item":"http://www.wikidata.org/entity/Q2332520","itemLabel":"Damaris Masham","influenced_by":"http://www.wikidata.org/entity/Q8018","influenced_byLabel":"Augustine of Hippo"},{"item":"http://www.wikidata.org/entity/Q5749","itemLabel":"Pierre-Joseph Proudhon","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q8011","itemLabel":"Avicenna","influenced_by":"http://www.wikidata.org/entity/Q8778","influenced_byLabel":"Galen"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q8409","influenced_byLabel":"Alexander the Great"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q9364","itemLabel":"Jean-Paul Sartre","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q8747","influenced_byLabel":"Euclid"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q34787","itemLabel":"Friedrich Engels","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q44272","itemLabel":"Michel Foucault","influenced_by":"http://www.wikidata.org/entity/Q9061","influenced_byLabel":"Karl Marx"},{"item":"http://www.wikidata.org/entity/Q75814","itemLabel":"Wilhelm Wundt","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q76510","itemLabel":"Christian Wolff","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q76997","itemLabel":"Moses Mendelssohn","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q77057","itemLabel":"Karl Robert Eduard von Hartmann","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q123565","itemLabel":"Charles Bonnet","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q155547","itemLabel":"Johann Gottfried Herder","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q164374","itemLabel":"Pierre Louis Moreau de Maupertuis","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q168004","itemLabel":"Friedrich Heinrich Jacobi","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q180619","itemLabel":"Stephen Jay Gould","influenced_by":"http://www.wikidata.org/entity/Q9049","influenced_byLabel":"Noam Chomsky"},{"item":"http://www.wikidata.org/entity/Q184226","itemLabel":"Gilles Deleuze","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q184530","itemLabel":"Gerolamo Cardano","influenced_by":"http://www.wikidata.org/entity/Q8739","influenced_byLabel":"Archimedes"},{"item":"http://www.wikidata.org/entity/Q191029","itemLabel":"Giuseppe Peano","influenced_by":"http://www.wikidata.org/entity/Q8747","influenced_byLabel":"Euclid"},{"item":"http://www.wikidata.org/entity/Q212730","itemLabel":"Steven Pinker","influenced_by":"http://www.wikidata.org/entity/Q9049","influenced_byLabel":"Noam Chomsky"},{"item":"http://www.wikidata.org/entity/Q310757","itemLabel":"Ruđer Josip Bošković","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q310791","itemLabel":"Jules Michelet","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q465763","itemLabel":"Salomon Maimon","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q584382","itemLabel":"Yehoshua Bar-Hillel","influenced_by":"http://www.wikidata.org/entity/Q9049","influenced_byLabel":"Noam Chomsky"},{"item":"http://www.wikidata.org/entity/Q637580","itemLabel":"Todd May","influenced_by":"http://www.wikidata.org/entity/Q9049","influenced_byLabel":"Noam Chomsky"},{"item":"http://www.wikidata.org/entity/Q930837","itemLabel":"Gregory Chaitin","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q4226680","itemLabel":"A. A. Kozlov","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q4266616","itemLabel":"Lev Lopatin","influenced_by":"http://www.wikidata.org/entity/Q9047","influenced_byLabel":"Gottfried Wilhelm Leibniz"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q67323","influenced_byLabel":"Jakob Thomasius"},{"item":"http://www.wikidata.org/entity/Q9047","itemLabel":"Gottfried Wilhelm Leibniz","influenced_by":"http://www.wikidata.org/entity/Q73014","influenced_byLabel":"Erhard Weigel"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q75889","influenced_byLabel":"Friedrich Hölderlin"},{"item":"http://www.wikidata.org/entity/Q57255","itemLabel":"Hans Jonas","influenced_by":"http://www.wikidata.org/entity/Q76327","influenced_byLabel":"Rudolf Bultmann"},{"item":"http://www.wikidata.org/entity/Q58853","itemLabel":"Karl-Otto Apel","influenced_by":"http://www.wikidata.org/entity/Q76357","influenced_byLabel":"Jürgen Habermas"},{"item":"http://www.wikidata.org/entity/Q122318","itemLabel":"Paul Bernays","influenced_by":"http://www.wikidata.org/entity/Q72599","influenced_byLabel":"Issai Schur"},{"item":"http://www.wikidata.org/entity/Q263235","itemLabel":"Seyla Benhabib","influenced_by":"http://www.wikidata.org/entity/Q76357","influenced_byLabel":"Jürgen Habermas"},{"item":"http://www.wikidata.org/entity/Q309675","itemLabel":"G. Stanley Hall","influenced_by":"http://www.wikidata.org/entity/Q75814","influenced_byLabel":"Wilhelm Wundt"},{"item":"http://www.wikidata.org/entity/Q382016","itemLabel":"Gilles de Roberval","influenced_by":"http://www.wikidata.org/entity/Q75655","influenced_byLabel":"Pierre de Fermat"},{"item":"http://www.wikidata.org/entity/Q469888","itemLabel":"Lewis Mumford","influenced_by":"http://www.wikidata.org/entity/Q73646","influenced_byLabel":"Thorstein Veblen"},{"item":"http://www.wikidata.org/entity/Q505528","itemLabel":"Harold Innis","influenced_by":"http://www.wikidata.org/entity/Q73646","influenced_byLabel":"Thorstein Veblen"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q72803","influenced_byLabel":"Gustav Weigand"},{"item":"http://www.wikidata.org/entity/Q550792","itemLabel":"Constantin Rădulescu-Motru","influenced_by":"http://www.wikidata.org/entity/Q75814","influenced_byLabel":"Wilhelm Wundt"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q65644","influenced_byLabel":"Heymann Steinthal"},{"item":"http://www.wikidata.org/entity/Q3675891","itemLabel":"Christos Androutsos","influenced_by":"http://www.wikidata.org/entity/Q75814","influenced_byLabel":"Wilhelm Wundt"},{"item":"http://www.wikidata.org/entity/Q4017966","itemLabel":"Walter Maturi","influenced_by":"http://www.wikidata.org/entity/Q66147","influenced_byLabel":"Friedrich Meinecke"},{"item":"http://www.wikidata.org/entity/Q5935914","itemLabel":"Jorge Rivera Cruchaga","influenced_by":"http://www.wikidata.org/entity/Q76356","influenced_byLabel":"Hans-Georg Gadamer"},{"item":"http://www.wikidata.org/entity/Q20046888","itemLabel":"Luis Filipe Barreto","influenced_by":"http://www.wikidata.org/entity/Q76356","influenced_byLabel":"Hans-Georg Gadamer"},{"item":"http://www.wikidata.org/entity/Q22957880","itemLabel":"Cristina Lafont","influenced_by":"http://www.wikidata.org/entity/Q76357","influenced_byLabel":"Jürgen Habermas"},{"item":"http://www.wikidata.org/entity/Q6512","itemLabel":"Søren Kierkegaard","influenced_by":"http://www.wikidata.org/entity/Q76499","influenced_byLabel":"Johann Georg Hamann"},{"item":"http://www.wikidata.org/entity/Q9061","itemLabel":"Karl Marx","influenced_by":"http://www.wikidata.org/entity/Q76422","influenced_byLabel":"Ludwig Feuerbach"},{"item":"http://www.wikidata.org/entity/Q9061","itemLabel":"Karl Marx","influenced_by":"http://www.wikidata.org/entity/Q76725","influenced_byLabel":"Max Stirner"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q76576","influenced_byLabel":"Friedrich Schleiermacher"},{"item":"http://www.wikidata.org/entity/Q9312","itemLabel":"Immanuel Kant","influenced_by":"http://www.wikidata.org/entity/Q76510","influenced_byLabel":"Christian Wolff"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q76521","influenced_byLabel":"Max Scheler"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q76725","influenced_byLabel":"Max Stirner"},{"item":"http://www.wikidata.org/entity/Q27645","itemLabel":"Mikhail Bakunin","influenced_by":"http://www.wikidata.org/entity/Q76422","influenced_byLabel":"Ludwig Feuerbach"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q76420","influenced_byLabel":"Georg Cantor"},{"item":"http://www.wikidata.org/entity/Q34787","itemLabel":"Friedrich Engels","influenced_by":"http://www.wikidata.org/entity/Q76422","influenced_byLabel":"Ludwig Feuerbach"},{"item":"http://www.wikidata.org/entity/Q42156","itemLabel":"Henri Bergson","influenced_by":"http://www.wikidata.org/entity/Q76849","influenced_byLabel":"Georg Simmel"},{"item":"http://www.wikidata.org/entity/Q58720","itemLabel":"Mikhail Vassilyevich Lomonosov","influenced_by":"http://www.wikidata.org/entity/Q76510","influenced_byLabel":"Christian Wolff"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q76509","influenced_byLabel":"Karl Jaspers"},{"item":"http://www.wikidata.org/entity/Q60080","itemLabel":"Wilhelm Dilthey","influenced_by":"http://www.wikidata.org/entity/Q76576","influenced_byLabel":"Friedrich Schleiermacher"},{"item":"http://www.wikidata.org/entity/Q76356","itemLabel":"Hans-Georg Gadamer","influenced_by":"http://www.wikidata.org/entity/Q76576","influenced_byLabel":"Friedrich Schleiermacher"},{"item":"http://www.wikidata.org/entity/Q76422","itemLabel":"Ludwig Feuerbach","influenced_by":"http://www.wikidata.org/entity/Q76576","influenced_byLabel":"Friedrich Schleiermacher"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q76709","influenced_byLabel":"Hermann Cohen"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q76710","influenced_byLabel":"Franz Rosenzweig"},{"item":"http://www.wikidata.org/entity/Q79969","itemLabel":"Emma Goldman","influenced_by":"http://www.wikidata.org/entity/Q76725","influenced_byLabel":"Max Stirner"},{"item":"http://www.wikidata.org/entity/Q84345","itemLabel":"Ludwig von Bertalanffy","influenced_by":"http://www.wikidata.org/entity/Q76519","influenced_byLabel":"Rudolf Carnap"},{"item":"http://www.wikidata.org/entity/Q93996","itemLabel":"Ernst Mach","influenced_by":"http://www.wikidata.org/entity/Q76516","influenced_byLabel":"Richard Avenarius"},{"item":"http://www.wikidata.org/entity/Q123382","itemLabel":"Frithjof Schuon","influenced_by":"http://www.wikidata.org/entity/Q76548","influenced_byLabel":"Meister Eckhart"},{"item":"http://www.wikidata.org/entity/Q152388","itemLabel":"Theodor W. Adorno","influenced_by":"http://www.wikidata.org/entity/Q76826","influenced_byLabel":"Max Horkheimer"},{"item":"http://www.wikidata.org/entity/Q154145","itemLabel":"Gabriel Marcel","influenced_by":"http://www.wikidata.org/entity/Q76509","influenced_byLabel":"Karl Jaspers"},{"item":"http://www.wikidata.org/entity/Q155547","itemLabel":"Johann Gottfried Herder","influenced_by":"http://www.wikidata.org/entity/Q76499","influenced_byLabel":"Johann Georg Hamann"},{"item":"http://www.wikidata.org/entity/Q160640","itemLabel":"Raymond Aron","influenced_by":"http://www.wikidata.org/entity/Q76849","influenced_byLabel":"Georg Simmel"},{"item":"http://www.wikidata.org/entity/Q184656","itemLabel":"Nicolai Berdyaev","influenced_by":"http://www.wikidata.org/entity/Q76512","influenced_byLabel":"Franz Xaver von Baader"},{"item":"http://www.wikidata.org/entity/Q243757","itemLabel":"A. J. Ayer","influenced_by":"http://www.wikidata.org/entity/Q76519","influenced_byLabel":"Rudolf Carnap"},{"item":"http://www.wikidata.org/entity/Q311005","itemLabel":"Alain Badiou","influenced_by":"http://www.wikidata.org/entity/Q76420","influenced_byLabel":"Georg Cantor"},{"item":"http://www.wikidata.org/entity/Q311772","itemLabel":"Donald Davidson","influenced_by":"http://www.wikidata.org/entity/Q76519","influenced_byLabel":"Rudolf Carnap"},{"item":"http://www.wikidata.org/entity/Q334147","itemLabel":"Julius Evola","influenced_by":"http://www.wikidata.org/entity/Q76727","influenced_byLabel":"Ernst Jünger"},{"item":"http://www.wikidata.org/entity/Q342730","itemLabel":"Antonio Labriola","influenced_by":"http://www.wikidata.org/entity/Q76685","influenced_byLabel":"Johann Friedrich Herbart"},{"item":"http://www.wikidata.org/entity/Q380443","itemLabel":"Alain Finkielkraut","influenced_by":"http://www.wikidata.org/entity/Q76710","influenced_byLabel":"Franz Rosenzweig"},{"item":"http://www.wikidata.org/entity/Q584382","itemLabel":"Yehoshua Bar-Hillel","influenced_by":"http://www.wikidata.org/entity/Q76519","influenced_byLabel":"Rudolf Carnap"},{"item":"http://www.wikidata.org/entity/Q706525","itemLabel":"Mario Tronti","influenced_by":"http://www.wikidata.org/entity/Q76727","influenced_byLabel":"Ernst Jünger"},{"item":"http://www.wikidata.org/entity/Q1083378","itemLabel":"Carlo Lottieri","influenced_by":"http://www.wikidata.org/entity/Q76688","influenced_byLabel":"Hans-Hermann Hoppe"},{"item":"http://www.wikidata.org/entity/Q1386165","itemLabel":"Felix Adler","influenced_by":"http://www.wikidata.org/entity/Q76709","influenced_byLabel":"Hermann Cohen"},{"item":"http://www.wikidata.org/entity/Q1389946","itemLabel":"Philip Jourdain","influenced_by":"http://www.wikidata.org/entity/Q76420","influenced_byLabel":"Georg Cantor"},{"item":"http://www.wikidata.org/entity/Q3182114","itemLabel":"John Moore","influenced_by":"http://www.wikidata.org/entity/Q76725","influenced_byLabel":"Max Stirner"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q76501","influenced_byLabel":"Nicolai Hartmann"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q76504","influenced_byLabel":"Paul Natorp"},{"item":"http://www.wikidata.org/entity/Q4413029","itemLabel":"Vasily Seseman","influenced_by":"http://www.wikidata.org/entity/Q76709","influenced_byLabel":"Hermann Cohen"},{"item":"http://www.wikidata.org/entity/Q5715809","itemLabel":"Henric Sanielevici","influenced_by":"http://www.wikidata.org/entity/Q76586","influenced_byLabel":"Karl Kautsky"},{"item":"http://www.wikidata.org/entity/Q9370512","itemLabel":"Walery Łoziński","influenced_by":"http://www.wikidata.org/entity/Q76756","influenced_byLabel":"Albrecht Penck"},{"item":"http://www.wikidata.org/entity/Q9235","itemLabel":"Georg Wilhelm Friedrich Hegel","influenced_by":"http://www.wikidata.org/entity/Q77017","influenced_byLabel":"Jakob Böhme"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q77127","influenced_byLabel":"Mary Wigman"},{"item":"http://www.wikidata.org/entity/Q9358","itemLabel":"Friedrich Nietzsche","influenced_by":"http://www.wikidata.org/entity/Q78491","influenced_byLabel":"Stefan Zweig"},{"item":"http://www.wikidata.org/entity/Q33760","itemLabel":"Bertrand Russell","influenced_by":"http://www.wikidata.org/entity/Q78600","influenced_byLabel":"Alexius Meinong"},{"item":"http://www.wikidata.org/entity/Q41513","itemLabel":"William Blake","influenced_by":"http://www.wikidata.org/entity/Q77017","influenced_byLabel":"Jakob Böhme"},{"item":"http://www.wikidata.org/entity/Q47208","itemLabel":"Louis-Claude de Saint-Martin","influenced_by":"http://www.wikidata.org/entity/Q77017","influenced_byLabel":"Jakob Böhme"},{"item":"http://www.wikidata.org/entity/Q60025","itemLabel":"Hannah Arendt","influenced_by":"http://www.wikidata.org/entity/Q77148","influenced_byLabel":"Carl Schmitt"},{"item":"http://www.wikidata.org/entity/Q72106","itemLabel":"Bruno Bauch","influenced_by":"http://www.wikidata.org/entity/Q77012","influenced_byLabel":"Heinrich Rickert"},{"item":"http://www.wikidata.org/entity/Q72106","itemLabel":"Bruno Bauch","influenced_by":"http://www.wikidata.org/entity/Q77045","influenced_byLabel":"Wilhelm Windelband"},{"item":"http://www.wikidata.org/entity/Q72151","itemLabel":"Markus Herz","influenced_by":"http://www.wikidata.org/entity/Q76997","influenced_byLabel":"Moses Mendelssohn"},{"item":"http://www.wikidata.org/entity/Q76510","itemLabel":"Christian Wolff","influenced_by":"http://www.wikidata.org/entity/Q77288","influenced_byLabel":"Ehrenfried Walther von Tschirnhaus"},{"item":"http://www.wikidata.org/entity/Q78891","itemLabel":"Hugo Bergmann","influenced_by":"http://www.wikidata.org/entity/Q78484","influenced_byLabel":"Rudolf Steiner"},{"item":"http://www.wikidata.org/entity/Q91137","itemLabel":"Fyodor Stepun","influenced_by":"http://www.wikidata.org/entity/Q77012","influenced_byLabel":"Heinrich Rickert"},{"item":"http://www.wikidata.org/entity/Q91137","itemLabel":"Fyodor Stepun","influenced_by":"http://www.wikidata.org/entity/Q77045","influenced_byLabel":"Wilhelm Windelband"}];


const threeBodiesNetwork = {'nodes': [  {
                                          "id": "Qg",
                                          "label": "Galileo Galilei",
                                          "x": 445,
                                          "y": 92,
                                          "displayLabel": false
                                        },
                                        {
                                          "id": "Qh",
                                          "label": "Denis Diderot",
                                          "x": 574,
                                          "y": 75,
                                          "displayLabel": false
                                        },
                                        {
                                          "id": "Qi",
                                          "label": "Nicolaus Copernicus",
                                          "x": 826,
                                          "y": 203,
                                          "displayLabel": false
                                        }
                                        ,
                                        {
                                          "id": "Qa",
                                          "label": "Nicolaus Copernicus",
                                          "x": 826,
                                          "y": 203,
                                          "displayLabel": false
                                        },
                                        {
                                          "id": "Qb",
                                          "label": "Nicolaus Copernicus",
                                          "x": 826,
                                          "y": 203,
                                          "displayLabel": false
                                        },
                                        {
                                          "id": "Qc",
                                          "label": "Nicolaus Copernicus",
                                          "x": 826,
                                          "y": 203,
                                          "displayLabel": false
                                        },
                                        {
                                          "id": "Qd",
                                          "label": "Nicolaus Copernicus",
                                          "x": 826,
                                          "y": 203,
                                          "displayLabel": false
                                        },
                                        {
                                          "id": "Qf",
                                          "label": "Nicolaus Copernicus",
                                          "x": 826,
                                          "y": 203,
                                          "displayLabel": false
                                        }
                                        ,
                                        {
                                          "id": "Qe",
                                          "label": "Nicolaus Copernicus",
                                          "x": 826,
                                          "y": 203,
                                          "displayLabel": false
                                        }
                                        // ,
                                        // {
                                        //   "id": "Qg",
                                        //   "label": "Nicolaus Copernicus",
                                        //   "x": 826,
                                        //   "y": 203,
                                        //   "displayLabel": false
                                        // }
                                        // ,
                                        // {
                                        //   "id": "Q6177",
                                        //   "label": "Nicolaus Copernicus",
                                        //   "x": 826,
                                        //   "y": 203,
                                        //   "displayLabel": false
                                        // },
                                        // {
                                        //   "id": "Q6198",
                                        //   "label": "Nicolaus Copernicus",
                                        //   "x": 826,
                                        //   "y": 203,
                                        //   "displayLabel": false
                                        // },
                                        // {
                                        //   "id": "Q6177",
                                        //   "label": "Nicolaus Copernicus",
                                        //   "x": 826,
                                        //   "y": 203,
                                        //   "displayLabel": false
                                        // },
                                        // {
                                        //   "id": "Q6198",
                                        //   "label": "Nicolaus Copernicus",
                                        //   "x": 826,
                                        //   "y": 203,
                                        //   "displayLabel": false
                                        // }
                                        ],
                        'edges' : [
                                        {
                                          'source' : "Qa",
                                          'target' : 'Qb'
                                        }
                                        ,
                                        {
                                          'source' : "Qa",
                                          'target' : 'Qd'
                                        },
                                        {
                                          'source' : "Qa",
                                          'target' : 'Qe'
                                        },
                                        {
                                          'source' : "Qc",
                                          'target' : 'Qd'
                                        },
                                        {
                                          'source' : "Qc",
                                          'target' : 'Qb'
                                        },
                                        {
                                          'source' : "Qc",
                                          'target' : 'Qg'
                                        },
                                        {
                                          'source' : "Qe",
                                          'target' : 'Qf'
                                        },
                                        {
                                          'source' : "Qe",
                                          'target' : 'Qh'
                                        },
                                        {
                                          'source' : "Qh",
                                          'target' : 'Qd'
                                        },
                                        {
                                          'source' : "Qb",
                                          'target' : 'Qf'
                                        }
                                        ,
                                        {
                                          'source' : "Qg",
                                          'target' : 'Qf'
                                        },
                                        {
                                          'source' : "Qg",
                                          'target' : 'Qh'
                                        }
                                        // ,
                                        // {
                                        //   'source' : "Qg",
                                        //   'target' : 'Qi'
                                        // },
                                        // {
                                        //   'source' : "Qi",
                                        //   'target' : 'Qa'
                                        // }
                                  ]
                        };


const platoComponent = [
  {
    "id": "Q307",
    "label": "Galileo Galilei",
    "x": 445,
    "y": 92,
    "displayLabel": false
  },
  {
    "id": "Q448",
    "label": "Denis Diderot",
    "x": 574,
    "y": 75,
    "displayLabel": false
  },
  {
    "id": "Q619",
    "label": "Nicolaus Copernicus",
    "x": 826,
    "y": 203,
    "displayLabel": false
  },
  {
    "id": "Q859",
    "label": "Plato",
    "x": 774,
    "y": 18,
    "displayLabel": false
  },
  {
    "id": "Q868",
    "label": "Aristotle",
    "x": 811,
    "y": 169,
    "displayLabel": false
  },
  {
    "id": "Q913",
    "label": "Socrates",
    "x": 808,
    "y": 83,
    "displayLabel": false
  },
  {
    "id": "Q935",
    "label": "Isaac Newton",
    "x": 1075,
    "y": 193,
    "displayLabel": false
  },
  {
    "id": "Q937",
    "label": "Albert Einstein",
    "x": 71,
    "y": 254,
    "displayLabel": false
  },
  {
    "id": "Q991",
    "label": "Fyodor Dostoyevsky",
    "x": 130,
    "y": 183,
    "displayLabel": false
  },
  {
    "id": "Q1001",
    "label": "Mohandas Karamchand Gandhi",
    "x": 707,
    "y": 37,
    "displayLabel": false
  },
  {
    "id": "Q1067",
    "label": "Dante Alighieri",
    "x": 272,
    "y": 125,
    "displayLabel": false
  },
  {
    "id": "Q1290",
    "label": "Blaise Pascal",
    "x": 947,
    "y": 111,
    "displayLabel": false
  },
  {
    "id": "Q1399",
    "label": "Niccolò Machiavelli",
    "x": 939,
    "y": 208,
    "displayLabel": false
  },
  {
    "id": "Q1541",
    "label": "Cicero",
    "x": 620,
    "y": 57,
    "displayLabel": false
  },
  {
    "id": "Q43216",
    "label": "Epicurus",
    "x": 395,
    "y": 157,
    "displayLabel": false
  },
  {
    "id": "Q43393",
    "label": "Robert Boyle",
    "x": 320,
    "y": 120,
    "displayLabel": false
  },
  {
    "id": "Q43499",
    "label": "Erasmus",
    "x": 732,
    "y": 223,
    "displayLabel": false
  },
  {
    "id": "Q43936",
    "label": "William of Ockham",
    "x": 902,
    "y": 195,
    "displayLabel": false
  },
  {
    "id": "Q43939",
    "label": "Anselm of Canterbury",
    "x": 625,
    "y": 151,
    "displayLabel": false
  },
  {
    "id": "Q44272",
    "label": "Michel Foucault",
    "x": 635,
    "y": 40,
    "displayLabel": false
  },
  {
    "id": "Q44845",
    "label": "Peter Sloterdijk",
    "x": 1155,
    "y": 287,
    "displayLabel": false
  },
  {
    "id": "Q47154",
    "label": "Lucretius",
    "x": 320,
    "y": 264,
    "displayLabel": false
  },
  {
    "id": "Q48226",
    "label": "Ralph Waldo Emerson",
    "x": 492,
    "y": 199,
    "displayLabel": false
  },
  {
    "id": "Q48301",
    "label": "Martin Heidegger",
    "x": 719,
    "y": 163,
    "displayLabel": false
  },
  {
    "id": "Q50020",
    "label": "John Stuart Mill",
    "x": 765,
    "y": 71,
    "displayLabel": false
  },
  {
    "id": "Q13575",
    "label": "François Quesnay",
    "x": 665,
    "y": 85,
    "displayLabel": false
  },
  {
    "id": "Q15948",
    "label": "Émile Durkheim",
    "x": 180,
    "y": 217,
    "displayLabel": false
  },
  {
    "id": "Q15975",
    "label": "Montesquieu",
    "x": 829,
    "y": 37,
    "displayLabel": false
  },
  {
    "id": "Q22670",
    "label": "Friedrich Schiller",
    "x": 675,
    "y": 172,
    "displayLabel": false
  },
  {
    "id": "Q27645",
    "label": "Mikhail Bakunin",
    "x": 242,
    "y": 56,
    "displayLabel": false
  },
  {
    "id": "Q33760",
    "label": "Bertrand Russell",
    "x": 785,
    "y": 293,
    "displayLabel": false
  },
  {
    "id": "Q34628",
    "label": "Gotthold Ephraim Lessing",
    "x": 154,
    "y": 185,
    "displayLabel": false
  },
  {
    "id": "Q4604",
    "label": "Confucius",
    "x": 606,
    "y": 15,
    "displayLabel": false
  },
  {
    "id": "Q5264",
    "label": "Hippocrates",
    "x": 149,
    "y": 201,
    "displayLabel": false
  },
  {
    "id": "Q5749",
    "label": "Pierre-Joseph Proudhon",
    "x": 565,
    "y": 198,
    "displayLabel": false
  },
  {
    "id": "Q5752",
    "label": "Peter Kropotkin",
    "x": 1162,
    "y": 37,
    "displayLabel": false
  },
  {
    "id": "Q5879",
    "label": "Johann Wolfgang von Goethe",
    "x": 139,
    "y": 17,
    "displayLabel": false
  },
  {
    "id": "Q6512",
    "label": "Søren Kierkegaard",
    "x": 813,
    "y": 179,
    "displayLabel": false
  },
  {
    "id": "Q6527",
    "label": "Jean-Jacques Rousseau",
    "x": 763,
    "y": 293,
    "displayLabel": false
  },
  {
    "id": "Q7060",
    "label": "Michel Onfray",
    "x": 21,
    "y": 283,
    "displayLabel": false
  },
  {
    "id": "Q7197",
    "label": "Simone de Beauvoir",
    "x": 1008,
    "y": 118,
    "displayLabel": false
  },
  {
    "id": "Q7243",
    "label": "Leo Tolstoy",
    "x": 744,
    "y": 270,
    "displayLabel": false
  },
  {
    "id": "Q7286",
    "label": "Émilie du Châtelet",
    "x": 22,
    "y": 41,
    "displayLabel": false
  },
  {
    "id": "Q8011",
    "label": "Avicenna",
    "x": 335,
    "y": 296,
    "displayLabel": false
  },
  {
    "id": "Q8018",
    "label": "Augustine of Hippo",
    "x": 315,
    "y": 264,
    "displayLabel": false
  },
  {
    "id": "Q8963",
    "label": "Johannes Kepler",
    "x": 623,
    "y": 288,
    "displayLabel": false
  },
  {
    "id": "Q9047",
    "label": "Gottfried Wilhelm Leibniz",
    "x": 710,
    "y": 215,
    "displayLabel": false
  },
  {
    "id": "Q57112",
    "label": "Oswald Spengler",
    "x": 976,
    "y": 29,
    "displayLabel": false
  },
  {
    "id": "Q57186",
    "label": "Samuel von Pufendorf",
    "x": 314,
    "y": 138,
    "displayLabel": false
  },
  {
    "id": "Q57193",
    "label": "Moritz Schlick",
    "x": 1115,
    "y": 260,
    "displayLabel": false
  },
  {
    "id": "Q57196",
    "label": "Franz Brentano",
    "x": 216,
    "y": 295,
    "displayLabel": false
  },
  {
    "id": "Q57255",
    "label": "Hans Jonas",
    "x": 949,
    "y": 193,
    "displayLabel": false
  },
  {
    "id": "Q57497",
    "label": "Carl Stumpf",
    "x": 786,
    "y": 297,
    "displayLabel": false
  },
  {
    "id": "Q57554",
    "label": "Georg Christoph Lichtenberg",
    "x": 920,
    "y": 81,
    "displayLabel": false
  },
  {
    "id": "Q58586",
    "label": "Edmund Husserl",
    "x": 395,
    "y": 104,
    "displayLabel": false
  },
  {
    "id": "Q58853",
    "label": "Karl-Otto Apel",
    "x": 662,
    "y": 80,
    "displayLabel": false
  },
  {
    "id": "Q60025",
    "label": "Hannah Arendt",
    "x": 317,
    "y": 187,
    "displayLabel": false
  },
  {
    "id": "Q60028",
    "label": "Gottlob Frege",
    "x": 656,
    "y": 119,
    "displayLabel": false
  },
  {
    "id": "Q60059",
    "label": "Albertus Magnus",
    "x": 1119,
    "y": 128,
    "displayLabel": false
  },
  {
    "id": "Q60070",
    "label": "Friedrich Wilhelm Joseph Schelling",
    "x": 983,
    "y": 274,
    "displayLabel": false
  },
  {
    "id": "Q60080",
    "label": "Wilhelm Dilthey",
    "x": 1130,
    "y": 76,
    "displayLabel": false
  },
  {
    "id": "Q60104",
    "label": "Paul Tillich",
    "x": 978,
    "y": 88,
    "displayLabel": false
  },
  {
    "id": "Q60735",
    "label": "Axel Honneth",
    "x": 242,
    "y": 232,
    "displayLabel": false
  },
  {
    "id": "Q61078",
    "label": "Walter Benjamin",
    "x": 49,
    "y": 82,
    "displayLabel": false
  },
  {
    "id": "Q61271",
    "label": "Reinhart Koselleck",
    "x": 386,
    "y": 111,
    "displayLabel": false
  },
  {
    "id": "Q61674",
    "label": "Friedrich Albert Lange",
    "x": 94,
    "y": 88,
    "displayLabel": false
  },
  {
    "id": "Q62596",
    "label": "Paul Rée",
    "x": 525,
    "y": 187,
    "displayLabel": false
  },
  {
    "id": "Q62977",
    "label": "Walter Kaufmann",
    "x": 323,
    "y": 279,
    "displayLabel": false
  },
  {
    "id": "Q63081",
    "label": "Johannes Nikolaus Tetens",
    "x": 128,
    "y": 257,
    "displayLabel": false
  },
  {
    "id": "Q64406",
    "label": "Henrik Steffens",
    "x": 88,
    "y": 142,
    "displayLabel": false
  },
  {
    "id": "Q34670",
    "label": "Albert Camus",
    "x": 15,
    "y": 116,
    "displayLabel": false
  },
  {
    "id": "Q34787",
    "label": "Friedrich Engels",
    "x": 265,
    "y": 120,
    "displayLabel": false
  },
  {
    "id": "Q34943",
    "label": "Ptolemy",
    "x": 202,
    "y": 99,
    "displayLabel": false
  },
  {
    "id": "Q35802",
    "label": "Benedictus de Spinoza",
    "x": 1022,
    "y": 22,
    "displayLabel": false
  },
  {
    "id": "Q35900",
    "label": "Omar Khayyám",
    "x": 436,
    "y": 203,
    "displayLabel": false
  },
  {
    "id": "Q36303",
    "label": "Thales",
    "x": 343,
    "y": 15,
    "displayLabel": false
  },
  {
    "id": "Q36330",
    "label": "Giordano Bruno",
    "x": 557,
    "y": 214,
    "displayLabel": false
  },
  {
    "id": "Q37160",
    "label": "David Hume",
    "x": 595,
    "y": 138,
    "displayLabel": false
  },
  {
    "id": "Q37388",
    "label": "Francis Bacon",
    "x": 151,
    "y": 172,
    "displayLabel": false
  },
  {
    "id": "Q37621",
    "label": "Thomas Hobbes",
    "x": 860,
    "y": 232,
    "displayLabel": false
  },
  {
    "id": "Q38193",
    "label": "Arthur Schopenhauer",
    "x": 513,
    "y": 119,
    "displayLabel": false
  },
  {
    "id": "Q38873",
    "label": "Lou Andreas-Salomé",
    "x": 1121,
    "y": 52,
    "displayLabel": false
  },
  {
    "id": "Q39837",
    "label": "Averroes",
    "x": 405,
    "y": 116,
    "displayLabel": false
  },
  {
    "id": "Q41155",
    "label": "Heraclitus",
    "x": 951,
    "y": 231,
    "displayLabel": false
  },
  {
    "id": "Q41513",
    "label": "William Blake",
    "x": 77,
    "y": 131,
    "displayLabel": false
  },
  {
    "id": "Q41568",
    "label": "Michel de Montaigne",
    "x": 76,
    "y": 268,
    "displayLabel": false
  },
  {
    "id": "Q41585",
    "label": "David Hilbert",
    "x": 960,
    "y": 105,
    "displayLabel": false
  },
  {
    "id": "Q41980",
    "label": "Democritus",
    "x": 454,
    "y": 96,
    "displayLabel": false
  },
  {
    "id": "Q42156",
    "label": "Henri Bergson",
    "x": 572,
    "y": 231,
    "displayLabel": false
  },
  {
    "id": "Q9358",
    "label": "Friedrich Nietzsche",
    "x": 868,
    "y": 107,
    "displayLabel": false
  },
  {
    "id": "Q9364",
    "label": "Jean-Paul Sartre",
    "x": 928,
    "y": 193,
    "displayLabel": false
  },
  {
    "id": "Q9381",
    "label": "Adam Smith",
    "x": 249,
    "y": 272,
    "displayLabel": false
  },
  {
    "id": "Q9391",
    "label": "Ludwig Wittgenstein",
    "x": 1077,
    "y": 270,
    "displayLabel": false
  },
  {
    "id": "Q9438",
    "label": "Thomas Aquinas",
    "x": 690,
    "y": 219,
    "displayLabel": false
  },
  {
    "id": "Q9441",
    "label": "Gautama Buddha",
    "x": 879,
    "y": 155,
    "displayLabel": false
  },
  {
    "id": "Q9546",
    "label": "Al-Ghazali",
    "x": 39,
    "y": 64,
    "displayLabel": false
  },
  {
    "id": "Q9554",
    "label": "Martin Luther",
    "x": 888,
    "y": 39,
    "displayLabel": false
  },
  {
    "id": "Q10261",
    "label": "Pythagoras",
    "x": 220,
    "y": 178,
    "displayLabel": false
  },
  {
    "id": "Q11104",
    "label": "Ibn al-Haytham",
    "x": 827,
    "y": 248,
    "displayLabel": false
  },
  {
    "id": "Q11826",
    "label": "Al-Biruni",
    "x": 887,
    "y": 228,
    "displayLabel": false
  },
  {
    "id": "Q11903",
    "label": "Hypatia",
    "x": 893,
    "y": 75,
    "displayLabel": false
  },
  {
    "id": "Q12718",
    "label": "Auguste Comte",
    "x": 1047,
    "y": 192,
    "displayLabel": false
  },
  {
    "id": "Q12735",
    "label": "Johann Amos Comenius",
    "x": 41,
    "y": 98,
    "displayLabel": false
  },
  {
    "id": "Q12807",
    "label": "Umberto Eco",
    "x": 149,
    "y": 115,
    "displayLabel": false
  },
  {
    "id": "Q66061",
    "label": "Adolf Reinach",
    "x": 1017,
    "y": 293,
    "displayLabel": false
  },
  {
    "id": "Q67323",
    "label": "Jakob Thomasius",
    "x": 1135,
    "y": 68,
    "displayLabel": false
  },
  {
    "id": "Q71029",
    "label": "Hermann Weyl",
    "x": 365,
    "y": 145,
    "displayLabel": false
  },
  {
    "id": "Q71263",
    "label": "Moritz Geiger",
    "x": 1081,
    "y": 227,
    "displayLabel": false
  },
  {
    "id": "Q9061",
    "label": "Karl Marx",
    "x": 150,
    "y": 210,
    "displayLabel": false
  },
  {
    "id": "Q9068",
    "label": "Voltaire",
    "x": 282,
    "y": 201,
    "displayLabel": false
  },
  {
    "id": "Q9191",
    "label": "René Descartes",
    "x": 386,
    "y": 121,
    "displayLabel": false
  },
  {
    "id": "Q9235",
    "label": "Georg Wilhelm Friedrich Hegel",
    "x": 884,
    "y": 251,
    "displayLabel": false
  },
  {
    "id": "Q9312",
    "label": "Immanuel Kant",
    "x": 1041,
    "y": 176,
    "displayLabel": false
  },
  {
    "id": "Q9353",
    "label": "John Locke",
    "x": 591,
    "y": 258,
    "displayLabel": false
  },
  {
    "id": "Q72074",
    "label": "Oskar Becker",
    "x": 307,
    "y": 259,
    "displayLabel": false
  },
  {
    "id": "Q72107",
    "label": "Alexander Pfänder",
    "x": 210,
    "y": 89,
    "displayLabel": false
  },
  {
    "id": "Q72151",
    "label": "Markus Herz",
    "x": 71,
    "y": 288,
    "displayLabel": false
  }
];

const platoComponentIdList = [
  "Q913",
  "Q41155",
  "Q10261",
  "Q868",
  "Q48226",
  "Q48301",
  "Q7243",
  "Q9047",
  "Q60025",
  "Q35802",
  "Q37621",
  "Q38193",
  "Q42156",
  "Q9358",
  "Q9438",
  "Q11903",
  "Q9068",
  "Q9191",
  "Q9235",
  "Q9312",
  "Q859",
  "Q34787",
  "Q36303",
  "Q43216",
  "Q5264",
  "Q41980",
  "Q448",
  "Q619",
  "Q1067",
  "Q43936",
  "Q6512",
  "Q8011",
  "Q34943",
  "Q39837",
  "Q11104",
  "Q41568",
  "Q58586",
  "Q44272",
  "Q44845",
  "Q57255",
  "Q58853",
  "Q61271",
  "Q9364",
  "Q72074",
  "Q991",
  "Q5749",
  "Q5752",
  "Q6527",
  "Q9441",
  "Q1001",
  "Q1290",
  "Q43939",
  "Q4604",
  "Q8018",
  "Q36330",
  "Q12735",
  "Q67323",
  "Q33760",
  "Q1399",
  "Q15975",
  "Q61078",
  "Q9061",
  "Q47154",
  "Q37388",
  "Q937",
  "Q60070",
  "Q38873",
  "Q9353",
  "Q5879",
  "Q37160",
  "Q9391",
  "Q60028",
  "Q57112",
  "Q57554",
  "Q60104",
  "Q61674",
  "Q62596",
  "Q12718",
  "Q7060",
  "Q62977",
  "Q34670",
  "Q1541",
  "Q60059",
  "Q9546",
  "Q12807",
  "Q935",
  "Q43393",
  "Q27645",
  "Q60080",
  "Q63081",
  "Q22670",
  "Q41585",
  "Q71029",
  "Q72151",
  "Q8963",
  "Q41513",
  "Q34628",
  "Q9554",
  "Q11826",
  "Q35900",
  "Q57196",
  "Q57497",
  "Q66061",
  "Q71263",
  "Q72107",
  "Q7197",
  "Q60735",
  "Q13575",
  "Q50020",
  "Q15948",
  "Q57193",
  "Q64406",
  "Q57186",
  "Q43499",
  "Q7286",
  "Q307",
  "Q9381"
];

const response500 = [
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q185"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Larry Sanger"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q307"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Galileo Galilei"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q448"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Denis Diderot"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q9068,http://www.wikidata.org/entity/Q35802"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q619"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Nicolaus Copernicus"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q11079,http://www.wikidata.org/entity/Q34943,http://www.wikidata.org/entity/Q140188,http://www.wikidata.org/entity/Q302835,http://www.wikidata.org/entity/Q348408,http://www.wikidata.org/entity/Q969370"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q651"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Theodor Vischer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q675"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "André-Marie Ampère"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q762"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Leonardo da Vinci"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q859"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Plato"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q913,http://www.wikidata.org/entity/Q6691,http://www.wikidata.org/entity/Q10261,http://www.wikidata.org/entity/Q41155,http://www.wikidata.org/entity/Q43353,http://www.wikidata.org/entity/Q44233,http://www.wikidata.org/entity/Q125551,http://www.wikidata.org/entity/Q169243,http://www.wikidata.org/entity/Q242517"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q868"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Aristotle"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q913,http://www.wikidata.org/entity/Q5264,http://www.wikidata.org/entity/Q41155,http://www.wikidata.org/entity/Q41980,http://www.wikidata.org/entity/Q42458,http://www.wikidata.org/entity/Q43216,http://www.wikidata.org/entity/Q83375,http://www.wikidata.org/entity/Q125551,http://www.wikidata.org/entity/Q132157"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q913"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Socrates"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q83041"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q935"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Isaac Newton"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9191"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q937"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Albert Einstein"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q935,http://www.wikidata.org/entity/Q991,http://www.wikidata.org/entity/Q1001,http://www.wikidata.org/entity/Q9095,http://www.wikidata.org/entity/Q19185,http://www.wikidata.org/entity/Q25820,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q37160,http://www.wikidata.org/entity/Q38193,http://www.wikidata.org/entity/Q41688,http://www.wikidata.org/entity/Q42299,http://www.wikidata.org/entity/Q57193,http://www.wikidata.org/entity/Q57246,http://www.wikidata.org/entity/Q93996,http://www.wikidata.org/entity/Q200639,http://www.wikidata.org/entity/Q310794,http://www.wikidata.org/entity/Q355245,http://www.wikidata.org/entity/Q7322195"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q989"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "John Paul II"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q991"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Fyodor Dostoyevsky"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q535,http://www.wikidata.org/entity/Q692,http://www.wikidata.org/entity/Q3816,http://www.wikidata.org/entity/Q5682,http://www.wikidata.org/entity/Q5686,http://www.wikidata.org/entity/Q7200,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q9711,http://www.wikidata.org/entity/Q16867,http://www.wikidata.org/entity/Q22670,http://www.wikidata.org/entity/Q43718,http://www.wikidata.org/entity/Q46599,http://www.wikidata.org/entity/Q79822,http://www.wikidata.org/entity/Q150471,http://www.wikidata.org/entity/Q192885,http://www.wikidata.org/entity/Q201221,http://www.wikidata.org/entity/Q282280,http://www.wikidata.org/entity/Q642420"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1001"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Mohandas Karamchand Gandhi"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q7243,http://www.wikidata.org/entity/Q9441,http://www.wikidata.org/entity/Q131149,http://www.wikidata.org/entity/Q179126,http://www.wikidata.org/entity/Q183167"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1067"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Dante Alighieri"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q1398,http://www.wikidata.org/entity/Q6691,http://www.wikidata.org/entity/Q7198,http://www.wikidata.org/entity/Q9438,http://www.wikidata.org/entity/Q34943,http://www.wikidata.org/entity/Q102851"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1290"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Blaise Pascal"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q8018,http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q41568,http://www.wikidata.org/entity/Q183144,http://www.wikidata.org/entity/Q318943"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1325"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Hayek"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1399"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Niccolò Machiavelli"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1401"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Petrarch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1430"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Marcus Aurelius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1541"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Cicero"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q1878"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Michael Schmidt-Salomon"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q2054"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Seneca"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q363375,http://www.wikidata.org/entity/Q780789"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q2161"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Tacitus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q2494"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Benedict XVI"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q42544"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thomas More"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43216"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Epicurus"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q41980,http://www.wikidata.org/entity/Q189506,http://www.wikidata.org/entity/Q192313"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43347"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rumi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43393"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Robert Boyle"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q307,http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q37388,http://www.wikidata.org/entity/Q60095,http://www.wikidata.org/entity/Q251259,http://www.wikidata.org/entity/Q365463"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43499"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Erasmus"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q1541,http://www.wikidata.org/entity/Q179541,http://www.wikidata.org/entity/Q182128"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43654"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Nikolaos of Otranto"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43689"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ambrose"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43746"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Bonaventure"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43927"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "André-Joseph Léonard"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43936"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "William of Ockham"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q9438,http://www.wikidata.org/entity/Q43939"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43939"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Anselm of Canterbury"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q43977"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jan Hus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44011"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gregory of Nazianzus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44040"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Richard David Precht"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44258"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Basil of Caesarea"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44272"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Michel Foucault"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9061,http://www.wikidata.org/entity/Q9215,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q9358,http://www.wikidata.org/entity/Q48301,http://www.wikidata.org/entity/Q128126,http://www.wikidata.org/entity/Q184169,http://www.wikidata.org/entity/Q207359,http://www.wikidata.org/entity/Q270800,http://www.wikidata.org/entity/Q315210,http://www.wikidata.org/entity/Q433741,http://www.wikidata.org/entity/Q444593,http://www.wikidata.org/entity/Q972152,http://www.wikidata.org/entity/Q3170058"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44344"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hilary of Poitiers"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44481"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Pierre-Simon Laplace"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q7604"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44490"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "John Henry Newman"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44601"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Francesco Guicciardini"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44838"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Martin Behaim"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44845"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Peter Sloterdijk"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q48301"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44847"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "D. T. Suzuki"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44872"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Romano Guardini"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q44922"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Judith Sargent Murray"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45013"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Axiothea of Phlius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45113"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Moses Schönfinkel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45125"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kitarō Nishida"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45201"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rainer Woelki"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45321"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Harald Lesch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45325"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans-Josef Becker"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45502"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Anton Stres"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45723"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jacques Maritain"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45838"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kenelm Digby"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q45936"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Strabo"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q46420"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ibn Arabi"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q2719051"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q46633"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Charles Babbage"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q7259"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q46739"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Octavio Paz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q46830"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Robert Hooke"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47154"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Lucretius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47180"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Petronius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47208"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Louis-Claude de Saint-Martin"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q77017,http://www.wikidata.org/entity/Q926616"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47434"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Edmund Halley"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47478"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Swami Vivekananda"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47667"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hu Shih"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q131805"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47695"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rudolf Christoph Eucken"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47737"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kahlil Gibran"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q47739"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Zhuangzi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q48226"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ralph Waldo Emerson"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q6240,http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q41568,http://www.wikidata.org/entity/Q185832"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q48246"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ernst Haeckel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q48301"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Martin Heidegger"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q6512,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q9358,http://www.wikidata.org/entity/Q9438,http://www.wikidata.org/entity/Q41155,http://www.wikidata.org/entity/Q42458,http://www.wikidata.org/entity/Q58586,http://www.wikidata.org/entity/Q125551,http://www.wikidata.org/entity/Q190089"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q48779"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ukshin Hoti"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q49074"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kurt Vonnegut"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q3335"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q49325"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Albert Schweitzer"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q706888"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q49747"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Maurice Maeterlinck"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q50020"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "John Stuart Mill"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q51884"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "John of Damascus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q53619"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rambhadracharya"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q54828"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ivan Yefremov"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q55704"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kedar Joshi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q55963"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "František Lorenz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q13021"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Vinoba Bhave"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q13515"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Frédéric Bastiat"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q13529"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Alfred Marshall"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q11031,http://www.wikidata.org/entity/Q13509,http://www.wikidata.org/entity/Q312546,http://www.wikidata.org/entity/Q433076,http://www.wikidata.org/entity/Q1353362"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q13575"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "François Quesnay"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q4604"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q14678"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Dietrich von Hildebrand"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q15031"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Xi Jinping"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q15189"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul I of Russia"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q15474"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Sir William Hamilton, 9th Baronet"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q15572"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Baptist von Spix"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q15948"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Émile Durkheim"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q12718,http://www.wikidata.org/entity/Q15975,http://www.wikidata.org/entity/Q144535,http://www.wikidata.org/entity/Q316674"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q15953"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Fritz Mauthner"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q15969"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jean Améry"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q15975"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Montesquieu"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q16381"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Virchand Gandhi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q16382"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Shrimad Rajchandra"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q16397"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Bruce Lee"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q18391"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Elie Wiesel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q18436"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Émile Boirac"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q18809"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Anatoly Lunacharsky"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q18999"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Junius Rusticus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q19008"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Arthur Balfour"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q19074"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Samuel P. Huntington"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q19796"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Cai Yuanpei"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q20724"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Louis Couturat"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q21163"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ferdinand Tönnies"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q22530"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Auguste Forel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q22670"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Schiller"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q5879,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q112258,http://www.wikidata.org/entity/Q170800"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q23431"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "C. Anthony Anderson"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q23437"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "William Hirstein"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q23446"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Quentin Smith"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q23450"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kit Fine"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q23870"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Otto Jespersen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q24085"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Petrus Cunaeus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q24652"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Joseph Gredt"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q25070"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Henry of Latvia"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q25120"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Pier Paolo Pasolini"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q25973"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hermann Hesse"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q41630,http://www.wikidata.org/entity/Q193664,http://www.wikidata.org/entity/Q19523829"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q25997"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Innokenty Annensky"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q26168"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Anton LaVey"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q26648"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "John Argyropoulos"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q26714"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul Deussen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q27645"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Mikhail Bakunin"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q991,http://www.wikidata.org/entity/Q5749,http://www.wikidata.org/entity/Q6527,http://www.wikidata.org/entity/Q9061,http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q76422,http://www.wikidata.org/entity/Q150471,http://www.wikidata.org/entity/Q201221,http://www.wikidata.org/entity/Q374362"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q27684"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Peter Forsskål"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q27718"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Walter Block"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q27913"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Paulsen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q28106"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Yuxiong"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q28761"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Alfred of Sareshel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q28918"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Luce Irigaray"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q28959"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Han Fei Zi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q29049"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kanada"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q29438"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hervaeus Natalis"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q31267"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Susanne von Klettenberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q31439"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Abraham bar Hiyya"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q11079"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q31754"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Huang Zongxi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q31765"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Fan Zhen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q31814"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Léon Denis"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q31845"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Arrian"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q32679"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ralph Barton Perry"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q33391"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Leon Trotsky"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q33760"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Bertrand Russell"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q8747,http://www.wikidata.org/entity/Q9047,http://www.wikidata.org/entity/Q9391,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q37160,http://www.wikidata.org/entity/Q50020,http://www.wikidata.org/entity/Q60028,http://www.wikidata.org/entity/Q76420,http://www.wikidata.org/entity/Q78600,http://www.wikidata.org/entity/Q93343,http://www.wikidata.org/entity/Q93996,http://www.wikidata.org/entity/Q134661,http://www.wikidata.org/entity/Q183372,http://www.wikidata.org/entity/Q191029,http://www.wikidata.org/entity/Q208448,http://www.wikidata.org/entity/Q237833,http://www.wikidata.org/entity/Q295386,http://www.wikidata.org/entity/Q778109"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q33941"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Julian"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q34601"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Chilon of Sparta"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q34628"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gotthold Ephraim Lessing"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q3048"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Charles Maurras"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q4295"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Peter Abelard"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q4313"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Alain de Lille"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q4340"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Andreas Capellanus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q4604"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Confucius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5264"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hippocrates"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5354"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ernst Mayr"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5371"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thibaud d'Étampes"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5585"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Giovanni Giocondo"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5656"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Héloïse d’Argenteuil"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5683"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Geoffrey Chaucer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5749"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Pierre-Joseph Proudhon"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q1541,http://www.wikidata.org/entity/Q6527,http://www.wikidata.org/entity/Q9061,http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q82934,http://www.wikidata.org/entity/Q154959,http://www.wikidata.org/entity/Q434346"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5752"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Peter Kropotkin"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5816"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Mao Zedong"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q5879"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Wolfgang von Goethe"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q6197"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Horace"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q6353"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gerardus Mercator"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q6512"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Søren Kierkegaard"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q8018,http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q9554,http://www.wikidata.org/entity/Q34628,http://www.wikidata.org/entity/Q60070,http://www.wikidata.org/entity/Q76499"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q6527"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jean-Jacques Rousseau"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q6530"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Stanisław Lem"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7060"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Michel Onfray"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9358,http://www.wikidata.org/entity/Q34670,http://www.wikidata.org/entity/Q36268,http://www.wikidata.org/entity/Q184226,http://www.wikidata.org/entity/Q189506,http://www.wikidata.org/entity/Q972152"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7068"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Julien Offray de La Mettrie"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7103"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Sophie Germain"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7104"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Baron d'Holbach"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7197"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Simone de Beauvoir"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9364"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7231"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rosa Luxemburg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7241"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rabindranath Tagore"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7243"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Leo Tolstoy"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q502,http://www.wikidata.org/entity/Q535,http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q991,http://www.wikidata.org/entity/Q5686,http://www.wikidata.org/entity/Q5749,http://www.wikidata.org/entity/Q5752,http://www.wikidata.org/entity/Q6527,http://www.wikidata.org/entity/Q7200,http://www.wikidata.org/entity/Q9441,http://www.wikidata.org/entity/Q38193,http://www.wikidata.org/entity/Q43718,http://www.wikidata.org/entity/Q102513,http://www.wikidata.org/entity/Q131149,http://www.wikidata.org/entity/Q131333,http://www.wikidata.org/entity/Q218960,http://www.wikidata.org/entity/Q355245,http://www.wikidata.org/entity/Q385790,http://www.wikidata.org/entity/Q713261"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7286"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Émilie du Châtelet"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q935"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q7460"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Cleopatra the Alchemist"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q8011"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Avicenna"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q5264,http://www.wikidata.org/entity/Q8778,http://www.wikidata.org/entity/Q9458,http://www.wikidata.org/entity/Q11826,http://www.wikidata.org/entity/Q134189,http://www.wikidata.org/entity/Q160460,http://www.wikidata.org/entity/Q169234,http://www.wikidata.org/entity/Q179759,http://www.wikidata.org/entity/Q335516,http://www.wikidata.org/entity/Q470914,http://www.wikidata.org/entity/Q3478100"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q8018"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Augustine of Hippo"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q8573"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Sun Yat-sen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q8739"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Archimedes"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q8963"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johannes Kepler"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q619"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9038"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Al-Khwarizmi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9045"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Chanakya"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9047"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gottfried Wilhelm Leibniz"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q1290,http://www.wikidata.org/entity/Q4604,http://www.wikidata.org/entity/Q8018,http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q9438,http://www.wikidata.org/entity/Q11903,http://www.wikidata.org/entity/Q12735,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q36330,http://www.wikidata.org/entity/Q37621,http://www.wikidata.org/entity/Q39599,http://www.wikidata.org/entity/Q43939,http://www.wikidata.org/entity/Q67323,http://www.wikidata.org/entity/Q73014,http://www.wikidata.org/entity/Q122392,http://www.wikidata.org/entity/Q127398,http://www.wikidata.org/entity/Q134189,http://www.wikidata.org/entity/Q151722,http://www.wikidata.org/entity/Q154751,http://www.wikidata.org/entity/Q182128,http://www.wikidata.org/entity/Q190089,http://www.wikidata.org/entity/Q192315,http://www.wikidata.org/entity/Q193660,http://www.wikidata.org/entity/Q251259,http://www.wikidata.org/entity/Q294100,http://www.wikidata.org/entity/Q309818,http://www.wikidata.org/entity/Q316339"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57069"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Günter Ralfs"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57087"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Adrian VI"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57095"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Emanuel Lasker"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57112"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Oswald Spengler"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q5879"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57186"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Samuel von Pufendorf"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57188"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ernst Cassirer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57193"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Moritz Schlick"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57196"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Franz Brentano"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57219"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "David Strauss"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57238"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Niklas Luhmann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57240"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ernst Bloch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57248"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Enzo Zermelo"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57255"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans Jonas"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q48301,http://www.wikidata.org/entity/Q58586,http://www.wikidata.org/entity/Q76327"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57281"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "August Wilhelm Schlegel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57314"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Robert Michels"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57497"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Carl Stumpf"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q184735"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57501"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Christian Thomasius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57554"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Georg Christoph Lichtenberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57633"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "László Katus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57684"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hermann Lotze"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57737"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Houston Stewart Chamberlain"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57940"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Franz Oppenheimer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q57946"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hugo Münsterberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q58104"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Antonio Patriota"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q58191"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Vesna Pusić"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q58586"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Edmund Husserl"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q57196,http://www.wikidata.org/entity/Q57497,http://www.wikidata.org/entity/Q60028,http://www.wikidata.org/entity/Q184735"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q58720"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Mikhail Vassilyevich Lomonosov"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q76510"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q58853"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl-Otto Apel"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9391,http://www.wikidata.org/entity/Q48301,http://www.wikidata.org/entity/Q76357,http://www.wikidata.org/entity/Q187520"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q59137"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Diogenes of Oenoanda"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q59138"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Diogenes Laërtius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q59180"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Diogenes of Sinope"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q59188"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Lionel Giles"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q59874"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Richard Carrier"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q59945"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jacob Burckhardt"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60024"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hermann von Helmholtz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60025"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hannah Arendt"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q302,http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q905,http://www.wikidata.org/entity/Q913,http://www.wikidata.org/entity/Q1399,http://www.wikidata.org/entity/Q6512,http://www.wikidata.org/entity/Q8018,http://www.wikidata.org/entity/Q9061,http://www.wikidata.org/entity/Q9200,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q15975,http://www.wikidata.org/entity/Q48301,http://www.wikidata.org/entity/Q57255,http://www.wikidata.org/entity/Q58586,http://www.wikidata.org/entity/Q61078,http://www.wikidata.org/entity/Q76509,http://www.wikidata.org/entity/Q77148,http://www.wikidata.org/entity/Q140694,http://www.wikidata.org/entity/Q165792,http://www.wikidata.org/entity/Q183167,http://www.wikidata.org/entity/Q190089"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60028"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gottlob Frege"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q184735"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60030"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Herbert Marcuse"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60059"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Albertus Magnus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60070"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Wilhelm Joseph Schelling"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q102585"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60080"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Wilhelm Dilthey"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q50020,http://www.wikidata.org/entity/Q76576"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60091"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Josef Ludvik Fischer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60104"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul Tillich"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60137"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Eckhart Tolle"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60208"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl Korsch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60217"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Gustav Droysen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60247"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Bernhard Basedow"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60285"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ernst Troeltsch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60351"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Sebastian Brant"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60389"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johannes Althusius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60412"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thomas Luckmann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60502"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gerhard Gentzen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60582"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thomas Abbt"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60584"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Christian Fürchtegott Gellert"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60625"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Conrad Celtes"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60641"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Madhukar"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60684"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Novalis"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60690"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hermann Graf Keyserling"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60698"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ludwig Klages"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60735"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Axel Honneth"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9364"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60785"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ricarda Huch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60837"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "John Austin"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60884"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Günther Anders"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q60972"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Joseph Dietzgen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61037"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Wilhelm Ackermann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61044"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Albertus de Saxonia"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61067"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Reuchlin"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61078"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Walter Benjamin"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q501,http://www.wikidata.org/entity/Q5879,http://www.wikidata.org/entity/Q9061,http://www.wikidata.org/entity/Q38757,http://www.wikidata.org/entity/Q151523"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61147"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Carl Reichenbach"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61151"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Eduard Spranger"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61163"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Josef Pieper"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61171"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Erich Neumann"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9215"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61189"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans Blumenberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61190"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Oswald Külpe"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61255"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kuno Fischer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61262"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans Robert Jauss"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61271"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Reinhart Koselleck"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q48301"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61280"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Adolf Trendelenburg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61310"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul de Lagarde"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61369"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gabriel Biel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61374"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Wolfhart Pannenberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61389"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Elisabeth of the Palatinate"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61446"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Theodor Lessing"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61453"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kurd Lasswitz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61485"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Conrad Dippel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61558"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Arnold Ruge"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61628"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Eugen Fink"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61652"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Otto von Gierke"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61674"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Albert Lange"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61885"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Carl Gustav Hempel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61894"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Albert Fabricius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61915"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rüdiger Safranski"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61929"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul Johann Anselm Ritter von Feuerbach"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61954"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Georg Jellinek"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61970"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Theodor Lipps"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61980"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Abd-ru-shin"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q61987"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Carl Gustav Carus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62221"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl Ludwig Michelet"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62239"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Oskar Negt"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62304"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Carl Dahlhaus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62309"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans Albert"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62315"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl Rosenkranz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62373"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Max Bense"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62596"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul Rée"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62664"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Robert von Mohl"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62749"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hermann Heller"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62830"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Lujo Brentano"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62831"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ludwig Büchner"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62852"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ted Nelson"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q299595"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q62977"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Walter Kaufmann"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q6512,http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q9358"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63081"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johannes Nikolaus Tetens"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63173"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Albrecht Ritschl"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63176"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Adam Müller"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63195"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Franz Leopold Neumann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63338"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Robert Spaemann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63340"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Christian August Crusius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63351"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Salomo Semler"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63369"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl Gotthard Lamprecht"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63408"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Arthur Drews"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63484"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Christian Knorr von Rosenroth"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63500"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Franz Buddeus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63630"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Odo Marquard"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63777"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Beringer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q63895"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul Oskar Kristeller"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q64137"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Caspar Schwenckfeld"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q64272"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rudolph Goclenius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q64274"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul Kirchhoff"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q64406"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Henrik Steffens"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q60070"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q34670"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Albert Camus"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q6512,http://www.wikidata.org/entity/Q9358,http://www.wikidata.org/entity/Q134189,http://www.wikidata.org/entity/Q151164"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q34787"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Engels"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9061,http://www.wikidata.org/entity/Q41155,http://www.wikidata.org/entity/Q76422,http://www.wikidata.org/entity/Q1170769"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q34943"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ptolemy"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q35802"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Benedictus de Spinoza"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q1399,http://www.wikidata.org/entity/Q8011,http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q36330,http://www.wikidata.org/entity/Q37388,http://www.wikidata.org/entity/Q37621,http://www.wikidata.org/entity/Q39837,http://www.wikidata.org/entity/Q41980,http://www.wikidata.org/entity/Q43216,http://www.wikidata.org/entity/Q47154,http://www.wikidata.org/entity/Q125551,http://www.wikidata.org/entity/Q127398,http://www.wikidata.org/entity/Q131671,http://www.wikidata.org/entity/Q251259,http://www.wikidata.org/entity/Q309818,http://www.wikidata.org/entity/Q528415"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q35900"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Omar Khayyám"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q8011"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q36303"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thales"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q36330"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Giordano Bruno"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q619,http://www.wikidata.org/entity/Q39837,http://www.wikidata.org/entity/Q154751"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q37151"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Sun Tzu"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q37160"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "David Hume"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9353,http://www.wikidata.org/entity/Q82049"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q37217"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Fyodor Tyutchev"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q37388"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Francis Bacon"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q37621"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thomas Hobbes"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q37388,http://www.wikidata.org/entity/Q154959"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q38082"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Lewis Carroll"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q38193"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Arthur Schopenhauer"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q5879,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q9353,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q37160"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q38873"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Lou Andreas-Salomé"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9215,http://www.wikidata.org/entity/Q9358,http://www.wikidata.org/entity/Q35802"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q39309"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Xu Liangying"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q39658"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Carl Peter Thunberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q39837"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Averroes"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41155"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Heraclitus"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q131671,http://www.wikidata.org/entity/Q298860"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41166"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jonathan Swift"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41239"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Konstantin Eduardovich Tsiolkovskii"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q33977"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41257"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Heinrich Rudolf Hertz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41322"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Edward de Bono"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41390"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kurt Gödel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41476"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans Driesch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41488"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Wole Soyinka"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41513"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "William Blake"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q1067,http://www.wikidata.org/entity/Q77017,http://www.wikidata.org/entity/Q79759,http://www.wikidata.org/entity/Q101638,http://www.wikidata.org/entity/Q122382,http://www.wikidata.org/entity/Q185832,http://www.wikidata.org/entity/Q193857,http://www.wikidata.org/entity/Q215305,http://www.wikidata.org/entity/Q1042892,http://www.wikidata.org/entity/Q8016608"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41523"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Plutarch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41568"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Michel de Montaigne"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41585"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "David Hilbert"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9312"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41590"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Mircea Eliade"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9711,http://www.wikidata.org/entity/Q1380594"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41973"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ulrik Huber"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q41980"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Democritus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q42063"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Xuanzang"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q42156"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Henri Bergson"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q937,http://www.wikidata.org/entity/Q1035,http://www.wikidata.org/entity/Q1290,http://www.wikidata.org/entity/Q6512,http://www.wikidata.org/entity/Q9047,http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q37160,http://www.wikidata.org/entity/Q38193,http://www.wikidata.org/entity/Q60028,http://www.wikidata.org/entity/Q76849,http://www.wikidata.org/entity/Q82049,http://www.wikidata.org/entity/Q132157,http://www.wikidata.org/entity/Q134189,http://www.wikidata.org/entity/Q144535,http://www.wikidata.org/entity/Q208230,http://www.wikidata.org/entity/Q1479519,http://www.wikidata.org/entity/Q2303850"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9358"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Nietzsche"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q12718,http://www.wikidata.org/entity/Q13894,http://www.wikidata.org/entity/Q16867,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q35811,http://www.wikidata.org/entity/Q38193,http://www.wikidata.org/entity/Q38873,http://www.wikidata.org/entity/Q40213,http://www.wikidata.org/entity/Q40939,http://www.wikidata.org/entity/Q41155,http://www.wikidata.org/entity/Q41568,http://www.wikidata.org/entity/Q41680,http://www.wikidata.org/entity/Q41980,http://www.wikidata.org/entity/Q43216,http://www.wikidata.org/entity/Q44403,http://www.wikidata.org/entity/Q48226,http://www.wikidata.org/entity/Q57112,http://www.wikidata.org/entity/Q57187,http://www.wikidata.org/entity/Q57280,http://www.wikidata.org/entity/Q57554,http://www.wikidata.org/entity/Q60104,http://www.wikidata.org/entity/Q61674,http://www.wikidata.org/entity/Q62596,http://www.wikidata.org/entity/Q64632,http://www.wikidata.org/entity/Q75889,http://www.wikidata.org/entity/Q76521,http://www.wikidata.org/entity/Q76725,http://www.wikidata.org/entity/Q77127,http://www.wikidata.org/entity/Q78491,http://www.wikidata.org/entity/Q79822,http://www.wikidata.org/entity/Q83375,http://www.wikidata.org/entity/Q125551,http://www.wikidata.org/entity/Q168542,http://www.wikidata.org/entity/Q169243,http://www.wikidata.org/entity/Q172599,http://www.wikidata.org/entity/Q178744,http://www.wikidata.org/entity/Q198644,http://www.wikidata.org/entity/Q236594,http://www.wikidata.org/entity/Q273708,http://www.wikidata.org/entity/Q297726,http://www.wikidata.org/entity/Q310757,http://www.wikidata.org/entity/Q314189,http://www.wikidata.org/entity/Q336115,http://www.wikidata.org/entity/Q360512,http://www.wikidata.org/entity/Q379912,http://www.wikidata.org/entity/Q385790,http://www.wikidata.org/entity/Q707490,http://www.wikidata.org/entity/Q999259,http://www.wikidata.org/entity/Q502,http://www.wikidata.org/entity/Q692,http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q913,http://www.wikidata.org/entity/Q991,http://www.wikidata.org/entity/Q1035,http://www.wikidata.org/entity/Q1048,http://www.wikidata.org/entity/Q1290,http://www.wikidata.org/entity/Q1399,http://www.wikidata.org/entity/Q1511,http://www.wikidata.org/entity/Q5879,http://www.wikidata.org/entity/Q6527,http://www.wikidata.org/entity/Q6691,http://www.wikidata.org/entity/Q8409,http://www.wikidata.org/entity/Q9047,http://www.wikidata.org/entity/Q9068,http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q9312"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9364"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jean-Paul Sartre"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9061,http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q48301,http://www.wikidata.org/entity/Q151820,http://www.wikidata.org/entity/Q153034"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9372"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Sima Qian"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9381"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Adam Smith"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q13575"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9387"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Max Weber"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9391"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ludwig Wittgenstein"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q6512,http://www.wikidata.org/entity/Q33760,http://www.wikidata.org/entity/Q38193,http://www.wikidata.org/entity/Q60028"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9397"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Zhu Xi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9422"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Mahavira"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9429"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rishabhanatha"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9438"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thomas Aquinas"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q1541,http://www.wikidata.org/entity/Q8011,http://www.wikidata.org/entity/Q8018,http://www.wikidata.org/entity/Q9200,http://www.wikidata.org/entity/Q9546,http://www.wikidata.org/entity/Q39837,http://www.wikidata.org/entity/Q43939,http://www.wikidata.org/entity/Q60059,http://www.wikidata.org/entity/Q102851,http://www.wikidata.org/entity/Q127398,http://www.wikidata.org/entity/Q179759,http://www.wikidata.org/entity/Q184500"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9441"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gautama Buddha"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q1227131"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9546"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Al-Ghazali"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9554"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Martin Luther"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q10261"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Pythagoras"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q35811,http://www.wikidata.org/entity/Q36303,http://www.wikidata.org/entity/Q42458,http://www.wikidata.org/entity/Q311485"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q11031"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Vilfredo Pareto"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q11104"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ibn al-Haytham"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q868"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q11362"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ibn Bajjah"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q11373"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Abu Ma'shar al-Balkhi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q11730"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Otto Bauer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q11826"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Al-Biruni"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q11903"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hypatia"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q34943,http://www.wikidata.org/entity/Q134189,http://www.wikidata.org/entity/Q178217,http://www.wikidata.org/entity/Q354384"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q12658"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Wilhelm Ostwald"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q12718"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Auguste Comte"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q316674"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q12735"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Amos Comenius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q12807"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Umberto Eco"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q909,http://www.wikidata.org/entity/Q6882,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q9438,http://www.wikidata.org/entity/Q35610,http://www.wikidata.org/entity/Q187520"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65157"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Robert Kurz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65181"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Leonard Nelson"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65210"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Lorenz Christoph Mizler"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65260"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Lorenz von Mosheim"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65350"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Carl Friedrich von Weizsäcker"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65409"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Gottlieb Heineccius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65697"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Alfred Baeumler"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65786"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Philip Marheineke"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65806"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ernst Laas"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65861"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Erich Adickes"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q65987"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Dieter Henrich"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66023"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Wilhelm Foerster"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66061"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Adolf Reinach"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q58586"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66147"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Meinecke"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66288"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rudolf Bahro"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66292"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Salomon Munk"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66316"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Bassam Tibi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66625"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Martin Gerbert"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66701"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Karl Forberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66704"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gotthilf Heinrich von Schubert"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66732"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Eugen Rosenstock-Huessy"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66820"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thomas Pogge"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66853"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Manegold of Lautenbach"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q66880"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rudolf Haym"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67007"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Thomas Metzinger"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67076"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ludwig Geiger"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67131"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Moritz Wilhelm Drobisch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67136"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Bartholomäus Keckermann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67144"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Stefan Klein"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67149"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Karl Simon Morgenstern"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67258"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Heinrich Abicht"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67274"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl von Eckartshausen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67299"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Edgar Bauer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67306"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Otto Friedrich Bollnow"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67323"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jakob Thomasius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67337"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hedwig Conrad-Martius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67405"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Georg Jünger"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67537"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Hielscher"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67570"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Emil Fackenheim"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67698"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gerhart M Riegner"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67802"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Werner Hamacher"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67863"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Walther Kranz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q67895"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl Joel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68133"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann David Michaelis"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68147"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Gotthard Günther"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68381"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Dietrich Tiedemann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68446"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ernst Tugendhat"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68550"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Grete Hermann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68618"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Blume"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68645"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Eduard Gans"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68710"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Heinrich Paulus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68824"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Julius Langbehn"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68837"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Albert Schwegler"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68860"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Boris Groys"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68968"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hermann Friedmann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q68987"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Heinrich Landesmann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q69019"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jakob Bernays"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q69142"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Carl Göring"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q69536"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Adam Karl August von Eschenmayer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q69634"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Arthur Kronfeld"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q69794"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Theodor Ziehen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q69796"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Heinrich Ahrens"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70053"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Konrad Mutian"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70113"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans Blüher"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70200"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Paul Oppenheim"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70394"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Joachim Spalding"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70521"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans Lenk"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70660"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl Wilhelm Ferdinand Solger"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70666"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jakob Sigismund Beck"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70793"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Martin Knutzen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70867"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Kurt Riezler"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70978"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Joseph Kleutgen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70989"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hugo Ball"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q70991"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hildegard of Bingen"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71026"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Joachim Jungius"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71027"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl Abraham"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71029"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hermann Weyl"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q58586"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71105"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Zahn"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71146"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Éric Weil"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71263"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Moritz Geiger"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q58586"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71316"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Jacob Bidermann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71319"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Christian Wilhelm Franz Walch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71338"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Herman Schell"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71406"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Otfried Höffe"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71442"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Jakob Engel"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71587"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Christoph Meiners"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71607"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Vittorio Hösle"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71619"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Wilhelm Homberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71620"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Joachim Ritter"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71696"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Heinrich Blücher"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71704"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Friedrich Immanuel Niethammer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71811"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Bernhard Waldenfels"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71823"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "George Bălan"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q71855"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Georg Bernhard Bilfinger"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72001"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Philipp Blom"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72022"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johann Jakob Brucker"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72044"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Wolfgang Welsch"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72050"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Christoph von Sigwart"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72055"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Albrecht Wellmer"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9049"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Noam Chomsky"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9061"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Karl Marx"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9235,http://www.wikidata.org/entity/Q76422,http://www.wikidata.org/entity/Q76725,http://www.wikidata.org/entity/Q1170769"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9068"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Voltaire"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q692,http://www.wikidata.org/entity/Q742,http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q935,http://www.wikidata.org/entity/Q1290,http://www.wikidata.org/entity/Q1541,http://www.wikidata.org/entity/Q4604,http://www.wikidata.org/entity/Q5682,http://www.wikidata.org/entity/Q9353,http://www.wikidata.org/entity/Q35811,http://www.wikidata.org/entity/Q177847,http://www.wikidata.org/entity/Q214816,http://www.wikidata.org/entity/Q251259,http://www.wikidata.org/entity/Q309818,http://www.wikidata.org/entity/Q332470"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9191"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "René Descartes"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q9438,http://www.wikidata.org/entity/Q43936,http://www.wikidata.org/entity/Q43939,http://www.wikidata.org/entity/Q188663,http://www.wikidata.org/entity/Q316339"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9235"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Georg Wilhelm Friedrich Hegel"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q868,http://www.wikidata.org/entity/Q6527,http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q15975,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q41155,http://www.wikidata.org/entity/Q43939,http://www.wikidata.org/entity/Q60070,http://www.wikidata.org/entity/Q76576,http://www.wikidata.org/entity/Q77017,http://www.wikidata.org/entity/Q102585,http://www.wikidata.org/entity/Q134189,http://www.wikidata.org/entity/Q154751,http://www.wikidata.org/entity/Q271809"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9294"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ibn Khaldun"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9312"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Immanuel Kant"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q859,http://www.wikidata.org/entity/Q935,http://www.wikidata.org/entity/Q6527,http://www.wikidata.org/entity/Q9047,http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q9353,http://www.wikidata.org/entity/Q35802,http://www.wikidata.org/entity/Q37160,http://www.wikidata.org/entity/Q41568,http://www.wikidata.org/entity/Q63081,http://www.wikidata.org/entity/Q76510,http://www.wikidata.org/entity/Q82049,http://www.wikidata.org/entity/Q309818,http://www.wikidata.org/entity/Q316367"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9317"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "John Maynard Keynes"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9333"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Laozi"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q9353"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "John Locke"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9191,http://www.wikidata.org/entity/Q37621,http://www.wikidata.org/entity/Q57186,http://www.wikidata.org/entity/Q154959,http://www.wikidata.org/entity/Q336002,http://www.wikidata.org/entity/Q559213,http://www.wikidata.org/entity/Q707787"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72066"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Herman Nohl"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72068"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Georg Andreas Gabler"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72072"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Johannes Clauberg"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72074"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Oskar Becker"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q48301,http://www.wikidata.org/entity/Q58586"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72080"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hermann Friedrich Wilhelm Hinrichs"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72094"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rudolf Pannwitz"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72100"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Georg Klaus"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72106"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Bruno Bauch"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q61255,http://www.wikidata.org/entity/Q77012,http://www.wikidata.org/entity/Q77045"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72107"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Alexander Pfänder"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q58586"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72127"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Ernst Boepple"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72151"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Markus Herz"
    },
    "inf": {
      "type": "literal",
      "value": "http://www.wikidata.org/entity/Q9312,http://www.wikidata.org/entity/Q76997"
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72306"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Nicolaus Hieronymus Gundling"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72453"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Hans Joas"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72632"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Martin Grabmann"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  },
  {
    "item": {
      "type": "uri",
      "value": "http://www.wikidata.org/entity/Q72645"
    },
    "itemLabel": {
      "xml:lang": "en",
      "type": "literal",
      "value": "Rudolf Schottlaender"
    },
    "inf": {
      "type": "literal",
      "value": ""
    }
  }
];