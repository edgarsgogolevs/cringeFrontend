<template>
    <DashboardHeader />
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <DashboardSidebar />
            <div class="col py-3 text-white bg-secondary">
                <div class="container-fluid px-4">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>