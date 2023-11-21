import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Full Name",
        date: "Date of Journal Entry",
        cards: "Cards in Reading",
        journal_entry: "Journal Entry",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseDate: (state, action) => { state.date = action.payload },
        chooseCards: (state, action) => { state.cards = action.payload },
        chooseJournalEntry: (state, action) => { state.journal_entry = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseDate, chooseCards, chooseJournalEntry } = rootSlice.actions