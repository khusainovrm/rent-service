import vehicles from './vehicles.json';

/** True = 65%, False = 35% */
const rejectByChance = () => {
    return Math.random() <= 0.35;
};

/** Emulate request */
// export default function getVehicles () {
//     return new Promise(r => r(vehicles))
// }


/** Emulate request */
export default function getVehicles () {
    return new Promise((resolve, reject) => {
        if (rejectByChance()) {
            return reject({
                error: 'Server error',
            });
        }
        const delay = parseInt(Math.random() * 1000);
        setTimeout(() => {
            resolve(vehicles);
        }, delay);
    })
}
