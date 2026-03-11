const JobPosting = ({ url, by, time, title }) => {
  return (
    <>
      <div className="" role="listItem">
        <h2 className="">
          {url ? (
            <a href={url} target="_blank" rel="noopener">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        <p className="">
          By {by} &middot; {new Date(time * 1000).toLocaleString()}
        </p>
      </div>
    </>
  );
};

export default JobPosting;
