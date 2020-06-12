import AppBarLayout from 'components/framework/AppBarLayout';
import AppPage from 'components/framework/AppPage';

const Page: AppPage = () => (
  <>
    <div className="content">
      <code>Body content: pages/index.tsx</code>
    </div>
    <style jsx>{`
      .content {
        border: 4px dashed grey;
        box-sizing: border-box;
        padding: 16px;
        height: 100%;
      }
    `}</style>
  </>
);

Page.layout = AppBarLayout;

export default Page;
