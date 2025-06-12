// Factuur Klasse
class Factuur {
  constructor(factuurnummer, datum, bedrag, betaald = false) {
    this.factuurnummer = factuurnummer;
    this.datum = new Date(datum);
    this.bedrag = bedrag;
    this.betaald = betaald;
  }

  markeerAlsBetaald() {
    this.betaald = true;
  }

  toString() {
    return `Factuur ${this.factuurnummer}: €${this.bedrag.toFixed(2)} - ${
      this.betaald ? "Betaald" : "Openstaand"
    }`;
  }
}

// Klant Klasse
class Klant {
  constructor(id, naam, email) {
    this.id = id;
    this.naam = naam;
    this.email = email;
    this.facturen = [];
  }

  voegFactuurToe(factuur) {
    if (factuur instanceof Factuur) {
      this.facturen.push(factuur);
    } else {
      throw new Error(
        "Alleen instanties van Factuur kunnen worden toegevoegd."
      );
    }
  }
  printFacturen() {
    console.log(` Facturen voor ${this.naam}  `);
    console.log(
      `${this.facturen.forEach((element) => {
        console.log(`${element} `);
      })}`
    );
    // console.log(this.facturen);
    //     //Facturen voor Jan Jansen:
    //  *      Factuur F2025001: €250.00 - Openstaand
    //     *      Factuur F2025002: €120.00 - Betaald
  }

  getOpenstaandeFacturen() {
    return this.facturen.filter((f) => !f.betaald);
  }

  getTotaalBedragOpenstaand() {
    let TotaalBedrag = 0;
    return this.facturen.forEach((element) => {
      if (element.betaald != true) {
        TotaalBedrag = TotaalBedrag + element.bedrag;
        console.log(element.bedrag);
        console.log(TotaalBedrag);
        return TotaalBedrag;
      }
    });
  }
}

module.exports = { Factuur, Klant };
