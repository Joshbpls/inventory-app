import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import {InventoryTable} from "./InventoryTable";


function Dashboard() {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={3} lg={3}>
                <Card>
                    <CardContent>
                        <CardHeader title="Hello"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Card>
                    <CardContent>
                        <CardHeader title="Inventory Table"/>
                        <InventoryTable items={[
                            { name: "Test", amount: 100, category: "Test"},
                            { name: "Test1", amount: 100, category: "Test"},
                            { name: "Test2", amount: 100, category: "Test"},
                            { name: "Test3", amount: 100, category: "Test"},
                            { name: "Test4", amount: 100, category: "Test"},
                            { name: "Test5", amount: 100, category: "Test"},
                            { name: "Test6", amount: 100, category: "Test"},
                            { name: "Test7", amount: 100, category: "Test"},
                            { name: "Test8", amount: 100, category: "Test"},
                            { name: "Test9", amount: 100, category: "Test"},
                            ]} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Card>
                    <CardContent>
                        <CardHeader title="Notifications"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Card>
                    <CardContent>
                        <CardHeader title="Status"/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Dashboard;