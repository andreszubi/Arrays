const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
// pepsi[0] = 40; // Error

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Tuple is not used very often in TS

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};
