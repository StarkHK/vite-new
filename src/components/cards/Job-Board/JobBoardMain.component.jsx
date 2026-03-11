import { useEffect, useState, useRef } from "react";
import JobPosting from "./JobPosting.component";

const PAGE_SIZE = 6;

const JobBoardMainComponent = () => {
  const [fetchingJobDetails, setFetchingJobDetails] = useState(false);
  const [page, setPage] = useState(0);
  const [jobIds, setJobIds] = useState(null);
  const [jobs, setJobs] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  async function fetchJobIds(currPage) {
    let jobs = jobIds;
    if (!jobs) {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json",
      );
      jobs = await res.json();

      // No-op if component is unmounted.
      if (!isMounted.current) {
        return;
      }

      setJobIds(jobs);
    }

    const start = currPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return jobs.slice(start, end);
  }

  async function fetchJobs(currPage) {
    const jobIdforPage = await fetchJobIds(currPage);

    setFetchingJobDetails(true);

    const jobsForPage = await Promise.all(
      jobIdforPage.map((jobId) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(
          (res) => res.json(),
        ),
      ),
    );

    if (!isMounted.current) {
      return;
    }
    setFetchingJobDetails(false);
    const combinedJobs = [...jobs, ...jobsForPage];
    setJobs(combinedJobs);
  }

  return (
    <>
      {jobIds == null ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <div className="grid gap-4" role="list">
            {jobs.map((job) => (
              <JobPosting key={job.id} {...job} />
            ))}
          </div>
          {jobs.length > 0 && page * PAGE_SIZE + PAGE_SIZE < jobIds.length && (
            <button
              className="rounded-sm border-2 border-current w-sm mt-6 p-4 bg-indigo-500 hover:bg-fuchsia-500"
              disabled={fetchingJobDetails}
              onClick={() => setPage(page + 1)}
            >
              {fetchingJobDetails ? "Loading..." : "Load more jobs"}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default JobBoardMainComponent;
