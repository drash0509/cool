import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function TestButton() {
  return (
    <button className="btn btn-primary" onClick={() => alert("Button clicked!")}>Test Button</button>
  );
}
