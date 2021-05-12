import ReactFullpage from '@fullpage/react-fullpage';

export default function Resume() {
  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section bg-red-400">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
            </div>
            <div className="section bg-yellow-400">
              <p>Section 2</p>
            </div>
            <div className="section bg-blue-400">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
