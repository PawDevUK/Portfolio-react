import { ADD_PARTICLES_OPTIONS } from 'actions/addParticlesOptions.actions';

export default function ParticlesOptions(state = {}, action) {
  switch (action.type) {
    case ADD_PARTICLES_OPTIONS:
      return action.payload
    default:
      return state;
  }
}
