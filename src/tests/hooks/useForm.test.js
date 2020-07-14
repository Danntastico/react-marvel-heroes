import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Unit Test for useForm', () => {
  const initialState = {
    name: 'TestName',
  };

  test('Should return a default form', () => {
    const { result } = renderHook(() => useForm(initialState));
    const [values] = result.current;
    expect(values).toEqual(initialState);
  });

  test('Should change a form value (name)', () => {
    const { result } = renderHook(() => useForm(initialState));
    const [values, handleInputChange] = result.current;
    console.log(values);

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'newTest',
        },
      });
    });
    const [newValues] = result.current;
    expect(newValues).toEqual({ ...initialState, name: 'newTest' });
  });
});
