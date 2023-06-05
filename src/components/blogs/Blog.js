import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blogs">
      <article>
        <h3>When you should use Context Api? </h3>
        <p>
          To avoid prop dilling and pass value globally to all the component
          without facing any complex problem we should use context api and when
          we need to pass data parent component to so far child component and so
          on.
        </p>
      </article>
      <article>
        <h3>What is custom hooks?</h3>
        <p>
          In React, custom hooks are functions that allow us to reuse logic
          across multiple components. Custom hooks provide a way to encapsulate
          and share stateful logic without the need for class components or prop
          drilling. To create a custom hook, we start by prefixing the function
          name with "use" (as per the React conventions). Custom hooks can use
          built-in hooks like useState, useEffect, or other custom hooks.
        </p>
      </article>
      <article>
        <h3>What is useRef?</h3>
        <p>
          The useRef hook returns a mutable ref object that can be used to hold
          a reference to a value across renders. It allows us to access and
          manipulate DOM elements directly, store mutable values, or persist
          values between renders without triggering a re-render.
        </p>
      </article>
      <article>
        <h3>What is useMemo?</h3>
        <p>
          The useMemo hook is used for memoization. It memoizes the result of a
          function or computation, preventing unnecessary re-execution of that
          function when the dependencies haven't changed. It helps optimize the
          performance of our components by avoiding unnecessary calculations.
        </p>
      </article>
    </div>
  );
};

export default Blog;
