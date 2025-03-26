import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Skill = {
  id: string;
  name: string;
  icon: string;
};

type FormState = {
  target: string;
  skills: Skill[];
  email: string;
};

const initialState: FormState = {
  target: "",
  skills: [],
  email: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setTarget: (state, action: PayloadAction<string>) => {
      state.target = action.payload;
    },
    toggleSkillSelection: (state, action: PayloadAction<Skill>) => {
      const exists = state.skills.some(skill => skill.id === action.payload.id);
      state.skills = exists 
        ? state.skills.filter(skill => skill.id !== action.payload.id) 
        : [...state.skills, action.payload];
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setTarget, toggleSkillSelection, setEmail } = formSlice.actions;
export default formSlice.reducer;
