import React from 'react';
import Title from './title';
import { graphql, useStaticQuery } from 'gatsby';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'gatsby';

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        position
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
    const data = useStaticQuery(query)
    const { allStrapiJobs: { nodes: jobs },
    } = data
    const [value, setValue] = React.useState(0)
    const { company, position, date, description } = jobs[value]

    console.log(company, position, date, description);

    return (
        <section className='section jobs'>
            <Title title='experience' />
            <div className='jobs-center'>
                <div className='btn-container'>
                    {jobs.map((job, index) => {
                        return (
                            <button
                                key={job.strapiId}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && "active-btn"}`}
                            >
                                {job.company}
                            </button>
                        );
                    })}
                </div>
                <article className='job-info'>
                    <h3>{position}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{date}</p>
                    {
                        description.map((item) => {
                            return (
                                <div key={item.id} className='job-desc'>
                                    <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                                    <p>{item.name}</p>
                                </div>
                            );
                        })
                    }
                </article>
            </div>
            <Link to='/about' className='button button-center'>
                more info
            </Link>
        </section>
    );
}

export default Jobs;
