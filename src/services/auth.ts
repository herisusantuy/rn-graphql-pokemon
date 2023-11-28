import axios from '../utils/http/axios';
import { HttpResponse } from 'src/types/HttpResponse';
import { supabase } from './suppbase';
import type { Provider } from '@supabase/supabase-js';

export const authenticate = async (
  email: string,
  password: string
): Promise<{ token: string }> => {
  try {
    const request = await axios.post<HttpResponse<{ token: string }>>(
      'auth/login',
      { email, password }
    );
    const { data } = request.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const response = await supabase.auth.signUp({ email, password });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signInWithOAuth = async (provider: Provider) => {
  try {
    const response = supabase.auth.signInWithOAuth({
      provider: provider
    });
    console.log(
      '🚀 ~ file: auth.ts ~ line 36 ~ signInWithOAuth ~ response',
      response
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (): Promise<number> => {
  try {
    const request = await axios.post<HttpResponse<any>>('auth/logout');
    const { data } = request.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export default { signInWithOAuth };
