// src/stores/inventory.store.ts
import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";

interface Inventory {
  id: string;
  product: string;
  quantity: number;
  artisan: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type InventoryStore = {
  inventories: Inventory[];
  getInventories: () => void;
};

export const useInventoryStore = create<InventoryStore>((set) => ({
  inventories: [],
  getInventories: async () => {
    console.log("Base URL axiosClient:", axiosClient.defaults.baseURL); // 👈 Agregado
    try {
      const { data } = await axiosClient.get<Inventory[]>("/inventory");
      console.log("Datos recibidos:", data); // 👈 Opcional para confirmar que la respuesta llega
      set({ inventories: data });
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  },
}));
