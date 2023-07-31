import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetch',
  async () => {
    const res = await axios.get(missionsURL);
    return res.data;
  },
);

const initialState = {
  missions: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMissionMembership: (state, action) => {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.id !== missionId) return mission;
        return { ...mission, isMember: !mission.isMember };
      });
      state.missions = updatedMissions;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      const res = action.payload;
      const missionsData = res.map((mission) => {
        const {
          mission_id: id,
          mission_name: name,
          description,
        } = mission;

        return {
          id, name, description, isMember: false,
        };
      });
      state.missions = missionsData;
    });
  },
});

export const missionActions = missionSlice.actions;

export default missionSlice;
