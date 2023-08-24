export type RowProps = {
  [key: string]: any;
};

export type CustomColumnProps = {
  name: string;
  template: (row: RowProps) => JSX.Element;
};

export type ColumnProps = {
  key: string;
  name: string;
};

export type TableProps = {
  columns: ColumnProps[];
  data: RowProps[];
  customColumns?: CustomColumnProps[];
};

export function Table({ columns, data, customColumns }: TableProps) {
  return (
    <div className="rounded-lg border border-dark-300 dark:border-dark-600">
      <table className="w-full table-auto">
        <thead className="">
          <tr className="border-b border-dark-300 dark:border-dark-600">
            {columns.map((column, index) => (
              <th className="text-left p-3" key={index}>
                {column.name}
              </th>
            ))}
            {customColumns?.map((column, index) => (
              <th className="text-left p-3" key={index}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              className="[&:not(:last-child)]:border-b border-dark-300 dark:border-dark-600"
              key={index}
            >
              {columns.map((column, index) => (
                <td className="p-3" key={index}>
                  {row[column.key]}
                </td>
              ))}
              {customColumns?.map((column, index) => (
                <td className="p-3" key={index}>
                  {column.template(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
