/* eslint-disable react/no-unescaped-entities */
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { ContentWrapper } from './common';
import Layout from './layout/Layout';
import routes, { RoutePathDefinition } from './routes/routes';

function App() {
    return (
        <Layout>
            <Routes>
                <>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    {routes.map(({ path, element }: RoutePathDefinition) => {
                        if (element) {
                            return (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<ContentWrapper>{element()}</ContentWrapper>}
                                />
                            );
                        }
                        return null;
                    })}
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There's nothing here yet!</p>
                            </main>
                        }
                    />
                </>
            </Routes>
        </Layout>
    );
}
export default App;
