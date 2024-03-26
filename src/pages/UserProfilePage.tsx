import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

export default function UserProfilePage() {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) return <span>Loading...</span>;
  if (!currentUser) return <span>Unable to load the user</span>;

  return (
    <UserProfileForm
      onSave={updateUser}
      isLoading={isUpdateLoading}
      getCurrentUser={currentUser}
    />
  );
}
