import logo from './logo.svg';
import Farm from './pages/Farm/farm.pages';
import Field from './pages/Field/field.pages';
import SignupLanding from './pages/Landing/SignupLanding/signUpLanding.pages'
import FarmLanding from './pages/Landing/FarmLanding/farmLanding.pages';
import FieldLanding from './pages/Landing/FieldLanding/fieldLanding.pages';
import SensorLanding from './pages/Landing/SensorLanding/sensorLanding.pages'
import Help from './pages/Help/help.pages'
import FarmForm from './pages/Form/FarmForm/farmForm.pages';
import FieldForm from './pages/Form/FieldForm/fieldForm.component';
import SensorForm from './pages/Form/SensorForm/sensorForm.component';
import SignupForm from './pages/Form/SignupForm/signupForm.pages';

function App() {
  return (
    <div className="App">
      {/* <Farm/> */}
      {/* <Field/> */}
      {/* <SignupLanding/> */}
      {/* <FarmLanding/> */}
      {/* <FieldLanding/> */}
      {/* <SensorLanding/> */}
      {/* <Help/> */}
      {/* <FarmForm/> */}
      {/* <FieldForm/> */}
      {/* <SensorForm/> */}
      <SignupForm/>
    </div>
  );
}

export default App;
