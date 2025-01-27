import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-white text-black dark:text-gray-200 dark:bg-gradient-to-r from-slate-900 via-black to-gray-900 min-h-screen'>
        {children}
      </div>
    </div>
  );
}
