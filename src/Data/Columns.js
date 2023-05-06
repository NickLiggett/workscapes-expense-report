let total = 0;
const columns = [
  {
    field: "date",
    headerName: "Date",
    type: "date",
    flex: 1 / 10,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "location",
    headerName: "Location",
    flex: 1 / 8,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "airFare",
    headerName: "Air Fare",
    flex: 1 / 15,
    editable: true,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      if (params.row.airFare) {
        return parseFloat(params.row.airFare).toFixed(2)
      }
      params.row.airFare = "0.00"
    }
  },
  {
    field: "lodging",
    headerName: "Lodging",
    flex: 1 / 15,
    editable: true,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      if (params.row.lodging) {
        return parseFloat(params.row.lodging).toFixed(2)
      }
      params.row.lodging = "0.00"
    }
  },
  {
    field: "tollsCabFareParking",
    headerName: `Tolls/CabFare/Parking`,
    flex: 1 / 15,
    editable: true,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      if (params.row.tollsCabFareParking) {
        return parseFloat(params.row.tollsCabFareParking).toFixed(2)
      }
      params.row.tollsCabFareParking = "0.00"
    }
  },
  {
    field: "milesDriven",
    headerName: "Miles Driven",
    flex: 1 / 15,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "milesCost",
    headerName: "Cost",
    flex: 1 / 15,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      return parseFloat(params.row.milesDriven * 0.54).toFixed(2)
    }
  },
  {
    field: "personalMeals",
    headerName: "Personal Meals",
    flex: 1 / 15,
    editable: true,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      if (params.row.personalMeals) {
        return parseFloat(params.row.personalMeals).toFixed(2)
      }
      params.row.personalMeals = "0.00"
    }
  },
  {
    field: "businessMealsEnt",
    headerName: "Business Meals & Ent.",
    flex: 1 / 15,
    editable: true,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      if (params.row.businessMealsEnt) {
        return parseFloat(params.row.businessMealsEnt).toFixed(2)
      }
      params.row.businessMealsEnt = "0.00"
    }
  },
  {
    field: "marketEvents",
    headerName: "Market Events",
    flex: 1 / 15,
    editable: true,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      if (params.row.marketEvents) {
        return parseFloat(params.row.marketEvents).toFixed(2)
      }
      params.row.marketEvents = "0.00"
    }
  },
  {
    field: "other",
    headerName: "Other",
    flex: 1 / 15,
    editable: true,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      if (params.row.other) {
        return parseFloat(params.row.other).toFixed(2)
      }
      params.row.other = "0.00"
    }
  },
  {
    field: "otherDescription",
    headerName: "Other Description",
    flex: 1 / 10,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "total",
    headerName: "Total",
    flex: 1 / 15,
    editable: false,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      console.log("AirFare: ", params.row.airFare)
      console.log("Lodging: ", params.row.lodging)
      let value =
        parseFloat(params.row.airFare) +
        parseFloat(params.row.lodging) +
        parseFloat(params.row.tollsCabFareParking) +
        parseFloat(params.row.milesDriven * 0.54) +
        parseFloat(params.row.personalMeals) +
        parseFloat(params.row.businessMealsEnt) +
        parseFloat(params.row.marketEvents) +
        parseFloat(params.row.other)

      return value.toFixed(2);
    },
  },
];

export default columns;
