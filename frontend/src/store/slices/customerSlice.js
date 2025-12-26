import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  customers: [],
  selectedCustomer: null,
  loading: false,
  error: null,
  filters: {
    search: '',
    status: 'all',
    segment: 'all',
  },
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
  },
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload
    },
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload }
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
  setCustomers,
  setSelectedCustomer,
  setFilters,
  setPagination,
  setLoading,
  setError,
} = customerSlice.actions

export default customerSlice.reducer
