import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrgantizationPage() {
    return (
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl={"/organization/:id"}
            afterCreateOrganizationUrl={"/organization/:id"}
        />
    );
}
