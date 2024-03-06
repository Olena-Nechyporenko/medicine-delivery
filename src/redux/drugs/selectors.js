import { createSelector } from '@reduxjs/toolkit';

export const selectDrugs = state => state.drugs.drugs.items;
export const selectIsLoading = state => state.drugs.drugs.isLoading;
export const selectError = state => state.drugs.drugs.error;
export const selectShops = state => state.drugs.drugs.shops;
export const selectFrom = state => state.drugs.filterFrom;
export const selectTo = state => state.drugs.filterTo;

export const selectfilteredDrugs = createSelector(
  [selectFrom, selectTo, selectDrugs],
  (fromPrice, toPrice, drugs) => {
    return drugs.filter(drug => {
      const from = parseFloat(fromPrice);
      const to = parseFloat(toPrice);

      return (
        (!isNaN(from) ? drug.price >= from : true) &&
        (!isNaN(to) ? drug.price <= to : true)
      );
    });
  }
);
