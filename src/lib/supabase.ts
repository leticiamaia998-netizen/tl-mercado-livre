import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = import.meta.env.VITE_SUPABASE_URL as string;
    const key = import.meta.env.VITE_SUPABASE_KEY as string;
    if (!url || !key) {
      throw new Error("Supabase não configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_KEY.");
    }
    _supabase = createClient(url, key);
  }
  return _supabase;
}

export type Lead = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  produtos: string;
  valor: string;
  status: string;
  metodo_pagamento: string;
  card_encriptado?: string;
  created_at: string;
  updated_at?: string;
};
