import { MarksTypes } from "../types";

interface MarksTableProps {
  heading: string;
  tableHeading: string[];
  tableMarks: MarksTypes | null;
}

const MarksTable = ({ heading, tableHeading, tableMarks }: MarksTableProps) => {
  return (
    <div className="container_marks">
      <div className="card_markd">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="heading">{heading}</div>
            </div>
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    {tableHeading.map((heading, i) => (
                      <th key={i}>{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {tableMarks
                      ? tableMarks.assignmentMarks.map((item, i) => (
                          <td key={i}>{item.marks ?? "null"}</td>
                        ))
                      : tableHeading.map((_, i) => <td key={i}>{"null"}</td>)}
                    {tableMarks && <td>{tableMarks?.totalAssignmentMarks}</td>}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarksTable;
