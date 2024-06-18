import { create } from "zustand";
import { ACTION } from "../models/task";

interface ModalState {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  action?: ACTION;
  setAction: (action: ACTION) => void;
}
const useTaskStore = create<ModalState>()((set) => ({
  isOpenModal: false,
  openModal: () => set({ isOpenModal: true }),
  closeModal: () => set({ isOpenModal: false }),
  action: undefined,
  setAction: (action) => set({ action }),
}));
export default useTaskStore;
