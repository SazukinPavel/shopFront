import { RootState } from './../store/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useTypedDispatch } from './useTypedDispatch';



export const useTypedSelector:TypedUseSelectorHook<RootState>=useSelector