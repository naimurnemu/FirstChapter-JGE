// Class
class MobilePhone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getModel() {
    return this.model;
  }

  getBrand() {
    return this.brand;
  }

  vaberText() {
    return `using ${this.model} of ${this.brand}.`
  }

}

class SmartPhone extends MobilePhone {
  constructor(brand, model, videoCallFeature) {
    super(brand, model);
    this.videoCallFeature = videoCallFeature;
  }
}

let newMobilePhone = new SmartPhone("Nokia", "3310", false);
console.log(newMobilePhone.getBrand());

/* class NotFoundError extends Error {
  constructor(name, ...rest) {
    super(...rest);
    this.name = name;

    if (Error.captureStrackTrace) {
      Error.captureStrackTrace(this, NotFoundError);
    }
  }
  toJSON() {
    let name = this.name;
    let message = this.message;
    let stack = this.stack;
    return { name, message }
  }
}

try {
  throw new NotFoundError("Not Found Error", "This post is not found!")
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log({
      error: 404,
      details: error.toJSON(),
    });
  } else {
    console.log("Ohh nooo");
  } 
} */








// throw new Error ("This is syntax error") // create error.