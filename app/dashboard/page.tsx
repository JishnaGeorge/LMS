'use client'
import Task from '../components/task/Task';
import { signIn, signOut } from '../lib/actions';

const Dashboard: React.FC = () => {
    return <>This is your Dashboard
        <form action={async () => {
            await signOut();
        }}>
            <button>
                Sign out
            </button>
        </form>

        <Task></Task>
        
    </>
}

export default Dashboard