import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { StepsContainer } from '@/modules/Stepper/container';
import { ThankYou } from '@/components/Thanks';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="min-h-[100dvh] md:py-12 md:grid md:place-content-center bg-magnolia antialiased">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<StepsContainer />} />
              <Route path="/thanks" element={<ThankYou />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
