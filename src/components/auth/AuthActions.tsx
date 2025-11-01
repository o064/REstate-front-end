import Button from '../../ui/Button';
import Divider from './Divider';
import Google from './Google';
type AuthActionsProps = {
  actionFor: string;
};
function AuthActions({ actionFor }: AuthActionsProps) {
  return (
    <>
      {/* sign in / Signup*/}
      <Button variant="primary" type="submit">
        {actionFor}
      </Button>
      {/* divider */}
      <Divider></Divider>
      {/* google login */}
      <Button variant="secondary" type="button">
        <Google />
        <span className="font-medium text-gray-700">continue with Google</span>
      </Button>
    </>
  );
}

export default AuthActions;
