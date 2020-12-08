import React from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

export default function Test() {

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div>
        <MuiAccordion expanded={expanded === 'body'} onChange={handleChange('body')}>
            <MuiAccordionSummary aria-controls="" id="">
            <div>Collapsible Group Item #1</div>
            <div>Collapsible Group Item #1</div>
            <div>Collapsible Group Item #1</div>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </div>
            </MuiAccordionDetails>
        </MuiAccordion>
        <MuiAccordion expanded={expanded === 'arms'} onChange={handleChange('arms')}>
            <MuiAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div>Collapsible Group Item #1</div>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </div>
            </MuiAccordionDetails>
        </MuiAccordion>
      </div>

      <div>
      <MuiAccordion expanded={expanded === 'kk'} onChange={handleChange('kk')}>
            <MuiAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div>Collapsible Group Item #1</div>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </div>
            </MuiAccordionDetails>
        </MuiAccordion>
      </div>
    </div>
  );
}
