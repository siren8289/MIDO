package com.mido.verification.context;

public class WorkContextResponse {

    private String repoUrl;
    private String commitHash;
    private Integer prNumber;

    public static WorkContextResponse from(WorkContext ctx) {
        WorkContextResponse r = new WorkContextResponse();
        r.setRepoUrl(ctx.getDisplayRepoUrl());
        r.setCommitHash(ctx.getDisplayCommitHash());
        r.setPrNumber(ctx.getDisplayPrNumber());
        return r;
    }

    public String getRepoUrl() { return repoUrl; }
    public void setRepoUrl(String repoUrl) { this.repoUrl = repoUrl; }
    public String getCommitHash() { return commitHash; }
    public void setCommitHash(String commitHash) { this.commitHash = commitHash; }
    public Integer getPrNumber() { return prNumber; }
    public void setPrNumber(Integer prNumber) { this.prNumber = prNumber; }
}
