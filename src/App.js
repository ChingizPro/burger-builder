import Layout from './Components/Layout/Layout';
import './index.css';

function App() {
  return (
    <div>
      <Layout>
        <div>Child Component 1</div>
        <div><strong><em>Child Component 2</em></strong></div>
        <div>Child Component 3</div>
      </Layout>
    </div>
  );
}

export default App;
