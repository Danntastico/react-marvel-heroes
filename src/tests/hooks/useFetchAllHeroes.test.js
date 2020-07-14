import { useFetchAllHeroes } from '../../hooks/useFetchAllHeroes';
import { renderHook } from '@testing-library/react-hooks';

describe('Unit Test for useFetchAllHeroes custom Hook', () => {
  test('Must return Spider-Man name', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAllHeroes('Spider-man', 1)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    console.log(data[0]);
    expect(data[0].name).toBe('Spider-Man');
    expect(loading).toBe(false);
  });
});
