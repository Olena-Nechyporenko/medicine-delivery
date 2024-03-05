// import { createSelector } from '@reduxjs/toolkit';

export const selectDrugs = state => state.drugs.drugs.items;
export const selectIsLoading = state => state.drugs.drugs.isLoading;
export const selectError = state => state.drugs.drugs.error;
export const selectShops = state => state.drugs.drugs.shops;
// export const selectCarId = state => state.cars.id;
// export const selectBrand = state => state.cars.filter.brand;
// export const selectPrice = state => state.cars.filter.price;
// export const selectFrom = state => state.cars.filter.from;
// export const selectTo = state => state.cars.filter.to;

// export const selectCarById = createSelector(
//   [selectCarId, selectCars],
//   (id, cars) => {
//     return cars.find(car => car.id.toString().includes(id));
//   }
// );
