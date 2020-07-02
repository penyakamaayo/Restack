  class RepliesController < ApplicationController
  before_action :set_reply, only: [:show, :edit, :update, :destroy]

  def index
    @replies = Reply.all
  end

  def show
  end

  def new
    @reply = Reply.new
  end

  def edit
  end

  def create
    @reply = Reply.new(reply_params)
    @reply.user_id = current_user.id

    if @reply.save
      redirect_to comment_path(@reply.comment_id)
    else 
      render 'new'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reply
      @reply = Reply.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reply_params
      params.require(:reply).permit(:body, :user_id, :comment_id)
    end
end

  # # PATCH/PUT /comments/1
  # # PATCH/PUT /comments/1.json
  # def update
  #   respond_to do |format|
  #     if @comment.update(comment_params)
  #       format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @comment }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @comment.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /comments/1
  # # DELETE /comments/1.json
  # def destroy
  #   @comment.destroy
  #   respond_to do |format|
  #     format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end
