import { Parser } from "json2csv";

export class CsvExporter {
  static export(data, fields) {
    const parser = new Parser({ fields });
    return parser.parse(data);
  }

  static downloadFile(csvContent, filename) {
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}