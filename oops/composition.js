const swimmer = ({name}) => {
    return {
        swim: () => console.log(`${name} is swimming`)
    };
};
const flyer = ({name}) => {
    return {
        fly: () => console.log(`${name} is flew`)
    };
};

const swimmingFlyerMonsterCreator = (name) => {
    const monster = {name: name};
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    };
}
const monster = swimmingFlyerMonsterCreator("unni");
monster.fly();
monster.swim();