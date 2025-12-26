import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dashboardMetrics: {
    totalCustomers: 0,
    activeDeals: 0,
    revenue: 0,
    growthRate: 0,
  },
  salesData: [],
  predictions: [],
  loading: false,
  error: null,
}

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setDashboardMetrics: (state, action) => {
      state.dashboardMetrics = action.payload
    },
    setSalesData: (state, action) => {
      state.salesData = action.payload
    },
    setPredictions: (state, action) => {
      state.predictions = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const {
  setDashboardMetrics,
  setSalesData,
  setPredictions,
  setLoading,
  setError,
} = analyticsSlice.actions

export default analyticsSlice.reducer
